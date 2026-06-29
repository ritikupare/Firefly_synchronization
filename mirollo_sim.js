function createMirolloSimulation(N) {
  const phases = new Array(N).fill(0).map(() => Math.random());
  const omega = new Array(N).fill(0.2);
  return { phases, omega };
}

function updateMirolloSimulation(state, epsilon, dt) {
  const { phases, omega } = state;
  const N = phases.length;
  let firedCount = 0;
  const nextPhases = phases.map((phase, i) => phase + omega[i] * dt);

  for (let i = 0; i < N; i++) {
    if (nextPhases[i] >= 1.0) {
      firedCount += 1;
    }
  }

  for (let i = 0; i < N; i++) {
    if (nextPhases[i] >= 1.0) {
      nextPhases[i] = 0.0;
    }
  }

  for (let i = 0; i < N; i++) {
    if (nextPhases[i] < 1.0) {
      nextPhases[i] = Math.min(1.0, nextPhases[i] + firedCount * epsilon);
    }
  }

  for (let i = 0; i < N; i++) {
    phases[i] = nextPhases[i];
  }
}

function drawMirolloSimulation(state, width, height) {
  const { phases } = state;
  const radius = Math.min(width, height) * 0.42;
  const cx = width / 2;
  const cy = height / 2;

  for (let i = 0; i < phases.length; i++) {
    const angle = phases[i] * Math.PI * 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    const intensity = phases[i] > 0.8 ? 255 : 180;
    fill(intensity, 120, 220, 240);
    ellipse(x, y, 12, 12);
  }
}
