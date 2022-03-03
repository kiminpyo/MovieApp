/* rfce==> 단축키 */
import React from 'react'
import {Col} from 'antd';
function GridCards(props) {
    console.log(props.image,props.movieId)
  return (
  //24사이즈 기준 가장클때는 4개 가장 작을떄는 1개나오게 
    <Col lg={6} md={8} xs={24}>
        <div style={{position: 'relative'}}>
            <a href={`/movie/${props.movieId}`}>
                <img style={{width: '100%', height: '300px'}}src={props.image} alt={props.moiveName} />
            </a>
        </div>
    </Col>
  )
}

export default GridCards