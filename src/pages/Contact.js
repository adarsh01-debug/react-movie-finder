import React from 'react';
import '../App.css';
import {FaGithub, FaFacebook, FaLinkedinIn} from 'react-icons/fa';
import {AiFillTwitterCircle, AiFillGoogleCircle, AiFillInstagram} from 'react-icons/ai';

function Contact() {
    return (
        <div to="/contact" className="contact">
            <h1>Contact</h1>
            <h4><FaGithub size={20}/> Find the code <a href="https://github.com/adarsh01-debug/react-movie-finder">here</a>.</h4>
            <div class="icons-container">
            <div class="social-icons spinned text-center">
                <a class="item facebook" href="#"><em><FaFacebook size={20}/></em></a>
                <a class="item twitter" href="#"><em><AiFillTwitterCircle size={20}/></em></a>
                <a class="item google" href="#"><em><AiFillGoogleCircle size={20}/></em></a>
                <a class="item linkedin" href="#"><em><FaLinkedinIn size={20}/></em></a>
                <a class="item instagram" href="#"><em><AiFillInstagram size={20}/></em></a>
            </div>
        </div>
        </div>
    )
}

export default Contact
