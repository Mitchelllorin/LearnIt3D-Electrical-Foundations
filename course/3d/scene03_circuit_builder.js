
let scene, camera, renderer, controls;
let labelLayer, resultsPanel;
const anchors = [];
const circuit = [];
let seriesGroup, parallelGroup, wireGroup;

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

function makeAnchor(text, object3D, color = '#00f5ff') {
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.padding = '4px 8px';
  div.style.borderRadius = '999px';
  div.style.border = `1px solid ${color}`;
  div.style.background = 'rgba(10,15,46,0.84)';
  div.style.color = '#ffffff';
  div.style.font = '12px Arial, sans-serif';
  div.style.pointerEvents = 'none';
  labelLayer.appendChild(div);
  anchors.push({ div, object3D, text });
}

function updateAnchors() {
  anchors.forEach(({ div, object3D, text }) => {
    div.innerHTML = typeof text === 'function' ? text() : text;
    const pos = object3D.getWorldPosition(new THREE.Vector3()).project(camera);
    div.style.display = pos.z < 1 ? 'block' : 'none';
    div.style.left = `${(pos.x * 0.5 + 0.5) * window.innerWidth}px`;
    div.style.top = `${(-pos.y * 0.5 + 0.5) * window.innerHeight}px`;
    div.style.transform = 'translate(-50%, -50%)';
  });
}

function createUI() {
  labelLayer = document.createElement('div');
  Object.assign(labelLayer.style, { position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '5' });
  document.body.appendChild(labelLayer);

  const panel = document.createElement('div');
  panel.innerHTML = `
    <div style="font-size:18px;color:#00f5ff;font-weight:bold;margin-bottom:10px;">Series / Parallel Builder</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button id="add-series">Add Series Resistor</button>
      <button id="add-parallel">Add Parallel Resistor</button>
      <button id="clear-circuit">Clear</button>
    </div>`;
  Object.assign(panel.style, {
    position: 'absolute', top: '58px', left: '16px', padding: '14px', borderRadius: '14px', background: 'rgba(10,15,46,0.88)',
    border: '1px solid #00f5ff', color: '#fff', font: '14px Arial, sans-serif', pointerEvents: 'auto'
  });
  labelLayer.appendChild(panel);
  panel.querySelectorAll('button').forEach(btn => {
    Object.assign(btn.style, { padding: '8px 10px', borderRadius: '999px', border: '1px solid #00f5ff', background: 'rgba(255,255,255,0.08)', color: '#fff', cursor: 'pointer' });
  });

  resultsPanel = document.createElement('div');
  Object.assign(resultsPanel.style, {
    position: 'absolute', top: '58px', right: '16px', width: '300px', padding: '14px', borderRadius: '14px', background: 'rgba(10,15,46,0.88)',
    border: '1px solid #00ff88', color: '#fff', font: '13px/1.45 Arial, sans-serif'
  });
  labelLayer.appendChild(resultsPanel);

  panel.querySelector('#add-series').addEventListener('click', () => addResistor('series'));
  panel.querySelector('#add-parallel').addEventListener('click', () => addResistor('parallel'));
  panel.querySelector('#clear-circuit').addEventListener('click', () => { circuit.length = 0; rebuildCircuit(); });
}

function addResistor(type) { circuit.push({ type, value: Math.floor(10 + Math.random() * 91) }); rebuildCircuit(); }
function line(points, color) { return new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color })); }

