import React, {useState, useEffect} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import '../App.css';
import Movie from '../Movie';

function Home() {

    const [movie, setMovies] = useState("");
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("endgame");

    useEffect( async ()=>{
        fetchMovies();
      }, [query]);

    const fetchMovies = async () =>{
        const response = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=33b198db`);
        const data = await response.json();
        setMovies(data);
        console.log(data);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
      };
    
      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
      }    

    return (
        <div to="/" className="home-page">
            <form className="search-form" onSubmit={getSearch}>
                <div className="search-section">
                    <input className="search-bar" type="text" placeholder="Search a movie..." value={search} onChange={updateSearch}/>
                    <button className="search-button" type="submit"><AiOutlineSearch size={20}/></button>
                </div>
            </form>
            <div className="movies">
                    <Movie key={movie.imdbID} title={movie.Title} image={movie.Poster} year={movie.Year} genre={movie.Genre} actors={movie.Actors} released={movie.Released} runtime={movie.Runtime} imdb={movie.imdbRating} plot={movie.Plot}/>
            </div>
        </div>
    )
}

export default Home;
