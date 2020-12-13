import React from 'react'
import './Movie.css'

function Movie(props) {
    return (
        <div className='movie'>
            <p>{props.movie.name}</p>
            <button onClick={(e) => props.handleSetIndex(props.index)}>See details</button>
        </div>
    )
}

export default Movie