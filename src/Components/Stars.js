import React from 'react';
import Particles from 'react-particles-js';

export default class Stars extends React.Component {

    render(){
        return (
            <Particles className= "particles"
                params={{
                    particles: {
                    number: {
                        value: 75,
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
                        value: 2.5,
                        random: true,
                        anim: {
                        enable: false,
                        speed: 4,
                        size_min: 0.1,
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
        ) 
    }
}