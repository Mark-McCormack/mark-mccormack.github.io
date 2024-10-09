import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesComponent: React.FC = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // Make sure the background is behind other content
      }}
    >
      <Particles
        init={init}
        options={{
          background: {
            color: {
              value: "#00356B",
            },
            opacity: 0,
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "bubble",
              },
              onHover: {
                enable: false,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: {
                enable: true,
                delay: 0.5,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              bubble: {
                distance: 100,
                duration: 10,
                opacity: 0.8,
                size: 15,
              },
              trail: {
                delay: 1,
                quantity: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#fde68a",
            },
            links: {
              color: "#ffffff",
              distance: 40,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              angle: {
                offset: 0,
                value: 25,
              },
              direction: "top",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 200,
              },
              value: 80,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.5,
                opacity: 1,
              },
            },
            wobble: {
              distance: 3,
              enable: true,
              speed: {
                angle: 50,
                move: 10,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
