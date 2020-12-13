import React, { Component } from 'react'
import MovieDetails from './MovieDetails'
import './MoviesContainer.css'
import MoviesList from './MoviesList'
import data from '../data'

class MoviesContainer extends Component {
    constructor() {
        super()
        this.state = {
            moviesArray: [...data],
            index: 0,
        }
        this.handleSetIndex = this.handleSetIndex.bind(this)
    }

    handleSetIndex(index) {
        this.setState({
            index: index
        })
    }

    render() {
        return (
            <div className='movies-container'>
                <MovieDetails listOfMovies={this.state.moviesArray[this.state.index]} />
                <MoviesList listOfMovies={this.state.moviesArray} handleSetIndex={this.handleSetIndex} />
            </div>
        )
    }
}

export default MoviesContainer