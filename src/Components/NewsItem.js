import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title, discription} = this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/D553N7F6EQI6XERKYQGJO5F4JA.jpg&w=1440" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
