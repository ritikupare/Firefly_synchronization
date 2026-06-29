# Web Demo

This folder contains the static web demo for the Firefly Synchronization project.

## Files

- `index.html`
  - Main demo page.
  - Loads the p5.js library and the simulation scripts.
  - Provides controls for selecting the simulation, adjusting coupling, noise, activation strength, and number of oscillators.

- `sketch.js`
  - Main p5.js controller for the webpage.
  - Handles UI input, animation loop, simulation selection, and canvas resizing.
  - Dispatches between the Kuramoto phase model and the Mirollo-Strogatz pulse model.

- `js/kuramoto_sim.js`
  - Kuramoto model implementation.
  - Creates the oscillator state, updates phases with all-to-all sinusoidal coupling, and draws the firefly animation.

- `js/mirollo_sim.js`
  - Pulse-coupled Mirollo-Strogatz model implementation.
  - Creates the oscillator state, updates pulses and resets, and draws the fireflies based on pulse phases.

## Usage

Open `index.html` in a web browser. No server is required for basic usage.

## Controls

- `Simulation`: select between `Kuramoto phase model` and `Mirollo-Strogatz pulse model`.
- `K (coupling)`: changes coupling strength for the Kuramoto model.
- `Noise`: adds random phase fluctuation to the Kuramoto model.
- `Activation strength`: changes pulse strength for the Mirollo-Strogatz model.
- `Oscillators`: sets the number of fireflies in the demo.

## Notes

- The demo is built with p5.js and runs entirely in the browser.
- The code is organized so each model is implemented in its own script file.
- `sketch.js` links UI controls to the visual simulation and chooses the active model.
