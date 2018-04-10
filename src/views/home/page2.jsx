import React, { Component } from 'react';

import ArticleList from '../../components/listitem/article-list';

class Page2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [
                { title: '标题一' },
                { title: '标题二'}
            ]
        }
    }

    render () {

        const ArticleLists = this.state.list.map(v => (
            <ArticleList content={v} />
        ));
        return (
            <div className="blog">
                {ArticleLists}
            </div>
        )
    }
}

export default Page2;