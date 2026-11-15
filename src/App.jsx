import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Research from "./pages/Research.jsx";
import GamesAndInteractiveArt from './pages/GamesAndInteractiveArt.jsx';


function App() {

  return (
    <>
      <Router basename={'/Portfolio-Website/'}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Portfolio-Website" element={<Home/>}/>
          <Route path="/Portfolio-Website/research" element={<Research/>}/>
          <Route path="/Portfolio-Website/games-and-interactive-art" element={<GamesAndInteractiveArt/>}/>
        </Routes>
        <div id="footer"></div>
      </Router>
    </>
  );
}

export default App;
