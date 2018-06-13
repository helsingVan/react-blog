import React, { Component } from 'react';
import _ from 'lodash';

var a = [1,2,3,4,5,6,7];
var testList = [
    { name: 'fan' },
    { name: 'fan' },
    { name: 'fan' },
    { name: 'fan' },
    { name: 'fan' },
    { name: 'fan' },
    { name: 'fan' },
];
var falseList = ['1', 0, '0', NaN, '', undefined, null, false];
var a1 = [1,2,3,4,5,342];
var a2 = [2,3,4,5,6];
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true },
    { name: 'fan'},
    { name: 'fan', active: 'false'}
  ];
var filters = _.dropWhile(users, (item) => {
    return !item.active;
})
var keyPars = [
    ['key', 'key'],
    ['value', 'fangau']
];
var simple = _.intersectionBy(testList, users, 'name')
console.log(simple);

class Home extends Component {

    render () {
        return (
            <div>首页</div>
        )
    }
}

export default Home;