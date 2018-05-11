import React, { Component } from 'react';
import { BrowserRouter, NavLink, Link, Route } from 'react-router-dom';
import './style.css';
import LogoImg from './logo.jpeg';

class MainHeader extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const MenuLink = ({text, to, activeExact}) => (
            <Route 
                path={to}
                exact={activeExact}
                children={({match}) => (
                    <div className={match ? "active": ""}>
                        <Link to={to}>{text}</Link>
                    </div>
                )}
            />
        );


        //const navLinks = this.props.nav.map(v => <NavLink key={v.i} to={v.url}>{v.text}</NavLink>);
        const NavLinks = this.props.nav.map(v => <MenuLink key={v.i} to={v.url} activeExact={v.exact} text={v.text}></MenuLink>);
        return (
            <header className="main-header">
                <figure className="logo">
                    <img src={LogoImg} alt=""/>
                </figure>
                
                <nav>
                    {NavLinks}
                </nav>
                
            </header>      
        )
    }
}

export default MainHeader;