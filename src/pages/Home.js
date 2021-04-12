import React, {useState, useEffect} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import '../App.css';

function Home() {

    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect( async ()=>{
        fetchMovies();
      }, [query]);

    const fetchMovies = async () =>{
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=33b198db`);
        const data = await response.json();
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
        </div>
    )
}

export default Home
