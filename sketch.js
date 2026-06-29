let state = null;
let currentSimulation = 'kuramoto';
let K = 1.5;
let noise = 0.05;
let N = 60;
let epsilon = 0.08;
let dt = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(45);
  state = createKuramotoSimulation(N);

  const kSlider = select('#kSlider');
  const noiseSlider = select('#noiseSlider');
  const nSlider = select('#nSlider');
  const epsilonSlider = select('#epsilonSlider');
  const simulationSelect = select('#simulationSelect');

  kSlider.input(() => {
    K = parseFloat(kSlider.value());
    select('#kValue').html(K.toFixed(2));
  });

  noiseSlider.input(() => {
    noise = parseFloat(noiseSlider.value());
    select('#noiseValue').html(noise.toFixed(2));
  });

  nSlider.input(() => {
    N = parseInt(nSlider.value(), 10);
    select('#nValue').html(N);
    resetSimulation();
  });

  epsilonSlider.input(() => {
    epsilon = parseFloat(epsilonSlider.value());
    select('#epsilonValue').html(epsilon.toFixed(2));
  });

  simulationSelect.changed(() => {
    currentSimulation = simulationSelect.value();
    resetSimulation();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function resetSimulation() {
  if (currentSimulation === 'kuramoto') {
    state = createKuramotoSimulation(N);
  } else if (currentSimulation === 'mirollo') {
    state = createMirolloSimulation(N);
  }
}

function draw() {
  background(12);
  if (currentSimulation === 'kuramoto') {
    updateKuramotoSimulation(state, K, noise, dt);
    drawKuramotoSimulation(state, width, height);
  } else if (currentSimulation === 'mirollo') {
    updateMirolloSimulation(state, epsilon, dt);
    drawMirolloSimulation(state, width, height);
  }
}
