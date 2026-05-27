// LearnIt3D — Module 5: Material Conductivity Tester
// Scene: apply voltage to different materials, see electron flow

let scene, camera, renderer, clock;
const particles = {};
let voltageValue = 0;

const MATERIALS = [
  { id: 'copper',   label: 'Copper',   color: 0xb87333, resistivity: 1.7e-8,  conductor: true  },
  { id: 'aluminum', label: 'Aluminum', color: 0xa9a9a9, resistivity: 2.8e-8,  conductor: true  },
  { id: 'steel',    label: 'Steel',    color: 0x444444, resistivity: 1.0e-7,  conductor: true  },
  { id: 'wood',     label: 'Wood',     color: 0x8b4513, resistivity: Infinity, conductor: false },
  { id: 'rubber',   label: 'Rubber',   color: 0x222222, resistivity: Infinity, conductor: false },
];

const L = 1.0;   // 1 metre length
const A = 1e-6;  // 1 mm² cross-section

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0f2e);
  clock = new THREE.Clock();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 3, 10);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dl = new THREE.DirectionalLight(0xffffff, 0.8);
  dl.position.set(5, 10, 5);
  scene.add(dl);

  MATERIALS.forEach((mat, i) => {
    const x = (i - 2) * 2.2;

    // Sample block
    const geo = new THREE.BoxGeometry(1.4, 0.6, 0.6);
    const m = new THREE.MeshStandardMaterial({ color: mat.color });
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(x, 0, 0);
    scene.add(mesh);

    // Particle group for conductors
    if (mat.conductor) {
      const group = new THREE.Group();
      scene.add(group);
      const pts = [];
      for (let p = 0; p < 6; p++) {
        const pgeo = new THREE.SphereGeometry(0.07, 6, 6);
        const pmat = new THREE.MeshStandardMaterial({ color: 0x00f5ff, emissive: 0x00f5ff, emissiveIntensity: 0.8 });
        const pm = new THREE.Mesh(pgeo, pmat);
        pm.position.set(x - 0.7 + (p / 5) * 1.4, 0, 0);
        pm.userData.baseX = x - 0.7;
        pm.userData.offset = p / 5;
        group.add(pm);
        pts.push(pm);
      }
      particles[mat.id] = { group, pts, baseX: x - 0.7 };
    }
  });

  buildUI();
  window.addEventListener('resize', onResize);
}

function buildUI() {
  const ctrl = document.getElementById('controls');
  ctrl.innerHTML = `
    <h3>Conductivity Tester</h3>
    <label style="color:#fff">Applied Voltage: <span id="vLabel">0</span> V</label><br>
    <input type="range" id="voltSlider" min="0" max="240" value="0" style="width:180px"><br><br>
    <div id="readings"></div>
  `;
  document.getElementById('voltSlider').addEventListener('input', e => {
    voltageValue = parseFloat(e.target.value);
    document.getElementById('vLabel').textContent = voltageValue;
    updateReadings();
  });
  updateReadings();
}

function updateReadings() {
  const rows = MATERIALS.map(mat => {
    if (!mat.conductor) return `<tr><td>${mat.label}</td><td>∞ Ω</td><td>0 A</td></tr>`;
    const R = (mat.resistivity * L) / A;
    const I = voltageValue > 0 ? (voltageValue / R).toExponential(2) : '0';
    return `<tr><td>${mat.label}</td><td>${R.toExponential(2)} Ω</td><td>${I} A</td></tr>`;
  }).join('');
  document.getElementById('readings').innerHTML =
    `<table style="color:#fff;font-size:12px"><tr><th>Material</th><th>Resistance</th><th>Current</th></tr>${rows}</table>`;
}

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();

  MATERIALS.forEach(mat => {
    if (!mat.conductor || !particles[mat.id]) return;
    const { pts, baseX } = particles[mat.id];
    const R = (mat.resistivity * L) / A;
    const speed = voltageValue > 0 ? Math.min((voltageValue / R) * 1e6, 2.5) : 0;
    pts.forEach(pm => {
      if (speed > 0) {
        pm.userData.offset = (pm.userData.offset + dt * speed) % 1;
        pm.position.x = baseX + pm.userData.offset * 1.4;
        pm.visible = true;
      } else {
        pm.visible = false;
      }
    });
  });

  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('DOMContentLoaded', () => { init(); animate(); });
