import React, { Component } from 'react';
import logo from './logo.svg';
import './app.sass';

class App extends Component {

  componentDidMount () {
      

      // Test是构造函数，用它生成同一类别的对象，一搬用首字母大写来区别构造函数跟普通函数
      // function Test () {
      //   this.a = 'a';
      // }

      // var testObj = new Test();
      // console.log(testObj);

      // es6 写法
      class Test {
        constructor () {
          this.a = 'a';
        }

        api () { alert (this.a); }
      }
      var testObj2 = new Test();
      console.log(testObj2);
  }
  render() {
    return (
      <div className="app">
        <p>test</p>
      </div>
    );
  }
}

export default App;
