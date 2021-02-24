import React from 'react';
import * as THREE from "three";
import Particles from 'react-particles-js';
import Anime, {anime} from 'react-anime';
import './App.css';
import Planet from './Components/Planet'

export default class App extends React.Component {
 
  render(){
    return (
        <div className="App">
          <Particles className= "particles"
            params={{
              particles: {
                number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.2,
                    sync: false
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  enable: true,
                  speed: 0.2,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
              }
            }
          }}/> 
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
          <Planet></Planet>
        </div>
    );
  }
}
    

