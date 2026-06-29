function createKuramotoSimulation(N) {
  const theta = new Array(N).fill(0).map(() => Math.random() * Math.PI * 2);
  const omega = new Array(N).fill(0).map(() => random(0.01, 0.03));
  return { theta, omega };
}

function updateKuramotoSimulation(state, K, noise, dt) {
  const { theta, omega } = state;
  const N = theta.length;
  const newTheta = new Array(N);
  for (let i = 0; i < N; i++) {
    let coupling = 0;
    for (let j = 0; j < N; j++) {
      coupling += Math.sin(theta[j] - theta[i]);
    }
    let dtheta = omega[i] + (K / N) * coupling;
    dtheta += noise * randomGaussian() * Math.sqrt(dt);
    newTheta[i] = theta[i] + dtheta * dt;
  }
  for (let i = 0; i < N; i++) {
    theta[i] = ((newTheta[i] % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  }
}

function drawKuramotoSimulation(state, width, height) {
  const { theta } = state;
  const N = theta.length;
  const radius = Math.min(width, height) * 0.42;
  const cx = width / 2;
  const cy = height / 2;

  for (let i = 0; i < N; i++) {
    const x = cx + radius * Math.cos(theta[i]);
    const y = cy + radius * Math.sin(theta[i]);
    const brightness = 180 + 75 * Math.cos(theta[i]);
    fill(255, brightness, 120, 220);
    ellipse(x, y, 12, 12);
  }
}
