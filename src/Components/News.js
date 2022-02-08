import React, { Component } from 'react';
import NewsItem from './NewsItem';



export class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles: [],
      loading : false,
      page:1,
      totalResults:0
    }

  }
  //async can wait for its body component to resolve promises
  async componentDidMount(){// firstly constuctor run then render then compnentDidMOunt
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=7e82a05404e5430eac9b21510d5cd693&pageSize=27&spage=1';
    let data=await fetch(url); //fetch api and return a promise
    let parsedData =await data.json();
    this.setState ({articles : parsedData.articles,totalResults:parsedData.totalResults})

  }
  handleNextClick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=7e82a05404e5430eac9b21510d5cd693&pageSize=27&page=${this.state.page + 1}`;
    let data=await fetch(url); //fetch api and return a promise
    let parsedData =await data.json();
    this.setState({
      page: this.state.page + 1,
      articles : parsedData.articles
    })


  }
  handlePreviousClick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=7e82a05404e5430eac9b21510d5cd693&pageSize=27&page=${this.state.page - 1}`;
    let data=await fetch(url); //fetch api and return a promise
    let parsedData =await data.json();
    this.setState({
      page: this.state.page - 1,
      articles : parsedData.articles
    })

  }
  render() {
    return(
        <div className='container my-3'>

          <h2>Instant News -- Top headlines</h2>  
            <div className="row">
              {this.state.articles.map((element)=>{
                return <div key ={element.url} className="col-md-4">
                <NewsItem title={element.title} discription={element.content?element.content.slice(0,100):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
              })}
            </div>
            <div className="container d-flex justify-content-between">
              <button type="button" disabled={this.state.page<=1} onClick={this.handlePreviousClick} className="btn btn-secondary btn-sm">&larr; Previous</button>
              <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/27)} className="btn btn-primary btn-sm" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    );
  }
}

export default News;
