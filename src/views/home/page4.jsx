import React, { Component } from 'react';
import highlightjs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/solarized-dark.css';
import myMarked, { Renderer } from 'marked';
import Axios from 'axios';
import * as Article from './test.md';

class Page4 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            code: Article
        };
        this.setHtml = this.setHtml.bind(this);
    }

    setHtml () {
        this.setState({
            code: myMarked(this.state.code)
        });
    }

    getArticle () {
        Axios.get('/article/test').then((res) => {
            let {errno, errmsg, data} = res.data;
            this.setState({
                code: myMarked(data)
            })
        });
    }

    componentDidMount () {
        highlightjs.initHighlightingOnLoad();
        myMarked.setOptions({
            renderer: new myMarked.Renderer(),
            highlight: function(code) {
              return require('highlight.js').highlightAuto(code, ['javascript']).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
          });
        this.setHtml();
        this.getArticle();
    }   

    render () {
        let html = {__html: this.state.code}
        return (
            <div dangerouslySetInnerHTML={html}>
                
            </div>
        )
    }
}

export default Page4;