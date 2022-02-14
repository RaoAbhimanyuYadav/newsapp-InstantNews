import React, { Component } from "react";
import logo from "./icon.jpg";

export class NewsItem extends Component {
  render() {
    let { title, discription, imgUrl, newsUrl, author, date , source} = this.props;
    return (
      <div className="card my-3">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}> {source}
        </span>
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
}

export default NewsItem;
