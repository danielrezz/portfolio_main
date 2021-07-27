import "./intro.scss";
import { ExpandMore } from '@material-ui/icons';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import Particles from 'react-particles-js';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            strings: ['building websites', 'solving problems', 'making music', 'helping others', 'a good challenge' ],
            backDelay: 1500,
            backSpeed: 60
        });
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                <img src="assets/me.png" alt="" />
                    <Particles 
                        className="imgContainer"
                        bg={true}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 60,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 8,
                                    "random": true,
                                    "anim": {
                                        "speed": 1,
                                        "size_min": 0.3
                                    }
                                },
                                "opacity": {
                                    "value": 0.1,
                                    "random": false,
                                    "anim": {
                                      "enable": false,
                                      "speed": 1,
                                      "opacity_min": 0,
                                      "sync": false
                                    }
                                  },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": true,
                                    "speed": 0.5,
                                    "direction": "top",
                                    "out_mode": "out"
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": false,
                                        "mode": "bubble"
                                    },
                                    "onclick": {
                                        "enable": false,
                                        "mode": "repulse"
                                    }
                                },
                                "modes": {
                                    "bubble": {
                                        "distance": 250,
                                        "duration": 2,
                                        "size": 0,
                                        "opacity": 0
                                    },
                                    "repulse": {
                                        "distance": 400,
                                        "duration": 4
                                    }
                                }
                            }
                        }} />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Daniel Reza</h1>
                    <h3>I enjoy <span ref={ textRef }></span></h3>
                    <h4>( and I'm looking for a fun place to work! )</h4>
                </div>
                <a href="#portfolio">
                    <ExpandMore className="icon" />
                </a>
            </div>
        </div>
    )
}
