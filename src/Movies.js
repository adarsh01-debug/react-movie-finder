import React, {useEffect} from 'react';

const Movies = () => {

    useEffect( async ()=>{
        fetchMovies();
    }, []);

    const fetchMovies = async () =>{
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=33b198db`);
        const data = await response.json();
        console.log(data);
    };

    return(
        <div>
            <h1></h1>
        </div>
    );
}

export default Movies;