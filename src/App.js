
import './App.css';
import Nav from './Components/Nav';
import NewsGroup from './Components/NewsGroup';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  // apikey='ebe663a34f6c432c89fb485977547609'
  state={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState(
      {
      progress:progress
      }
  )
  }
  render() {
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Nav></Nav>
      <Routes>
      <Route exact path='/'   element={<NewsGroup newsAPIKey={this.apikey} setProgress={this.setProgress}  key={'home'} category="general" country="in" pageSize={5}/>}></Route>
      <Route exact path='/scienceNews'  element={<NewsGroup newsAPIKey={this.apikey} setProgress={this.setProgress}  key={'scienceNews'} category="science" country="in" pageSize={5}/>}></Route>
      <Route exact path='/sportsNews'  element={<NewsGroup newsAPIKey={this.apikey} setProgress={this.setProgress}  key={'sportsNews'} category="sports" country="in" pageSize={5}/>}></Route>
      <Route exact path='/businessNews'  element={<NewsGroup newsAPIKey={this.apikey} setProgress={this.setProgress}  key={'businessNews'} category="business" country="in" pageSize={5}/>}></Route>
      <Route exact path='/healthNews'  element={<NewsGroup newsAPIKey={this.apikey} setProgress={this.setProgress}  key={'healthNews'} category="health" country="in" pageSize={5}/>}></Route>
      <Route exact path='/technologyNews'  element={<NewsGroup newsAPIKey={this.apikey} setProgress={this.setProgress}  key={'technologyNews'} category="technology" country="in" pageSize={5}/>}></Route>
      <Route exact path='/entertainmentNews'  element={<NewsGroup newsAPIKey={this.apikey} setProgress={this.setProgress}  key={'entertainmentNews'} category="entertainment" country="in" pageSize={5}/>}></Route>
      </Routes>
      </Router>
      </>
    )
  }
}

