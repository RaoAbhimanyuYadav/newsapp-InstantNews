import React from "react";
import logo from "./icon.jpg";

const NewsItem=(props)=> {
    let { title, discription, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div className="card my-3">
        <div style={{display: "flex", justifyContent: 'flex-end',right:'0',position:'absolute'}}>
          <span className=" badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
        <img src={imgUrl ? imgUrl : logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{discription}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
}
export default NewsItem;
