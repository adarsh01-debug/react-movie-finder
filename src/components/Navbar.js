import React, {useState} from 'react';
import "../App.css";
import { FaAlignRight } from 'react-icons/fa';

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <p>React Movie Finder</p>
            </div>
            <div className="rightSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/">Home</a>
                    <a href="/watch-later">Watch Later</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact Me!</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}><FaAlignRight /></button>
            </div>
        </div>
    )
}

export default Navbar
