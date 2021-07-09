import "./works.scss";
import { useState } from 'react';
import Particles from 'react-particles-js';
// import DonutSmallIcon from '@material-ui/icons/DonutSmall';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);


    const data = [

        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },
          {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
              "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
          }

    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
    }


    return (
        <div className="works" id="works">
            <h2 className="title">My Story</h2>
            <Particles 
                        className="particles"
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
                        <p>Originally from South Texas, I relocated to Austin in 2012 to pursue audio engineering. Music and tech have always been strong interests of mine.</p>
            {/* <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map(d => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
                        </div>
                    </div>
                </div>
                ))}
                
            </div> */}
        </div>
    )
}
