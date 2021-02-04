import React from 'react';
import * as THREE from "three";
import Particles from 'react-particles-js';
// import { render } from "react-dom";
import './App.css';

export default class App extends React.Component {

  componentDidMount(){

    let material;
    let loader;
    const getTextures = () => new Promise((resolve, reject)=>{

      function loadDone(x) {
        console.log("loader successfully completed loading task");
        resolve(x); // it went ok!   
      }

      loader = new THREE.TextureLoader();
      loader.crossOrigin = "Anonymous"

      // const textureLink = "https://i.postimg.cc/dQXDbxyL/planet-Texture.jpg"
      // const textureLink = 'https://i.ibb.co/LP9DLD6/hDqdqi7.png'
      // const textureLink = 'https://i.ibb.co/M8Yk7Kc/wallpapersden-com-k-new-abstract-art-2560x1440.jpg'
      // const textureLink = 'https://i.ibb.co/6tCsF3t/calvin-and-hobbes-background-hd-2560x1440-211373.jpg'
      const textureLink = 'https://i.ibb.co/dGLgQhN/cyber-futuristic-city-fantasy-art-4k-da-2560x1440.jpg'

      loader.load(textureLink, loadDone) 
    });
    
    getTextures().then(loadedTexture => {
      
      material = new THREE.MeshPhongMaterial( { map: loadedTexture } )  
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.z = 15;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true}); 
      renderer.setClearColor( 0x000000, 0 );
      renderer.setSize( window.innerWidth, window.innerHeight ); document.getElementById("planet").appendChild( renderer.domElement );  

      const geometry = new THREE.SphereGeometry( 5, 32, 32 );
      
      const planet = new THREE.Mesh( geometry, material );
      scene.add( planet );
      const ambientlLight = new THREE.AmbientLight(0xFFFFFF, 0.05);
      scene.add(ambientlLight);
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.95);
      directionalLight.position.set(0, 10, 0);
      directionalLight.target.position.set(-10, 0, -13);
      scene.add(directionalLight);
      scene.add(directionalLight.target);

      const animate = function () {
        requestAnimationFrame( animate );
        // planet.rotation.x += 0.001;
        planet.rotation.y += 0.001;
        renderer.render( scene, camera );
      }
      animate();
    })

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
          <div id="planet"></div>
        </div>
    );
  }
}
    

