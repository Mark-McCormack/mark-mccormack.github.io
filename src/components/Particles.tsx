import React, { useCallback } from "react";
import ReactParticles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
  fullScreen: false,
  background: { opacity: 0 },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: { onClick: { enable: true, mode: "bubble" }, resize: { enable: true, delay: 0.5 } },
    modes: { bubble: { distance: 100, duration: 10, opacity: 0.8, size: 15 } },
  },
  particles: {
    color: { value: "#fde68a" },
    links: { color: "#ffffff", distance: 40, enable: true, opacity: 0.5, width: 1 },
    move: { angle: { offset: 0, value: 25 }, direction: "top", enable: true, random: true, speed: 1.5 },
    number: { density: { enable: true, area: 200 }, value: 80 },
    opacity: { random: { enable: true, minimumValue: 0.1 }, value: 0.5 },
    size: { value: { min: 1, max: 5 } },
    twinkle: { particles: { enable: true, frequency: 0.5, opacity: 1 } },
    wobble: { distance: 3, enable: true, speed: { angle: 50, move: 10 } },
  },
  detectRetina: true,
};

// Decorative twinkling background for the home hero.
const Particles: React.FC = () => {
  const init = useCallback((engine: Engine) => loadFull(engine), []);
  return <ReactParticles className="particles" init={init} options={options} />;
};

export default Particles;
