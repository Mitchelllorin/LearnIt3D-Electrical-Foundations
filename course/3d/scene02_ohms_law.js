
let scene, camera, renderer, controls;
let labelLayer, resistorMesh, glowTube, voltageBox, currentBox, resistanceBox;
const anchors = [];
const state = { V: 120, I: 2.4, R: 50, locked: null };
const ui = {};

function createControls(cameraObject, domElement) {
  if (typeof THREE.OrbitControls === 'function') {
    const orbit = new THREE.OrbitControls(cameraObject, domElement);
    orbit.enableDamping = true;
    return orbit;
  }

  return {
    update() {},
    target: { set() {} }
  };
}

function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }

function makeAnchor(text, object3D, color) {
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.padding = '6px 10px';
  div.style.borderRadius = '10px';
  div.style.border = `1px solid ${color}`;
  div.style.background = 'rgba(10,15,46,0.84)';
  div.style.color = '#fff';
  div.style.font = '12px Arial, sans-serif';
  div.style.pointerEvents = 'none';
  labelLayer.appendChild(div);
  anchors.push({ div, object3D, text });
}

function updateAnchors() {
  anchors.forEach(item => {
    item.div.innerHTML = item.text();
    const pos = item.object3D.getWorldPosition(new THREE.Vector3()).project(camera);
    item.div.style.display = pos.z < 1 ? 'block' : 'none';
    item.div.style.left = `${(pos.x * 0.5 + 0.5) * window.innerWidth}px`;
    item.div.style.top = `${(-pos.y * 0.5 + 0.5) * window.innerHeight}px`;
    item.div.style.transform = 'translate(-50%, -50%)';
  });
}

function recalculate(changed) {
  if (state.locked === 'V') state.V = clamp(state.I * state.R, 0, 240);
  else if (state.locked === 'I') state.I = clamp(state.V / Math.max(state.R, 1), 0.1, 30);
  else if (state.locked === 'R') state.R = clamp(state.V / Math.max(state.I, 0.1), 1, 1000);
  else if (changed === 'I') state.R = clamp(state.V / Math.max(state.I, 0.1), 1, 1000);
  else state.I = clamp(state.V / Math.max(state.R, 1), 0.1, 30);

  ui.vSlider.value = state.V.toFixed(0);
  ui.iSlider.value = state.I.toFixed(2);
  ui.rSlider.value = state.R.toFixed(0);
  ui.vValue.textContent = `${state.V.toFixed(0)} V`;
  ui.iValue.textContent = `${state.I.toFixed(2)} A`;
  ui.rValue.textContent = `${state.R.toFixed(0)} Ω`;

  const intensity = 0.2 + (state.I / 30) * 2.5;
  resistorMesh.material.emissiveIntensity = intensity;
  glowTube.material.opacity = clamp(0.12 + intensity * 0.16, 0.12, 0.72);
  voltageBox.material.emissiveIntensity = 0.4 + state.V / 240;
  currentBox.material.emissiveIntensity = 0.4 + state.I / 20;
  resistanceBox.material.emissiveIntensity = 0.4 + Math.min(state.R / 1000, 1.2);

  [...document.querySelectorAll('.lock-btn')].forEach(btn => {
    const active = btn.dataset.varName === state.locked;
    btn.style.background = active ? '#00ff88' : 'rgba(255,255,255,0.08)';
    btn.style.color = active ? '#041120' : '#ffffff';
  });
}

function createUI() {
  labelLayer = document.createElement('div');
  Object.assign(labelLayer.style, { position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '5' });
  document.body.appendChild(labelLayer);

  const panel = document.createElement('div');
  panel.innerHTML = `
    <div style="font-size:18px;color:#00f5ff;margin-bottom:10px;font-weight:bold;">Ohm's Law Slider Tool</div>
    ${['V', 'I', 'R'].map(key => `
      <div style="margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <strong>${key}</strong><span id="${key.toLowerCase()}-value"></span>
        </div>
        <input id="${key.toLowerCase()}-slider" type="range">
      </div>`).join('')}
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
      <button class="lock-btn" data-var-name="V">Lock V</button>
      <button class="lock-btn" data-var-name="I">Lock I</button>
      <button class="lock-btn" data-var-name="R">Lock R</button>
      <button id="unlock-all">Unlock</button>
    </div>
    <div style="margin-top:10px;font-size:12px;color:#bde8ff;">Default solve mode: I = V / R.</div>`;
  Object.assign(panel.style, {
    position: 'absolute', top: '58px', left: '16px', width: '280px', padding: '14px',
    borderRadius: '14px', background: 'rgba(10,15,46,0.88)', border: '1px solid #00f5ff',
    color: '#fff', font: '14px Arial, sans-serif', pointerEvents: 'auto'
  });
  labelLayer.appendChild(panel);

  ui.vSlider = panel.querySelector('#v-slider');
  ui.iSlider = panel.querySelector('#i-slider');
  ui.rSlider = panel.querySelector('#r-slider');
  ui.vValue = panel.querySelector('#v-value');
  ui.iValue = panel.querySelector('#i-value');
  ui.rValue = panel.querySelector('#r-value');
  ui.vSlider.min = 0; ui.vSlider.max = 240; ui.vSlider.step = 1;
  ui.iSlider.min = 0.1; ui.iSlider.max = 30; ui.iSlider.step = 0.1;
  ui.rSlider.min = 1; ui.rSlider.max = 1000; ui.rSlider.step = 1;
  ui.vSlider.addEventListener('input', () => { state.V = parseFloat(ui.vSlider.value); recalculate('V'); });
  ui.iSlider.addEventListener('input', () => { state.I = parseFloat(ui.iSlider.value); recalculate('I'); });
  ui.rSlider.addEventListener('input', () => { state.R = parseFloat(ui.rSlider.value); recalculate('R'); });

  panel.querySelectorAll('.lock-btn').forEach(btn => {
    Object.assign(btn.style, { padding: '8px 10px', borderRadius: '999px', border: '1px solid #00f5ff', background: 'rgba(255,255,255,0.08)', color: '#fff', cursor: 'pointer' });
    btn.addEventListener('click', () => { state.locked = state.locked === btn.dataset.varName ? null : btn.dataset.varName; recalculate('V'); });
  });
  const unlock = panel.querySelector('#unlock-all');
  Object.assign(unlock.style, { padding: '8px 10px', borderRadius: '999px', border: '1px solid #00f5ff', background: 'rgba(255,255,255,0.08)', color: '#fff', cursor: 'pointer' });
  unlock.addEventListener('click', () => { state.locked = null; recalculate('V'); });
}

