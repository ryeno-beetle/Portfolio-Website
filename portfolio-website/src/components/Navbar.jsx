// referenced https://www.geeksforgeeks.org/reactjs/create-a-responsive-navbar-using-reactjs/

import { useState } from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger.jsx";


function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }


    return (
        <div className="nav-bar-box">
            <div className="hamburger" onClick={toggleHamburger}>
                <h1>menu</h1>
                <Hamburger/>
            </div>

            <div className="nav-menu">
                <ul className="menu-left">
                    <li><NavLink to="/" id="home-button">
                        <h1 className="navlink">home</h1>
                    </NavLink></li>
                </ul>
                <ul id="menu-right">
                    <li><NavLink to="/research">
                        <h1 className="navlink">research</h1>
                    </NavLink></li>
            
                    <li><h1 className="navlink">game dev</h1></li>
                    <li><h1 className="navlink">disability studies</h1></li>
                </ul>
            </div>

            <style jsx>{`
                .nav-bar-box {
                    @media screen and (max-width: 768px) {
                        display: ${hamburgerOpen ? 'inline-block' : 'flex'};
                    }
                }
                .nav-menu {
                    @media screen and (max-width: 768px) {
                        display: ${hamburgerOpen ? 'inline-block' : 'none'};
                        height: 100vh;
                        width: 100vw;
                    }
                }
                .nav-menu ul {
                    @media screen and (max-width: 768px) {
                        display: ${hamburgerOpen ? 'block' : 'none'};
                    }
                }

                .nav-menu ul li {
                    @media screen and (max-width: 768px) {
                        display: ${hamburgerOpen ? 'block' : 'none'};
                        width: max-content;
                        justify-self: right;
                    }
                }
                
                .hamburger {
                    @media screen and (max-width: 768px) {
                        display: flex;
                        width: max-content;
                        justify-self: right;
                    }
                }
                
            `}</style>
        </div>
    )
}

export default Navbar;