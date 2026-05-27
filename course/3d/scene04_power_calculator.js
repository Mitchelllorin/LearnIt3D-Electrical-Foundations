// LearnIt3D — Module 4: Power Calculator with Load Toggles
// Scene: 3D panel with toggleable loads, live power/cost readout

let scene, camera, renderer;
const loadMeshes = {};

const LOADS = [
  { id: 'light',  label: 'Light',   watts: 100,  color: 0xffee44 },
  { id: 'heater', label: 'Heater',  watts: 1500, color: 0xff6600 },
  { id: 'fridge', label: 'Fridge',  watts: 150,  color: 0x88ccff },
  { id: 'motor',  label: 'Motor',   watts: 750,  color: 0x00f5ff },
  { id: 'tv',     label: 'TV',      watts: 200,  color: 0x00ff88 },
];

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0f2e);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 2, 8);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  // Panel background
  const panelGeo = new THREE.BoxGeometry(8, 4, 0.2);
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x0d1a3a });
  const panel = new THREE.Mesh(panelGeo, panelMat);
  scene.add(panel);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 5);
  scene.add(dirLight);

  // Load boxes on panel
  LOADS.forEach((load, i) => {
    const x = (i - 2) * 1.4;
    const geo = new THREE.BoxGeometry(1, 1, 0.3);
    const mat = new THREE.MeshStandardMaterial({ color: load.color, emissive: 0x000000 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 0, 0.2);
    scene.add(mesh);
    loadMeshes[load.id] = mesh;
  });

  buildUI();
  window.addEventListener('resize', onResize);
}

function buildUI() {
  // Left controls panel
  const ctrl = document.getElementById('controls');
  ctrl.innerHTML = '<h3>Load Toggles</h3>';
  LOADS.forEach(load => {
    const label = document.createElement('label');
    label.style.display = 'block';
    label.style.margin = '8px 0';
    label.style.color = '#fff';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.id = 'cb_' + load.id;
    cb.style.marginRight = '8px';
    cb.addEventListener('change', updateLoads);
    label.appendChild(cb);
    label.appendChild(document.createTextNode(`${load.label} (${load.watts}W)`));
    ctrl.appendChild(label);
  });
  updateLoads();
}

function updateLoads() {
  let totalW = 0;
  LOADS.forEach(load => {
    const on = document.getElementById('cb_' + load.id).checked;
    const mesh = loadMeshes[load.id];
    if (on) {
      mesh.material.emissive.setHex(load.color);
      mesh.material.emissiveIntensity = 0.6;
      totalW += load.watts;
    } else {
      mesh.material.emissive.setHex(0x000000);
      mesh.material.emissiveIntensity = 0;
    }
  });
  const amps = (totalW / 120).toFixed(2);
  const kwh8 = ((totalW / 1000) * 8).toFixed(3);
  const cost = (kwh8 * 0.13).toFixed(2);

  document.getElementById('readout').innerHTML =
    `<table>
      <tr><td>Total Watts</td><td><b>${totalW} W</b></td></tr>
      <tr><td>Total Amps (120V)</td><td><b>${amps} A</b></td></tr>
      <tr><td>kWh per 8 hrs</td><td><b>${kwh8} kWh</b></td></tr>
      <tr><td>Daily Cost</td><td><b>$${cost}</b></td></tr>
    </table>`;
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
