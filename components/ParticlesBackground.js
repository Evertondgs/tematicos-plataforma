import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          move: { enable: true, speed: 0.3 },
          opacity: { value: 0.1 },
          color: { value: "#ffffff" },
        },
        background: { color: "#0f172a" },
      }}
    />
  );
}