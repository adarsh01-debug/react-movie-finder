import React from 'react';
import style from './movie.module.css';

function Movie({title, image, year, actors, genre, released, runtime, imdb, plot}) {
    return (
        <div className={style.movie}>
            <h1>{title}</h1>
            <h3><b>IMDB: </b>{imdb}</h3>
            <img src={image} alt=""/>
            <p>{year}</p>
            <p><b>Genre: </b>{genre}</p>
            <p><b>Released: </b>{released}</p>
            <p><b>Runtime: </b>{runtime}</p>
            <p><b>Actors: </b>{actors}</p>
            <p className={style.plot}><b>Plot: </b>{plot}</p>
        </div>
    )
}

export default Movie;
