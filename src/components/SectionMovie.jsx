import React from 'react';
import MovieCard from './MovieCard';
import './SectionMovie.css';

const SectionMovie = ({ title, movies }) => {
    return (
        <div className="section-container">
            <span>{title}</span>
            <div className="movies-container">
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
            </div>
        </div>
    )
}

export default SectionMovie;
