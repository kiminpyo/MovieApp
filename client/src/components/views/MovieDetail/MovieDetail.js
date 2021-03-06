import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {API_URL, API_KEY} from'../../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import {IMAGE_BASE_URL} from '../../../Config';
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards'
import {Row} from 'antd'
import Favorite from './Sections/Favorite'
function MovieDetail(props) {
    
  let {movieId} = useParams(props.match);
  
  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
    useEffect(() => {
      
      
      let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        console.log(movieId)
         fetch(endpointInfo)
         .then(response => response.json())
         .then(response =>{
           console.log(response)
           //state에 넣어줌
           setMovie(response)
         })


         let endpointCrew =  `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
         fetch(endpointCrew)
         .then(response => response.json())
         .then(response =>{
           console.log('responseForCrew',response.cast)
           //state에 넣어줌
           setCasts(response.cast)
         })



    }, [])

    const toggleActorView = () =>{
      setActorToggle(!ActorToggle)
    }
  return (
    <div>
       {/* Header  */}

       <MainImage
       image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
       title={Movie.original_title}
       text={Movie.overview}
      />
        {/* body */}
       

      <div style={{width: '85%', margin: '1rem auto'}}>

      <div style={{display: 'flex', justifyContent:'flex-end'}}>
          <Favorite
          movieInfo={Movie}
          movieId= {movieId}

          userFrom={localStorage.getItem('userId')}/>


   
        {/* Movie Info */}
       
      <MovieInfo
      movie={Movie}
      />
        <br />
        
        {/* action Grid */}
        

        <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
          <button onClick={toggleActorView}>Toggle Actor View</button>
        </div>

      {ActorToggle &&
        <Row gutter={[16,16]}>
        {Casts && Casts.map((cast, index)=>(

          <React.Fragment key={index}>
                  <GridCards
                
                  image={cast.profile_path ?
                    `${IMAGE_BASE_URL}w500${cast.profile_path}`: null}                 
                  characterName={cast.name}                  
                  />

          </React.Fragment>
        ))}

      </Row>
}
      </div>
    </div>
  )
}

export default MovieDetail