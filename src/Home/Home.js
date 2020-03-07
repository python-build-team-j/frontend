import React from "react";
import { Link } from "react-router-dom";
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
      <h1>Our Awesome Game</h1>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <ParticlesBg />
    </div>
  );
};

export default Home;
