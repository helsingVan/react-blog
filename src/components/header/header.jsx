import React, { Component } from 'react';
import { BrowserRouter, NavLink, Link } from 'react-router-dom';
import './style.sass';


class MainHeader extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const navLinks = this.props.nav.map(v => <Link key={v.i} to={v.url}>{v.text}</Link>);
        return (
            <header className="main-header">
                <figure className="logo">LOGO</figure>
                
                    <nav>
                        {navLinks}
                    </nav>
                
            </header>      
        )
    }
}

export default MainHeader;