import React, {useEffect, useState} from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL } from '../../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import auth from '../../../hoc/auth'
import {Row} from 'antd';

function LandingPage(){

  const [Movies, setMovies] = useState([]) 
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      //array[]
      fetchMovies(endpoint)
    },[]) 

      const fetchMovies = (endpoint) =>{
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
          console.log(response.results)
          //...movies가 없을 때는 기존의 state 정보들이 덮어짐. 
          setMovies([...Movies,...response.results])
          setMainMovieImage(response.results[0])
          setCurrentPage(response.page)
        })
     
    }
 const loadMoreItems = () =>{
  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage +1}`;
  //array[]
       fetchMovies(endpoint)
 }
  return(
    
  <div style={{width: '100%', margin: '0'}}>

    {/* Main Image */}
    {MainMovieImage && 
      <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
      title={MainMovieImage.original_title}
      text={MainMovieImage.overview}
      />
    }
    <div style={{width: '85%', margin: '1rem auto'}}>
     <h2>movies by latest</h2>
     <hr />
     {/* Movie Grid Card */}
     {/* gutter = 카드마다 여백 설정 (x,y) */}
      <Row gutter={[16,16]}>
        {Movies && Movies.map((movie, index)=>(

          <React.Fragment key={index}>
                  <GridCards
                  landingPage
                  image={movie.poster_path ?
                    `${IMAGE_BASE_URL}w500${movie.poster_path}`: null}
                  movieId={movie.id}
                  movieName={movie.original_title}                  
                  />

          </React.Fragment>
        ))}

      </Row>

    </div>
    <div style={{display:'flex', justifyContent:'center'}}>
      <button onClick={loadMoreItems}
      >Load more</button>
    </div>

   </div>
  )
}
export default auth(LandingPage, null);