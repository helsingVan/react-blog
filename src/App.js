import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import MainHeader from './components/header/header';
import Home from './views/home/home';

import blog from './views/blog/blog';
import Page3 from './views/home/page3';
import Page4 from './views/home/page4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
          { url: '/', path: '/', text: '首页', i: 0, component: Home, exact: true},
          { url: '/diary', path: '/diary/:id', text: '随笔', i: 1, component: blog, exact: false},
          { url: '/album', path: '/album', text: '相册', i: 2, component: Page3, exact: false},
          { url: '/about', path: '/about', text: '关于', i: 3, component: Page4, exact: false}
      ]
    }
  }
  render() {
    const Routes = this.state.nav.map((item) => {
      return <Route key={item.i} path={item.url} component={item.component} exact={item.exact}></Route>;
    });
    return (
      
        <div>
          
          <MainHeader nav={this.state.nav}/>
          <section className="main-content">
            {Routes}
          </section>
        </div>  
      
    );
  }
}

export default App;
