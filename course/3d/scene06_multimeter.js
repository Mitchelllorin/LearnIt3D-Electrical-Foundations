// LearnIt3D — Module 6: Multimeter 3D Simulation
// Scene: 3D multimeter with dial selector and circuit scenarios

let scene, camera, renderer;
let dialMode = 'VAC';
let circuitScenario = '120VAC';

const READINGS = {
  'VAC':  { '120VAC': '120.0 V', '240VAC': '240.0 V', '9VDC': '0 V (DC source)', '100R': '0 V', 'open': '0 V', 'short': '0 V' },
  'VDC':  { '120VAC': '0 V (AC source)', '240VAC': '0 V (AC source)', '9VDC': '9.00 V', '100R': '0 V', 'open': 'OL', 'short': '0.00 V' },
  'OHM':  { '120VAC': '⚠ DANGER: Remove power first!', '240VAC': '⚠ DANGER: Remove power first!', '9VDC': '⚠ Remove battery first', '100R': '100.0 Ω', 'open': 'OL', 'short': '0.0 Ω' },
  'ACA':  { '120VAC': '⚠ Use clamp meter for current', '240VAC': '⚠ Use clamp meter for current', '9VDC': '0 A', '100R': '⚠ Insert meter in series', 'open': '0.00 A', 'short': '⚠ Short circuit!' },
  'ACD':  { '120VAC': '0 A (AC source)', '240VAC': '0 A (AC source)', '9VDC': '⚠ Insert meter in series', '100R': '⚠ Insert meter in series', 'open': '0.00 A', 'short': '⚠ Short circuit!' },
  'HZ':   { '120VAC': '60.0 Hz', '240VAC': '60.0 Hz', '9VDC': '0 Hz (DC)', '100R': '---', 'open': '---', 'short': '---' },
};

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0f2e);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dl = new THREE.DirectionalLight(0xffffff, 0.8);
  dl.position.set(3, 5, 5);
  scene.add(dl);

  // Meter body
  const bodyGeo = new THREE.BoxGeometry(1.6, 2.8, 0.3);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  scene.add(body);

  // Display screen
  const screenGeo = new THREE.BoxGeometry(1.1, 0.7, 0.05);
  const screenMat = new THREE.MeshStandardMaterial({ color: 0x001a00, emissive: 0x003300, emissiveIntensity: 0.8 });
  const screen = new THREE.Mesh(screenGeo, screenMat);
  screen.position.set(0, 0.7, 0.18);
  scene.add(screen);

  // Dial circle
  const dialGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.05, 16);
  const dialMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
  const dial = new THREE.Mesh(dialGeo, dialMat);
  dial.rotation.x = Math.PI / 2;
  dial.position.set(0, -0.3, 0.18);
  scene.add(dial);

  // Red probe
  const probeRedGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.8, 8);
  const probeRedMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const probeRed = new THREE.Mesh(probeRedGeo, probeRedMat);
  probeRed.position.set(0.25, -1.7, 0);
  probeRed.rotation.z = 0.2;
  scene.add(probeRed);

  // Black probe
  const probeBlkGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.8, 8);
  const probeBlkMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
  const probeBlk = new THREE.Mesh(probeBlkGeo, probeBlkMat);
  probeBlk.position.set(-0.25, -1.7, 0);
  probeBlk.rotation.z = -0.2;
  scene.add(probeBlk);

  buildUI();
  window.addEventListener('resize', onResize);
}

function buildUI() {
  const ctrl = document.getElementById('controls');
  ctrl.innerHTML = `
    <h3>Multimeter</h3>
    <label style="color:#aaa">Dial Mode:</label><br>
    ${['VAC','VDC','OHM','ACA','ACD','HZ'].map(m =>
      `<button class="dial-btn" data-mode="${m}" style="margin:3px;padding:4px 8px;background:${m===dialMode?'#00f5ff':'#1a2a4a'};color:#fff;border:1px solid #00f5ff;cursor:pointer">${m}</button>`
    ).join('')}
    <br><br>
    <label style="color:#aaa">Test Circuit:</label><br>
    <select id="circuitSel" style="width:180px;padding:4px;background:#1a2a4a;color:#fff;border:1px solid #00f5ff">
      <option value="120VAC">120VAC Outlet</option>
      <option value="240VAC">240VAC Dryer Outlet</option>
      <option value="9VDC">9V Battery</option>
      <option value="100R">100Ω Resistor</option>
      <option value="open">Open Circuit</option>
      <option value="short">Short Circuit</option>
    </select>
    <br><br>
    <div id="display" style="background:#001a00;color:#00ff88;font-family:monospace;font-size:22px;padding:12px;border:1px solid #00f5ff;min-width:150px;text-align:center">---</div>
  `;

  document.querySelectorAll('.dial-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      dialMode = btn.dataset.mode;
      document.querySelectorAll('.dial-btn').forEach(b => b.style.background = b.dataset.mode === dialMode ? '#00f5ff' : '#1a2a4a');
      updateDisplay();
    });
  });

  document.getElementById('circuitSel').addEventListener('change', e => {
    circuitScenario = e.target.value;
    updateDisplay();
  });

  updateDisplay();
}

function updateDisplay() {
  const reading = READINGS[dialMode]?.[circuitScenario] ?? '---';
  const el = document.getElementById('display');
  el.textContent = reading;
  el.style.color = reading.startsWith('⚠') ? '#ff6600' : '#00ff88';
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('DOMContentLoaded', () => { init(); animate(); });
