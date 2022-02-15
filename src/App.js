
import './App.css';

import React ,{useState} from 'react';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import News from './Components/News';

const App =()=> {
  const api=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
  
    return(
      <div>
        <Router>
         <Navbar/>
         <LoadingBar
        color='#f11946'
        progress={progress} 
      />
          <Routes>
          <Route path='/business' element={<News setProgress={setProgress} api={api} key="business" pageSize={12} country='in' category = 'business'/>}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} api={api} key="entertainment" pageSize={12} country='in' category = 'entertainment'/>}></Route>
          <Route path='/' element={<News setProgress={setProgress} api={api} key="general" pageSize={12} country='in' category = 'general'/>}></Route>
          <Route path='/health' element={<News setProgress={setProgress} api={api} key="health" pageSize={12} country='in' category = 'health'/>}></Route>
          <Route path='/science' element={<News setProgress={setProgress} api={api} key="science" pageSize={12} country='in' category = 'science'/>}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} api={api} key="sports" pageSize={12} country='in' category = 'sports'/>}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} api={api} key="technology" pageSize={12} country='in' category = 'technology'/>}></Route>
          </Routes>
        </Router>
      </div>
    );  
}

export default App;