function rebuildCircuit() {
  seriesGroup.clear(); parallelGroup.clear(); wireGroup.clear(); anchors.splice(0).forEach(item => item.div.remove());
  const source = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2, 1.2), new THREE.MeshStandardMaterial({ color: '#00f5ff', emissive: '#00f5ff', emissiveIntensity: 0.4 }));
  source.position.set(-7, 1.2, 0);
  wireGroup.add(source);
  makeAnchor('120 V Source', source, '#00f5ff');

  const series = circuit.filter(item => item.type === 'series');
  const parallel = circuit.filter(item => item.type === 'parallel');
  series.forEach((item, index) => {
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.4, 0.5), new THREE.MeshStandardMaterial({ color: '#ff8c00', emissive: '#552a00' }));
    body.position.set(-4.8 + index * 1.6, 1.2, 0);
    seriesGroup.add(body);
    makeAnchor(() => `${item.value} Ω`, body, '#ff8c00');
  });
  parallel.forEach((item, index) => {
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.4, 0.5), new THREE.MeshStandardMaterial({ color: '#00ff88', emissive: '#00331d' }));
    body.position.set(2.6, 2.6 - index * 1.4, 0);
    parallelGroup.add(body);
    makeAnchor(() => `${item.value} Ω`, body, '#00ff88');
  });

  wireGroup.add(line([new THREE.Vector3(-6.4, 1.9, 0), new THREE.Vector3(-5.4, 1.9, 0)], '#ff4d4d'));
  wireGroup.add(line([new THREE.Vector3(-6.4, 0.5, 0), new THREE.Vector3(5.8, 0.5, 0)], '#eeeeee'));
  if (series.length) {
    const firstX = -5.35;
    const lastX = -4.25 + (series.length - 1) * 1.6;
    wireGroup.add(line([new THREE.Vector3(-5.4, 1.9, 0), new THREE.Vector3(firstX, 1.9, 0)], '#ff4d4d'));
    series.forEach((_, index) => {
      const x = -4.8 + index * 1.6;
      wireGroup.add(line([new THREE.Vector3(x - 0.55, 1.9, 0), new THREE.Vector3(x + 0.55, 1.9, 0)], '#ff9955'));
      wireGroup.add(line([new THREE.Vector3(x, 1.2, 0), new THREE.Vector3(x, 0.5, 0)], '#eeeeee'));
    });
    wireGroup.add(line([new THREE.Vector3(lastX + 0.55, 1.9, 0), new THREE.Vector3(1.2, 1.9, 0)], '#ff4d4d'));
  } else wireGroup.add(line([new THREE.Vector3(-5.4, 1.9, 0), new THREE.Vector3(1.2, 1.9, 0)], '#ff4d4d'));

  if (parallel.length) {
    wireGroup.add(line([new THREE.Vector3(1.8, 0.5, 0), new THREE.Vector3(1.8, 3.0, 0)], '#eeeeee'));
    wireGroup.add(line([new THREE.Vector3(3.4, 0.5, 0), new THREE.Vector3(3.4, 3.0, 0)], '#ff4d4d'));
    parallel.forEach((_, index) => {
      const y = 2.6 - index * 1.4;
      wireGroup.add(line([new THREE.Vector3(1.8, y, 0), new THREE.Vector3(3.4, y, 0)], '#00f5ff'));
    });
    wireGroup.add(line([new THREE.Vector3(1.2, 1.9, 0), new THREE.Vector3(5.8, 1.9, 0)], '#ff4d4d'));
  } else wireGroup.add(line([new THREE.Vector3(1.2, 1.9, 0), new THREE.Vector3(5.8, 1.9, 0)], '#ff4d4d'));

  const seriesTotal = series.reduce((sum, r) => sum + r.value, 0);
  const parallelEq = parallel.length ? 1 / parallel.reduce((sum, r) => sum + 1 / r.value, 0) : 0;
  const totalR = seriesTotal + (parallel.length ? parallelEq : 0);
  const totalI = totalR > 0 ? 120 / totalR : 0;
  const parallelVoltage = parallel.length ? totalI * parallelEq : 0;
  const details = [`<strong>Total Resistance:</strong> ${totalR ? totalR.toFixed(2) : '0.00'} Ω`, `<strong>Total Current @120V:</strong> ${totalI.toFixed(2)} A`, '<strong>Element Voltages</strong>'];
  series.forEach((item, index) => details.push(`Series ${index + 1}: ${(totalI * item.value).toFixed(2)} V across ${item.value} Ω`));
  parallel.forEach((item, index) => details.push(`Parallel ${index + 1}: ${parallelVoltage.toFixed(2)} V across ${item.value} Ω`));
  resultsPanel.innerHTML = details.join('<br>');
}

function onResize() { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); }
function init() {
  scene = new THREE.Scene(); scene.background = new THREE.Color('#0a0f2e');
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100); camera.position.set(0, 6, 14);
  renderer = new THREE.WebGLRenderer({ antialias: true }); renderer.setSize(window.innerWidth, window.innerHeight); renderer.setPixelRatio(window.devicePixelRatio); document.body.appendChild(renderer.domElement);
  controls = createControls(camera, renderer.domElement); controls.target.set(0, 1.5, 0);
  scene.add(new THREE.AmbientLight('#a0b8ff', 0.7)); const sun = new THREE.DirectionalLight('#ffffff', 1.15); sun.position.set(6, 9, 5); scene.add(sun);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(22, 14), new THREE.MeshStandardMaterial({ color: '#0d1537' })); floor.rotation.x = -Math.PI / 2; floor.position.y = -0.01; scene.add(floor); scene.add(new THREE.GridHelper(22, 22, '#123d7a', '#0e234f'));
  seriesGroup = new THREE.Group(); parallelGroup = new THREE.Group(); wireGroup = new THREE.Group(); scene.add(seriesGroup, parallelGroup, wireGroup);
  createUI(); rebuildCircuit(); window.addEventListener('resize', onResize);
}
function animate() { requestAnimationFrame(animate); controls.update(); updateAnchors(); renderer.render(scene, camera); }
window.addEventListener('DOMContentLoaded', () => { init(); animate(); });
