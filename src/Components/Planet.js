import React from 'react';
import * as THREE from "three";
// import './App.css';

export default class App extends React.Component {
  
    componentDidMount(){
  
      const getTextures = () => new Promise((resolve, reject)=>{
        const textureArray = []
        function loadDone(x) {
          console.log("loader successfully completed loading task");
          resolve(textureArray); // it went ok!   
        }
        const loader = new THREE.TextureLoader();
        loader.crossOrigin = "Anonymous"
        const planetTextureLink = 'https://i.ibb.co/dGLgQhN/cyber-futuristic-city-fantasy-art-4k-da-2560x1440.jpg'
        const moonTextureLink = 'https://i.postimg.cc/dQXDbxyL/planet-Texture.jpg'
        const subMoonTextureLink = 'https://i.postimg.cc/dQXDbxyL/planet-Texture.jpg'
        textureArray.push(loader.load(planetTextureLink, loadDone))
        textureArray.push(loader.load(moonTextureLink, loadDone))
        textureArray.push(loader.load(subMoonTextureLink, loadDone))
      });
      
      getTextures().then(textureArray => {
        //Scene, parent Object3D, camera
        const scene = new THREE.Scene()
        const planetSystem = new THREE.Object3D();
        scene.add(planetSystem)
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.z = 25;
  
        //Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true}); 
        renderer.setClearColor( 0x000000, 0 );
        renderer.setSize( window.innerWidth, window.innerHeight ); document.getElementById("planet").appendChild( renderer.domElement );  
        // document.getElementById("planet").style.position = "relative"
  
        //Planet
        const material = new THREE.MeshPhongMaterial( { map: textureArray[0] } ) 
        const geometry = new THREE.SphereGeometry( 5, 32, 32 );
        const planetMesh = new THREE.Mesh( geometry, material );
        planetSystem.add( planetMesh );
       
        //Moon
        const moonOrbit = new THREE.Object3D();
        moonOrbit.position.x = 12;
        planetSystem.add(moonOrbit);
        const moonMaterial = new THREE.MeshPhongMaterial( { map: textureArray[1] } );
        const moonMesh = new THREE.Mesh(geometry, moonMaterial);
        moonMesh.scale.set(0.2, 0.2, 0.2);
        moonOrbit.add(moonMesh);
  
        //Submoon
        const subMoonOrbit = new THREE.Object3D();
        subMoonOrbit.position.x = 2;
        moonOrbit.add(subMoonOrbit);
        const subMoonMaterial = new THREE.MeshPhongMaterial( { map: textureArray[2] } );
        const subMoonMesh = new THREE.Mesh(geometry, subMoonMaterial);
        subMoonMesh.scale.set(0.06, 0.06, 0.06);
        subMoonOrbit.add(subMoonMesh);
  
        //Lighting
        const ambientlLight = new THREE.AmbientLight(0xFFFFFF, 0.05);
        scene.add(ambientlLight);
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.95);
        directionalLight.position.set(0, 10, 0);
        directionalLight.target.position.set(-10, 0, -13);
        scene.add(directionalLight);
        scene.add(directionalLight.target);
  
        //Animation
        const animate = function () {
          requestAnimationFrame( animate );
          planetSystem.rotation.y += 0.001;
          subMoonOrbit.rotation.y += 0.01;
          moonOrbit.rotation.y += 0.004;
          renderer.render( scene, camera );
        }
        animate();
      })
    }
  
    render(){  
        return(   
            <div id="planet"></div>
        )
    }
  }