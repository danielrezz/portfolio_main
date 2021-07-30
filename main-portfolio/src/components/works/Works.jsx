import "./works.scss";
import Particles from "react-particles-js";

export default function Works() {

  return (
    <div className="works" id="works">
      <h2 className="title">My Story</h2>
      <Particles
        className="particles"
        bg={true}
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: false,
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                speed: 1,
                size_min: 0.3,
              },
            },
            opacity: {
              value: 0.1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 0.5,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "bubble",
              },
              onclick: {
                enable: false,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <p>
        Originally from South Texas, I relocated to Austin in 2012 to pursue
        audio engineering. Music and tech have always been strong interests of
        mine so this industry made sense. Throughout this time of teaching music
        and freelancing audio projects, I dabbled in web development in order to
        create my portfolio and a simple website for a friend's band. A few
        years after that seed was planted, I decided to make the leap and enroll
        into UT's coding bootcamp and have been pursuing software engineering
        ever since.
        <br />
        <br />
        What I love about programming is the challenge of battling the machine
        and the feeling of accomplishment once you have won. It's incredible to
        see the growth and drive gained through my experiences, and how they've
        exhibited positive changes in the world around me.
        <br />
        <br />
        My goal is to be the best version of myself I can be as a software
        engineer, musician, and overall human. There is still much to learn.
      </p>
    </div>
  );
}
