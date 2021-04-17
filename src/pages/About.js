import React from 'react';
import '../App.css';
import {DiCoffeescript, DiReact} from 'react-icons/di';
import {FaHeart} from 'react-icons/fa';

function About() {
    return (
        <div to="/about" className="about">
            <h1>About</h1>
            <p>Find about all your favorite movies at one place. Search your movie with name (and year) and persuade the inner movie-holic inside you.</p>
            <h4>Made with <DiCoffeescript size={20}/>, <DiReact size={20}/> and <FaHeart/></h4>
            <h5>Copyright © - adarsh01-debug</h5>
        </div>
    )
}

export default About
