import React, { Component } from "react";
import NewsArticle from "./NewsArticle";

export default class NewsGroup extends Component {

  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>
        <NewsArticle newsAPIKey={this.props.newsAPIKey} setProgress={this.props.setProgress} category={this.props.category} country={this.props.country} pageSize={this.props.pageSize}/>
      </div>
    );
  }
}
