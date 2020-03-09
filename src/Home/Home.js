import React from "react";
import Particles from "react-particles-js";

const ParticlesBg = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 10,
              color: "#00FF00"
            }
          },
          opacity: {
            value: 0.4008530152163807,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 50,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};


const Home = () => {
  return (
    <div>
      <ParticlesBg />
      <h1>Our <strong>Awesome</strong> Game</h1>
      <hr />
      <p>
        <b>Are You Ready To Play A Game with MUD!?</b>
      </p>
      <p>
        What is MUD? Well, Its a Multi-User Dungeon (for those that arent as 'hip to the lingo') Within this app, we will be able to show you the accessibility and <b>wonders</b> that these Dungeons have to offer you. We have hidden a <i>Grand Wonder</i> within the game and we wish you the best of luck on finding it. With that, we say: Welcome to our MUD - Must Use Ducks.
      </p>
      <ParticlesBg />
    </div>
  );
};

export default Home;
