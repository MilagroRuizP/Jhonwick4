import React from 'react'
import { Gender } from './Gender'
import "./MovieMain.css"

export const MovieMain = ({movies}) => {
  return (
    <div className='movie-main-container'>
        <img src={movies.Poster} alt="" />
        <Gender movies={movies}/>
        <span>
            {
                movies.Plot
            }
        </span>
    </div>
  )
}