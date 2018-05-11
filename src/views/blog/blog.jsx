import React, { Component } from 'react';

import ArticleList from '../../components/listitem/article-list';

import './style.css';

class Page2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [
                { 
                    title: '标题一：雪花落下',
                    content: '三原则：图原创，文原创，诗原创。 雪花落下的时候 看见一树梨花' + 
                    '这川西四月的旅程 转角遇见童话 雪花轻轻飞舞 花儿开满枝丫 关于春天的心事 却有着两种不同的表达 一种是依依不...',
                    time: '2018-01-01 00:00',
                    views: '100',
                    comments: '99',
                    loves: '88',

                },
                { 
                    title: '标题二：顺意盎然',
                    content: '三原则：图原创，文原创，诗原创。 雪花落下的时候 看见一树梨花' + 
                    '这川西四月的旅程 转角遇见童话 雪花轻轻飞舞 花儿开满枝丫 关于春天的心事 却有着两种不同的表达 一种是依依不...',
                    time: '2018-01-01 00:00',
                    views: '100',
                    comments: '99',
                    loves: '88',
                }
            ]
        }
    }

    render () {

        const ArticleLists = this.state.list.map((v,i) => (
            <ArticleList content={v} key={i}/>
        ));
        return (
            <div className="blog-container">
                <section className="article-list-container">
                    {ArticleLists}
                </section>
                <aside className="aside"></aside>
            </div>
        )
    }
}

export default Page2;