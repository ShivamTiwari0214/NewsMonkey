
import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav';
import NewsGroup from './Components/NewsGroup';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App () {
 const apikey=process.env.REACT_APP_NEWS_API
  // apikey='ebe663a34f6c432c89fb485977547609'
 const [progress,settProgress]=useState(0);
  
 const setProgress = (progress)=>{
    
    settProgress(progress)
  
  }
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Nav></Nav>
      <Routes>
      <Route exact path='/'   element={<NewsGroup newsAPIKey={apikey} setProgress={setProgress}  key={'home'} category="general" country="in" pageSize={5}/>}></Route>
      <Route exact path='/scienceNews'  element={<NewsGroup newsAPIKey={apikey} setProgress={setProgress}  key={'scienceNews'} category="science" country="in" pageSize={5}/>}></Route>
      <Route exact path='/sportsNews'  element={<NewsGroup newsAPIKey={apikey} setProgress={setProgress}  key={'sportsNews'} category="sports" country="in" pageSize={5}/>}></Route>
      <Route exact path='/businessNews'  element={<NewsGroup newsAPIKey={apikey} setProgress={setProgress}  key={'businessNews'} category="business" country="in" pageSize={5}/>}></Route>
      <Route exact path='/healthNews'  element={<NewsGroup newsAPIKey={apikey} setProgress={setProgress}  key={'healthNews'} category="health" country="in" pageSize={5}/>}></Route>
      <Route exact path='/technologyNews'  element={<NewsGroup newsAPIKey={apikey} setProgress={setProgress}  key={'technologyNews'} category="technology" country="in" pageSize={5}/>}></Route>
      <Route exact path='/entertainmentNews'  element={<NewsGroup newsAPIKey={apikey} setProgress={setProgress}  key={'entertainmentNews'} category="entertainment" country="in" pageSize={5}/>}></Route>
      </Routes>
      </Router>
      </>
    )
  
}

