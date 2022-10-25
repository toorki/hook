import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movies,search, rate}) => {
    return (
      <div className='list' >
  { movies.filter((elF)=>elF.rate >= rate && elF.title.toLowerCase().includes(search)).map((movie)=> <MovieCard movie={movie} /> ) }
      </div>
    )
  }
  export default MovieList;

