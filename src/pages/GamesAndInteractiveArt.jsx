import { useState } from 'react';
import '../index.css';
import './Pages.css';
import imgCubeConnection from '../assets/cube-connection-ss.jpg';
import imgCatnipAndCoffee from '../assets/catnip-and-coffee-ss.jpg';
import imgAllYouCanDoIsChange from '../assets/all-you-can-do-is-change-ss.jpg';

function GamesAndInteractiveArt() {
  return (
    <>

        <div className="project-block">
            <a href="https://ryeno-beetle.itch.io/all-you-can-do-is-change" target="_blank" rel="noopener noreferrer">
                <h1 className="title">All You Can Do Is Change</h1>
                <p>[can be found on itch.io]</p>
            </a>
            <img src={imgAllYouCanDoIsChange} alt="A person made of scribbles sits in the center of the image on a bed in a large room. There are various household objects like a chair, potted plant, and cat plush floating around them in the air. there is a slightly transparent white thought bubble above their head with the text 'all you can do is change'."></img>
            <p>Take a walk with your thoughts; move words around. Everything changes and all you can do is change.</p>
            <p>A submission for <a href="https://www.gamepoems.com/">Game Poems Issue #1</a>, made with four friends.</p>
        </div>

        <div className="project-block">
            <a href="https://bagelcatzip.itch.io/cube-connection" target="_blank" rel="noopener noreferrer">
                <h1 className="title">Cube Connection</h1>
                <p>[can be found on itch.io]</p>
            </a>
            <img src={imgCubeConnection} alt="Three squares with little dot eyes stand on thin legs in the bottom left. Two of them are stuck together, standing on top of the third. There is a tall ledge in front of them towards the right of the screen, with a green flag on top, further to the right. On the wall in the background, there are icons showing that pressing the 'E' key will connect two cubes, and pressing the 'Q' key disconnects two cubes."></img>
            <p>Connecting with your friends taken literally! (play as little cube creatures, and stick to the other cubes to solve puzzles)</p>
        </div>

        <div className="project-block">
            <a href="https://ryeno-beetle.itch.io/catnip-and-coffee" target="_blank" rel="noopener noreferrer">
                <h1 className="title">Catnip & Coffee</h1>
                <p>[can be found on itch.io]</p>
            </a>
            <img src={imgCatnipAndCoffee} alt="pixel art of a small cat cafe. There are dark brown wood floors with purple carpets, lighter purple walls, and a yellow welcome mat with paw prints. There is some wooden furniture and a bar with a wooden countertop, with an orange cat sleeping in a bed on top. There is another grey cat sitting in front of the bar towards the right. Behind the bar, there are three cat bowls on the floor, a wall-mounted bookshelf above them, and a menu with squiggles for words. Further to the right, there is a shelf with a watering can and bag of cat food, which stand out. All the way to the left, there are three potted plants, two in front of a small window and one on a table. There is also a black woman with red hair in two afro puffs, wearing a light pink long-sleeve and a dark pinkish-brown skirt with brown shoes. In the bottom right corner of the screenshot, there is an open notebook overlayed with the cafe with a to-do list stating: 'water plants (0/3); fill food bowls (0/3)'. There is a small black cat sitting slightly in front of the notebook."></img>
            <p>This was the first game I made, in high school with two friends! </p>
        </div>

    </>
  );
}

export default GamesAndInteractiveArt;
