import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './components/Navbar.css'
import Hamburger from "./components/Hamburger.jsx";

import Home from "./pages/Home.jsx";
import Research from "./pages/Research.jsx";
import GamesAndInteractiveArt from './pages/GamesAndInteractiveArt.jsx';


function App() {

  const [page, setPage] = useState("Home");

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
      setHamburgerOpen(!hamburgerOpen);
  }
  const closeHamburger = () => {
      setHamburgerOpen(false);
  }

  const onLinkClick = (pageName) => {
      closeHamburger();
      setPage(pageName);
  }

  const pageControl = () => {
    // redirect to the right page here
    if (page === "Home") {
      return (<Home />);
    } else if (page === "Research"){
      return (<Research />);
    } else if (page === "GamesAndInteractiveArt"){
      return (<GamesAndInteractiveArt />);
    }
  }

  return (
    <>
      <div className="nav-bar-box">
        <div className="hamburger" onClick={toggleHamburger}>
            <h1>menu</h1>
            <Hamburger/>
        </div>

        <div className="nav-menu">
            <ul className="menu-left">
                <li>
                    <h1 className="navlink" onClick={onLinkClick.bind(this, "Home")}>home</h1>
                </li>
            </ul>
            <ul id="menu-right">
                <li>
                    <h1 className="navlink" onClick={onLinkClick.bind(this, "Research")}>research</h1>
                </li>
                <li>
                    <h1 className="navlink" onClick={onLinkClick.bind(this, "GamesAndInteractiveArt")}>games + interactive art</h1>
                </li>

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
      {pageControl()}
      <div id="footer"></div>
      {/* <Router basename={'/Portfolio-Website/'}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/research" element={<Research/>}/>
          <Route path="/games-and-interactive-art" element={<GamesAndInteractiveArt/>}/>
        </Routes>
        <div id="footer"></div>
      </Router> */}
    </>
  );
}

export default App;
