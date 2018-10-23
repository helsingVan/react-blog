import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainTabBar from './common/tabbar';
import MainContent from './common/content';
import { routerList } from './config';

import './app.sass';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routerList
    };
  }

  componentDidMount () {
    
  }
  render() {
    const { routerList } = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          {
            routerList.map(item => (
              <Route key={item.id} path={item.path} component={item.component}/>
            ))
          }  
        </Fragment>    
          
      </BrowserRouter>
        
    );
  }
}

export default App;
