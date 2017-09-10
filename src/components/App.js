import React, { Component } from 'react';
import DataApi from '../dataApi';
import ArticleList from './ArticleList';
import { data } from '../testData';

const api = new DataApi(data);

class App extends Component {
    constructor() {
        super();

        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                authors={this.state.authors}
            />
        )
    }
}

export default App;
