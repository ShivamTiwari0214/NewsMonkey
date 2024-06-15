import React, { useEffect,useState } from "react";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsArticle (props){
  const [articles,setArticles]=useState([]);
  // const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults] = useState(10);

  
    
  

 const pageUpdate = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsAPIKey}&pageSize=10&page=${page}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    // setLoading(false)

    props.setProgress(100);
  }
  useEffect(()=>{
    document.title = `${props.category}- NewsMonkey`;
    pageUpdate();
    // eslint-disable-next-line 
  },[])
  


  const fetchData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsAPIKey}&pageSize=10&page=${page+1}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    }


    // let { title, descricption,imageURL } = props;
    // let element = state.articles[0];

    return (
      <>
        <InfiniteScroll
          dataLength={articles.length} 
          next={fetchData}
          hasMore={(articles.length<totalResults)}
          loader={<Loading/>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
        <div className="row">
          {articles.map((element ,id) => {
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


NewsArticle.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
