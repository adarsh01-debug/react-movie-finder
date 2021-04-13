import React from 'react';
import style from './movie.module.css';

function Movie({title, image, year}) {
    return (
        <div className={style.movie}>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p>{year}</p>
        </div>
    )
}

export default Movie;
