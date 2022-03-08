import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes} from "react-router-dom";
  
  import LandingPage from './components/views/LandingPage/LandingPage'
  import LoginPage from './components/views/LoginPage/LoginPage'
  import RegisterPage from './components/views/RegisterPage/RegisterPage'
  import MovieDetail from './components/views/MovieDetail/MovieDetail'
  import FavoritePage from './components/views/FavoritePage/FavoritePage'

  function App() {
  
    return (

      <BrowserRouter>

      <Routes>
      
      <Route exact path="/" element = {<LandingPage/> }/>
      <Route exact path="/login" element = {<LoginPage/>}/>
      <Route exact path="/register" element = {<RegisterPage/>}/>
      <Route exact path="/movie/:movieId" element = {<MovieDetail/>}/>
      <Route exact path="/favorite" element = {<FavoritePage/>}/> 
      
      </Routes>
      
      </BrowserRouter>
      
    );
  
  }
export default App;
