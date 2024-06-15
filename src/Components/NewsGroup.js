import NewsArticle from "./NewsArticle";

export default function NewsGroup (props) {
    return (
      <div  className="container my-3">
        <h1 style={{ marginTop:'100px'}}>Top Headlines</h1>
        <NewsArticle newsAPIKey={props.newsAPIKey} setProgress={props.setProgress} category={props.category} country={props.country} pageSize={props.pageSize}/>
      </div>
    );
  
}