function buildSceneObjects() {
  const base = new THREE.Mesh(new THREE.BoxGeometry(10, 0.4, 4), new THREE.MeshStandardMaterial({ color: '#11224f' }));
  base.position.y = -1.3;
  scene.add(base);

  resistorMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.6, 0.6, 4.2, 32),
    new THREE.MeshStandardMaterial({ color: '#ff8c00', emissive: '#ff8c00', emissiveIntensity: 0.4, roughness: 0.3 })
  );
  resistorMesh.rotation.z = Math.PI / 2;
  scene.add(resistorMesh);
  glowTube = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.78, 4.5, 32), new THREE.MeshBasicMaterial({ color: '#00f5ff', transparent: true, opacity: 0.2 }));
  glowTube.rotation.z = Math.PI / 2;
  scene.add(glowTube);

  const leadGeo = new THREE.CylinderGeometry(0.14, 0.14, 2.2, 16);
  const leadMat = new THREE.MeshStandardMaterial({ color: '#e7eef8' });
  const leftLead = new THREE.Mesh(leadGeo, leadMat);
  leftLead.rotation.z = Math.PI / 2;
  leftLead.position.x = -3.2;
  scene.add(leftLead);
  const rightLead = leftLead.clone();
  rightLead.position.x = 3.2;
  scene.add(rightLead);

  const meterGeo = new THREE.BoxGeometry(1.3, 0.7, 1.3);
  voltageBox = new THREE.Mesh(meterGeo, new THREE.MeshStandardMaterial({ color: '#00ff88', emissive: '#00ff88' }));
  voltageBox.position.set(-3.2, 1.5, -2.2);
  scene.add(voltageBox);
  currentBox = new THREE.Mesh(meterGeo, new THREE.MeshStandardMaterial({ color: '#00f5ff', emissive: '#00f5ff' }));
  currentBox.position.set(0, 1.5, -2.2);
  scene.add(currentBox);
  resistanceBox = new THREE.Mesh(meterGeo, new THREE.MeshStandardMaterial({ color: '#ff8c00', emissive: '#ff8c00' }));
  resistanceBox.position.set(3.2, 1.5, -2.2);
  scene.add(resistanceBox);

  makeAnchor(() => `Voltage Meter<br><strong>${state.V.toFixed(0)} V</strong>`, voltageBox, '#00ff88');
  makeAnchor(() => `Current Meter<br><strong>${state.I.toFixed(2)} A</strong>`, currentBox, '#00f5ff');
  makeAnchor(() => `Resistance Meter<br><strong>${state.R.toFixed(0)} Ω</strong>`, resistanceBox, '#ff8c00');
}

function onResize() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); }
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#0a0f2e');
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 4.2, 11);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);
  controls = createControls(camera, renderer.domElement);
  controls.target.set(0, 0.4, 0);
  scene.add(new THREE.AmbientLight('#90afff', 0.7));
  const dirLight = new THREE.DirectionalLight('#ffffff', 1.1);
  dirLight.position.set(5, 8, 6);
  scene.add(dirLight);
  scene.add(new THREE.GridHelper(18, 18, '#123d7a', '#0e234f'));
  createUI(); buildSceneObjects(); recalculate('V'); window.addEventListener('resize', onResize);
}
function animate() { requestAnimationFrame(animate); controls.update(); updateAnchors(); renderer.render(scene, camera); }
window.addEventListener('DOMContentLoaded', () => { init(); animate(); });
