import React, {useEffect} from 'react'
import axios from 'axios'

function Favorite() {


    useEffect(() =>{
        let variables = {
            /* userFrom,
            movieId */
        }
        axios.post('/api/favorite/favoriteNumber',variables)
        .then(response => {
            if(response.data.success){

            } else{
                alert('숫자 정보를 가져오는데 실패했습니다.')
            }
        })

    }, [])
  return (
        <div>

            <button>Favorite</button>
        </div>

 
    
  )
}

export default Favorite