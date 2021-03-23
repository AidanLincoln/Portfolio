import React from 'react';
import Anime, {anime} from 'react-anime';

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

          {/* <UploadWindow></UploadWindow> */}

          <div class="descriptionContainer">
            <Anime translateX={[-300,0]} opacity={[0,1]} easing={"easeOutExpo"} duration={2000} delay={500} >
              <div class="descDiv">
                <span class="descText">Extract stems</span>
              </div>
            </Anime>

            <Anime translateX={[-300,0]} opacity={[0,1]} easing={"easeOutExpo"} duration={2000} delay={1500} >
              <div class="descDiv">
                <span class="descText">from any audio file</span>
              </div>
            </Anime>

            <Anime translateX={[-300,0]} opacity={[0,1]} easing={"easeOutExpo"} duration={2000} delay={2500} >
              <div class="descDiv">
                <span class="descText">using artificial intelligence</span>
              </div>
            </Anime>

          </div>
        </div>
    );
  }
}
    

