import React, { Component } from 'react'
import './MoviesList.css'
import Movie from './Movie'

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        const mapListOfMovies = this.props.listOfMovies.map((e, i, a) => {
            return <Movie movie={e} handleSetIndex={this.props.handleSetIndex} index={i} />
        })
        return (
            <div className='movies-list'>
                <p>MoviesList</p>
                {/* <p>{this.props.}</p> */}
                {mapListOfMovies}
            </div>
        )
    }
}

export default MovieList