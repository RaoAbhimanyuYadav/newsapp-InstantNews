import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize: 12,
    category: 'general'
  }
   
  static propTypes = {
    country: PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading : false,
      page:1,
      totalResults:0
    }
    document.title  = `${this.props.category.toUpperCase().slice(0,1)+this.props.category.slice(1)}-- Instant News`

  }
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e82a05404e5430eac9b21510d5cd693&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading:true})
    let data=await fetch(url); //fetch api and return a promise
    let parsedData =await data.json();
    this.setState ({articles : parsedData.articles,totalResults:parsedData.totalResults,
      loading: false})
  }
  //async can wait for its body component to resolve promises
  async componentDidMount(){// firstly constuctor run then render then compnentDidMOunt
    this.updateNews();

  }
  handleNextClick= async()=>{
    this.setState({page:this.state.page+1})
    this.updateNews()
  }
  handlePreviousClick= async()=>{
    this.setState({page:this.state.page-1})
    this.updateNews()
  }

  render() {
    return(
        <div className='container my-3'>

          <h1 className='container text-center'>Instant News -- Top {this.props.category.toUpperCase().slice(0,1)+this.props.category.slice(1) } headlines</h1>  
          {this.state.loading && <Spinner/>}
            <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                return <div key ={element.url} className="col-md-4">
                <NewsItem title={element.title} discription={element.content?element.content.slice(0,100):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              })}
            </div>
            <div className="container d-flex justify-content-between">
              <button type="button" disabled={this.state.page<=1} onClick={this.handlePreviousClick} className="btn btn-secondary btn-sm">&larr; Previous</button>
              <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary btn-sm " onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    );
  }
}

export default News;
