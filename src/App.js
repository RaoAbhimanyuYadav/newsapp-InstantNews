
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import News from './Components/News';

export default class App extends Component {
  api=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() { 
    return(
      <div>
        <Router>
         <Navbar/>
         <LoadingBar
        color='#f11946'
        progress={this.state.progress} 
        // onLoaderFinished={() => this.setProgress(0)}
      />
          <Routes>
          <Route path='/business' element={<News setProgress={this.setProgress} api={this.api} key="business" pageSize={12} country='in' category = 'business'/>}></Route>
          <Route path='/entertainment' element={<News setProgress={this.setProgress} api={this.api} key="entertainment" pageSize={12} country='in' category = 'entertainment'/>}></Route>
          <Route path='/' element={<News setProgress={this.setProgress} api={this.api} key="general" pageSize={12} country='in' category = 'general'/>}></Route>
          <Route path='/health' element={<News setProgress={this.setProgress} api={this.api} key="health" pageSize={12} country='in' category = 'health'/>}></Route>
          <Route path='/science' element={<News setProgress={this.setProgress} api={this.api} key="science" pageSize={12} country='in' category = 'science'/>}></Route>
          <Route path='/sports' element={<News setProgress={this.setProgress} api={this.api} key="sports" pageSize={12} country='in' category = 'sports'/>}></Route>
          <Route path='/technology' element={<News setProgress={this.setProgress} api={this.api} key="technology" pageSize={12} country='in' category = 'technology'/>}></Route>
          </Routes>
        </Router>
      </div>
    );  
  }
}
