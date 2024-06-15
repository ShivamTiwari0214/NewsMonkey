import React, { Component } from "react";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsArticle extends Component {
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 10,
    };
    document.title = `${this.props.category}- NewsMonkey`;
  }

  async pageUpdate() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsAPIKey}&pageSize=10&page=${this.state.page}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.pageUpdate();
  }


   showLoader = 1 ;
   fetchData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsAPIKey}&pageSize=10&page=${this.state.page+1}`;
    
    this.setState({
      page:this.state.page+1
    })
    
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.showLoader=this.state.articles.concat(parsedData.articles).length
    console.log(this.showLoader +' '+ this.state.totalResults)
  }


  render() {
    // let { title, descricption,imageURL } = this.props;
    // let element = this.state.articles[0];

    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchData}
          hasMore={this.showLoader<this.state.totalResults}
          loader={<Loading/>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
        <div className="row">
          {this.state.articles.map((element ,id) => {
              return (
                element.title != null &&
                element.description != null && (
                  <div
                    key={id}
                    className="card my-3 col-md-4 mx-3 my-3"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={
                        element.urlToImage ||
                        `https://th.bing.com/th/id/OIP.3BFaqD52uCHrgLR-IIzRqgHaHa?rs=1&pid=ImgDetMain`
                      }
                      className="card-img-top"
                      alt="Unable to load "
                    />
                    <div key={id} className="card-body ">
                      <h5 className="card-title">
                        {element.title.length > 45
                          ? element.title.slice(0, 45) + `...`
                          : element.title}
                      </h5>
                      <p className="card-text">
                        {element.description.length > 88
                          ? element.description.slice(0, 88) + `...`
                          : element.description}
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {" "}
                          <strong>{element.author || "unknown"}</strong> on{" "}
                          <strong>
                            {" "}
                            {new Date(element.publishedAt).toGMTString() ||
                              "unknown"}
                          </strong>
                        </small>
                      </p>
                      <a
                        rel="noreferrer"
                        href={element.url}
                        target="_blank"
                        className="btn btn-sm btn-primary"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                )
              );
            })}
          
        </div>
        </div>
      </InfiniteScroll>
      </>
    );
  }
}
