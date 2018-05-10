import React, {Component} from 'react';


import './style.sass';

class ArticleList extends Component {
    constructor (props) {
        
        super(props);
    }
    
    render () {
        
        return (
            <div className="article-list">
                <h2>{this.props.content.title}</h2>
                <p>{this.props.content.content}</p>
                <footer>
                    <span>{this.props.content.views}</span>
                    <span>{this.props.content.comments}</span>
                    <span>{this.props.content.loves}</span>
                    <time>{this.props.content.time}</time>
                </footer>
            </div>
        );
    }
}

export default ArticleList;