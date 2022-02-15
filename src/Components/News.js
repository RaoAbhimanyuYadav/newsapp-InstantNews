import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  const [articles, setArticles]=useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  
  const updateNews = async() => {
    props.setProgress(50);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url); //fetch api and return a promise
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  //async can wait for its body component to resolve promises
  useEffect(() => {
    document.title = `${
      props.category.toUpperCase().slice(0, 1) +
      props.category.slice(1)
    }-- Instant News`;
    updateNews();// eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page+1}`;
    setPage(page+1);
    setLoading(true);
    let data = await fetch(url); //fetch api and return a promise
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  
  };
    return (
      <>
        <h1 className="container text-center">
          Instant News -- Top{" "}
          {props.category.toUpperCase().slice(0, 1) +
            props.category.slice(1)}{" "}
          headlines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <NewsItem
                      title={element.title}
                      discription={
                        element.content ? element.content.slice(0, 100) : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
