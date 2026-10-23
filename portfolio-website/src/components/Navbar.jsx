// referenced https://www.geeksforgeeks.org/reactjs/create-a-responsive-navbar-using-reactjs/
// and https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb 

import { useState } from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger.jsx";


function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }
    const closeHamburger = () => {
        setHamburgerOpen(false);
    }


    return (
        <div className="nav-bar-box">
            <div className="hamburger" onClick={toggleHamburger}>
                <h1>menu</h1>
                <Hamburger/>
            </div>

            <div className="nav-menu">
                <ul className="menu-left">
                    <li><NavLink to="/" id="home-button" onClick={closeHamburger}>
                        <h1 className="navlink">home</h1>
                    </NavLink></li>
                </ul>
                <ul id="menu-right">
                    <li><NavLink to="/research" onClick={closeHamburger}>
                        <h1 className="navlink">research</h1>
                    </NavLink></li>
            
                    <li><h1 className="navlink">game dev</h1></li>
                    <li><h1 className="navlink">disability studies</h1></li>
                </ul>
            </div>

            <style>{`
                .nav-bar-box {
                    @media screen and (max-width: 768px) {
                        display: ${hamburgerOpen ? 'inline-block' : 'flex'};
                        height: ${hamburgerOpen ? '100vh' : '5rem'};
                        width: 100vw;
                    }
                }
                .nav-menu {
                    @media screen and (max-width: 768px) {
                        display: ${hamburgerOpen ? 'inline-block' : 'none'};

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