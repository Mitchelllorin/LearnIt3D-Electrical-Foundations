// LearnIt3D — Module 7: AC Waveform Visualizer
// Scene: animated sine wave with frequency and amplitude sliders

let scene, camera, renderer, clock;
let wavePoints, waveLine;
let frequency = 60;
let amplitude = 169.7;
const NUM_POINTS = 300;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0f2e);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 3, 12);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  clock = new THREE.Clock();

  // Grid
  const grid = new THREE.GridHelper(20, 20, 0x1a2a6a, 0x0d1a3a);
  grid.rotation.x = Math.PI / 2;
  grid.position.z = -0.1;
  scene.add(grid);

  // X axis
  const axisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-9, 0, 0), new THREE.Vector3(9, 0, 0)
  ]);
  scene.add(new THREE.Line(axisGeo, new THREE.LineBasicMaterial({ color: 0xffffff })));

  // Y axis
  const yAxisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -5, 0), new THREE.Vector3(0, 5, 0)
  ]);
  scene.add(new THREE.Line(yAxisGeo, new THREE.LineBasicMaterial({ color: 0xffffff })));

  // Waveform line
  const positions = new Float32Array(NUM_POINTS * 3);
  const waveGeo = new THREE.BufferGeometry();
  waveGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  waveLine = new THREE.Line(waveGeo, new THREE.LineBasicMaterial({ color: 0x00f5ff, linewidth: 2 }));
  scene.add(waveLine);

  scene.add(new THREE.AmbientLight(0xffffff, 1));

  buildUI();
  window.addEventListener('resize', onResize);
}

function buildUI() {
  const ctrl = document.getElementById('controls');
  ctrl.innerHTML = `
    <h3>AC Waveform</h3>
    <label style="color:#fff">Frequency: <span id="freqLabel">60</span> Hz</label><br>
    <input type="range" id="freqSlider" min="1" max="120" value="60" style="width:180px"><br><br>
    <label style="color:#fff">Amplitude (Vpeak): <span id="ampLabel">169.7</span> V</label><br>
    <input type="range" id="ampSlider" min="10" max="340" value="170" step="0.1" style="width:180px"><br><br>
    <div id="readout" style="color:#00f5ff;font-size:13px;line-height:1.8"></div>
  `;

  document.getElementById('freqSlider').addEventListener('input', e => {
    frequency = parseFloat(e.target.value);
    document.getElementById('freqLabel').textContent = frequency;
    updateReadout();
  });

  document.getElementById('ampSlider').addEventListener('input', e => {
    amplitude = parseFloat(e.target.value);
    document.getElementById('ampLabel').textContent = amplitude.toFixed(1);
    updateReadout();
  });

  updateReadout();
}

function updateReadout() {
  const vrms = (amplitude / Math.sqrt(2)).toFixed(2);
  const period = ((1 / frequency) * 1000).toFixed(3);
  document.getElementById('readout').innerHTML =
    `Vpeak = <b>${amplitude.toFixed(1)} V</b><br>
     Vrms = <b>${vrms} V</b><br>
     Period T = <b>${period} ms</b><br>
     Frequency = <b>${frequency} Hz</b>`;
}

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  const pos = waveLine.geometry.attributes.position.array;
  const xScale = 8.5;
  const yScale = 4.5 / 340;

  for (let i = 0; i < NUM_POINTS; i++) {
    const x = (i / (NUM_POINTS - 1)) * 2 * xScale - xScale;
    const phase = (frequency / 10) * (x + t * 2);
    const y = amplitude * yScale * Math.sin(2 * Math.PI * phase);
    pos[i * 3]     = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = 0;
  }

  waveLine.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('DOMContentLoaded', () => { init(); animate(); });
