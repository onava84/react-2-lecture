import React from 'react'
import './MovieDetails.css'

function MovieDetails(props) {
    return (
        <div className='movie-details'>
            <p>{props.listOfMovies.name}</p>
            <p>Release date: {props.listOfMovies.year}</p>
            <p>Movie rating: {props.listOfMovies.rating}</p>
            <p>Description: {props.listOfMovies.description}</p>
        </div>
    )
}

export default MovieDetails