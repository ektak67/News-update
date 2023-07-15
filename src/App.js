import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from './actions';
import './App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderList() {
    
    return this.props.news.map(article => {
      return (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt="article" />
          <a href={article.url}>Read more</a>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { news: state.news };
};

export default connect(mapStateToProps, { fetchNews })(App);
