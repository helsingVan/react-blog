import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { routerList } from '../../config';

import './style.sass';
class MainContent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            routerList
        };
    }
    render () {
        const { routerList } = this.state;
        return (
            <div className="main-content">
                {
                    routerList.map(item => (
                        <Route
                            key={item.id}
                            path={item.path}
                            component={item.component}
                        />
                    ))
                }
            </div>
        );
    }
}

export default MainContent;