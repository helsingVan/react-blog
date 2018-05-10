import React, { Component } from 'react';

const marked = require('marked');


class Page4 extends Component {

    componentDidMount () {
        console.log(marked);
       
    }   

    render () {
        return (
            <div>page4</div>
        )
    }
}

export default Page4;