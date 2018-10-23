import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainTabBar from './common/tabbar';
import MainContent from './common/content';

import './app.sass';

class App extends Component {

  componentDidMount () {
    
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <MainContent/>
          <MainTabBar/>
        </Fragment>
      </BrowserRouter>
        
    );
  }
}

export default App;
