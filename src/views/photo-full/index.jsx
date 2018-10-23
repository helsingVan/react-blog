import React, { Component } from 'react';

import { data } from '../../config';

import './style.sass';

const Swiper = window.Swiper;

class PhotoFull extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: data.photoWeiboList
        };
    }

    componentDidMount () {
        this.swiper = new Swiper(this.refs.swiperEl, {
            direction: 'vertical'
        });
        
    }

    render () {
        const { list } = this.state;
        return (
            <div className="photo-full">
                <div className="swiper-container" ref="swiperEl">
                    <div className="swiper-wrapper">
                        {
                            list.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <img src={item.url} alt=""/>
                                    <div className="photo-info">
                                        <p>test</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PhotoFull;