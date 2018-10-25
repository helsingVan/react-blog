import React, { Component } from 'react';
import { List } from 'antd-mobile';

import { data } from '../../config';
import Avatar from '../../common/avatar';
import './style.sass';

class NormalWeibo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: data.photoWeiboList
        };
    }

    render () {
        const { list } = this.state;
        return (
            <div className="normalweibo">
                <List className="weibo-list">
                    {
                        list.map((item, index) => (
                            <List.Item key={index}>
                                <div className="title">
                                    <Avatar/>
                                    <div className="title-info">
                                        <p>撸代码的husky</p>
                                        <time>2018-01-01</time>
                                    </div>

                                </div>
                                <p className="sub-title">{item.subTitle}</p>
                                <figure className="img-container">
                                    <img src={item.url} alt=""/>
                                    <img src={item.url} alt=""/>
                                    <img src={item.url} alt=""/>
                                </figure>
                            </List.Item>
                        ))
                    }
                </List>
            </div>
        );
    }
}

export default NormalWeibo;