// LearnIt3D — Module 8: Transformer Core Animation
// Scene: 3D transformer with animated flux particles and turns ratio slider

let scene, camera, renderer, clock;
let fluxParticles = [];
let primaryCoil, secondaryCoil;
let Np = 200, Ns = 20, Vp = 2400;

const FLUX_RECT = [
  { x: -1.5, y:  0.6 }, { x: -0.75, y:  0.6 }, { x: 0, y:  0.6 },
  { x:  0.75, y: 0.6 }, { x:  1.5, y:  0.6 },
  { x:  1.5, y:  0   }, { x:  1.5, y: -0.6 },
  { x:  0.75, y:-0.6 }, { x: 0, y: -0.6 },
  { x: -0.75, y:-0.6 }, { x: -1.5, y: -0.6 },
  { x: -1.5, y:  0   },
];

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0f2e);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.set(0, 2, 8);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  clock = new THREE.Clock();

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dl = new THREE.DirectionalLight(0xffffff, 0.8);
  dl.position.set(5, 8, 5);
  scene.add(dl);

  // Iron core (rectangle outline)
  const coreTop    = makeBar(3.2, 0.3, 0.5,  0,  0.75, 0, 0x444444);
  const coreBot    = makeBar(3.2, 0.3, 0.5,  0, -0.75, 0, 0x444444);
  const coreLeft   = makeBar(0.3, 1.2, 0.5, -1.5, 0,   0, 0x444444);
  const coreRight  = makeBar(0.3, 1.2, 0.5,  1.5, 0,   0, 0x444444);
  scene.add(coreTop, coreBot, coreLeft, coreRight);

  // Primary coil (left, copper)
  const priGeo = new THREE.TorusGeometry(0.45, 0.12, 8, 16);
  const priMat = new THREE.MeshStandardMaterial({ color: 0xb87333, emissive: 0xb87333, emissiveIntensity: 0.3 });
  primaryCoil = new THREE.Mesh(priGeo, priMat);
  primaryCoil.position.set(-0.8, 0, 0);
  primaryCoil.rotation.y = Math.PI / 2;
  scene.add(primaryCoil);

  // Secondary coil (right, gray)
  const secGeo = new THREE.TorusGeometry(0.45, 0.12, 8, 16);
  const secMat = new THREE.MeshStandardMaterial({ color: 0x888888, emissive: 0x888888, emissiveIntensity: 0.1 });
  secondaryCoil = new THREE.Mesh(secGeo, secMat);
  secondaryCoil.position.set(0.8, 0, 0);
  secondaryCoil.rotation.y = Math.PI / 2;
  scene.add(secondaryCoil);

  // Flux particles
  for (let i = 0; i < 8; i++) {
    const geo = new THREE.SphereGeometry(0.06, 8, 8);
    const mat = new THREE.MeshStandardMaterial({ color: 0x00f5ff, emissive: 0x00f5ff, emissiveIntensity: 1 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.userData.t = i / 8;
    scene.add(mesh);
    fluxParticles.push(mesh);
  }

  buildUI();
  window.addEventListener('resize', onResize);
}

function makeBar(w, h, d, x, y, z, color) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const mat = new THREE.MeshStandardMaterial({ color });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  return mesh;
}

function getFluxPoint(t) {
  const pts = FLUX_RECT;
  const n = pts.length;
  const scaledT = ((t % 1) + 1) % 1;
  const idx = scaledT * n;
  const i0 = Math.floor(idx) % n;
  const i1 = (i0 + 1) % n;
  const frac = idx - Math.floor(idx);
  return {
    x: pts[i0].x + (pts[i1].x - pts[i0].x) * frac,
    y: pts[i0].y + (pts[i1].y - pts[i0].y) * frac,
  };
}

function buildUI() {
  const ctrl = document.getElementById('controls');
  ctrl.innerHTML = `
    <h3>Transformer</h3>
    <label style="color:#fff">Primary Turns (Np): <span id="npLabel">200</span></label><br>
    <input type="range" id="npSlider" min="50" max="500" value="200" style="width:180px"><br><br>
    <label style="color:#fff">Secondary Turns (Ns): <span id="nsLabel">20</span></label><br>
    <input type="range" id="nsSlider" min="50" max="500" value="20" style="width:180px"><br><br>
    <label style="color:#fff">Primary Voltage (Vp): <span id="vpLabel">2400</span> V</label><br>
    <input type="range" id="vpSlider" min="120" max="2400" value="2400" style="width:180px"><br><br>
    <div id="readout" style="color:#00f5ff;font-size:14px;line-height:1.8"></div>
  `;

  ['np','ns','vp'].forEach(id => {
    document.getElementById(`${id}Slider`).addEventListener('input', e => {
      const val = parseFloat(e.target.value);
      if (id === 'np') Np = val;
      if (id === 'ns') Ns = val;
      if (id === 'vp') Vp = val;
      document.getElementById(`${id}Label`).textContent = val;
      updateReadout();
    });
  });

  updateReadout();
}

function updateReadout() {
  const Vs = (Vp * Ns / Np).toFixed(2);
  const ratio = (Np / Ns).toFixed(2);
  const type = Ns > Np ? '🔼 Step-UP Transformer' : '🔽 Step-DOWN Transformer';
  const typeColor = Ns > Np ? '#00ff88' : '#ff8c00';
  const brightness = Math.min(Ns / Np, 2) * 0.5;
  secondaryCoil.material.emissiveIntensity = brightness;

  document.getElementById('readout').innerHTML =
    `Turns Ratio Np:Ns = <b>${ratio}:1</b><br>
     Vs = Vp × (Ns/Np) = <b>${Vs} V</b><br>
     <span style="color:${typeColor}">${type}</span>`;
}

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();

  fluxParticles.forEach(p => {
    p.userData.t = (p.userData.t + dt * 0.4) % 1;
    const pt = getFluxPoint(p.userData.t);
    p.position.set(pt.x, pt.y, 0);
  });

  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('DOMContentLoaded', () => { init(); animate(); });
