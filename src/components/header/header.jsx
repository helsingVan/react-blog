import React, { Component } from 'react';
import './style.sass';


class MainHeader extends Component {

    render () {
        return (
            <header className="main-header">
                <figure className="logo">LOGO</figure>
                <nav>
                    <a href="javascript:;">首页</a>
                    <a href="javascript">随笔</a>
                    <a href="javascript">相册</a>
                    <a href="javascript">关于</a>
                </nav>
            </header>
        )
    }
}

export default MainHeader;