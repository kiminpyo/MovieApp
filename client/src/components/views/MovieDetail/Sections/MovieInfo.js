import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    let { movie } = props;

    return (
        <Descriptions title="Movie Info" bordered>
            <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
            <Descriptions.Item label="release_date">{movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="revenue">{movie.revenue}won</Descriptions.Item>
            <Descriptions.Item label="runtime">{movie.runtime}분</Descriptions.Item>
            <Descriptions.Item label="vote_average" span={2}>
                {movie.vote_average}
            </Descriptions.Item>
            <Descriptions.Item label="vote_count">{movie.vote_count}명</Descriptions.Item>
            <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
            <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item>
        </Descriptions>
    )
}

export default MovieInfo