import React from 'react';
import * as THREE from "three";
import Particles from 'react-particles-js';
import { render } from "react-dom";
import './App.css';

export default class App extends React.Component {
  
  componentDidMount(){
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 2;

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true}); 
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( window.innerWidth, window.innerHeight ); document.getElementById("planet").appendChild( renderer.domElement );  

    var geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

    var planet = new THREE.Mesh( geometry, material );
    scene.add( planet );

    var animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }
    animate();
  }

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
                  speed: 0.25,
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
          <div id="planet"></div>
        </div>
    );
  }
}
    

