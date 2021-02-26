import React from 'react';
// import Anime, {anime} from 'react-anime';

import './App.css';
import Planet from './Components/Planet';
import Stars from './Components/Stars';
import UploadWindow from './Components/UploadWindow';

export default class App extends React.Component {

  render(){
    return (
        <div className="App">
          <Stars></Stars>

          <Planet></Planet>

          <UploadWindow></UploadWindow>

          
          {/* <Anime translateY={[-80,0]} opacity={[0,1]} easing={"easeOutExpo"} duration={2500} delay={300} >
            <div class="homeTitle">
              <span class="title">Aidan Lincoln</span>
            </div>
          </Anime>

          <div class="navContainer">
            <Anime translateX={[-300,0]} opacity={[0,1]} easing={"easeOutElastic"} duration={1500} delay={1500} >
              <div class="homeLink">
                <span class="navLink">Projects</span>
              </div>
            </Anime>

            <Anime translateX={[-300,0]} opacity={[0,1]} easing={"easeOutElastic"} duration={1500} delay={2500} >
              <div class="homeLink">
                <span class="navLink">Music</span>
              </div>
            </Anime>

            <Anime translateX={[-300,0]} opacity={[0,1]} easing={"easeOutElastic"} duration={1500} delay={3500} >
              <div class="homeLink">
                <span class="navLink">Visual Art</span>
              </div>
            </Anime>

            <Anime translateX={[-300,0]} opacity={[0,1]} easing={"easeOutElastic"} duration={1500} delay={4500} >
              <div class="homeLink">
                <span class="navLink">Contact</span>
              </div>
            </Anime>
          </div> */}
        </div>
    );
  }
}
    

