
let scene, camera, renderer, controls, raycaster, mouse;
let labelLayer, tooltip;
const ppeTargets = [];
const anchoredLabels = [];

function createControls(cameraObject, domElement) {
  if (typeof THREE.OrbitControls === 'function') {
    const orbit = new THREE.OrbitControls(cameraObject, domElement);
    orbit.enableDamping = true;
    orbit.maxPolarAngle = Math.PI * 0.48;
    return orbit;
  }

  return {
    update() {},
    target: { set() {} }
  };
}

function makeAnchorLabel(text, object3D, color = '#00f5ff') {
  const div = document.createElement('div');
  div.textContent = text;
  div.style.position = 'absolute';
  div.style.padding = '4px 8px';
  div.style.border = `1px solid ${color}`;
  div.style.borderRadius = '999px';
  div.style.color = color;
  div.style.background = 'rgba(10,15,46,0.8)';
  div.style.font = '12px/1.2 Arial, sans-serif';
  div.style.pointerEvents = 'none';
  labelLayer.appendChild(div);
  anchoredLabels.push({ div, object3D });
}

function updateAnchoredLabels() {
  anchoredLabels.forEach(({ div, object3D }) => {
    const pos = object3D.getWorldPosition(new THREE.Vector3()).project(camera);
    const visible = pos.z < 1;
    div.style.display = visible ? 'block' : 'none';
    if (!visible) return;
    div.style.left = `${(pos.x * 0.5 + 0.5) * window.innerWidth}px`;
    div.style.top = `${(-pos.y * 0.5 + 0.5) * window.innerHeight}px`;
    div.style.transform = 'translate(-50%, -50%)';
  });
}

function showTooltip(text, x, y) {
  tooltip.innerHTML = text;
  tooltip.style.left = `${x + 14}px`;
  tooltip.style.top = `${y + 14}px`;
  tooltip.style.display = 'block';
}

function createOverlay() {
  labelLayer = document.createElement('div');
  Object.assign(labelLayer.style, { position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '5' });
  document.body.appendChild(labelLayer);

  tooltip = document.createElement('div');
  Object.assign(tooltip.style, {
    position: 'absolute', display: 'none', maxWidth: '220px', padding: '10px 12px', borderRadius: '10px',
    border: '1px solid #00f5ff', background: 'rgba(10,15,46,0.92)', color: '#ffffff',
    font: '13px/1.4 Arial, sans-serif', boxShadow: '0 0 16px rgba(0,245,255,0.35)'
  });
  labelLayer.appendChild(tooltip);

  const hint = document.createElement('div');
  hint.innerHTML = '<strong>PPE & Hazard Zone</strong><br>Click the helmet or gloves.';
  Object.assign(hint.style, {
    position: 'absolute', top: '58px', left: '16px', padding: '12px', borderRadius: '12px',
    background: 'rgba(10,15,46,0.88)', color: '#fff', border: '1px solid #00f5ff', font: '13px Arial, sans-serif'
  });
  labelLayer.appendChild(hint);
}

function createRoom() {
  const wallMat = new THREE.MeshStandardMaterial({ color: '#13204f', side: THREE.DoubleSide });
  const floorMat = new THREE.MeshStandardMaterial({ color: '#09122b' });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), floorMat);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(16, 8), wallMat);
  backWall.position.set(0, 4, -8);
  scene.add(backWall);

  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(16, 8), wallMat);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.set(-8, 4, 0);
  scene.add(leftWall);
  const rightWall = leftWall.clone();
  rightWall.position.x = 8;
  rightWall.rotation.y = -Math.PI / 2;
  scene.add(rightWall);

  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), wallMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = 8;
  scene.add(ceiling);
}

function addZoneRings() {
  [
    { radius: 5, color: '#00ff88', label: 'Safe Zone' },
    { radius: 3, color: '#ffd84d', label: 'Caution Zone' },
    { radius: 1.5, color: '#ff3b3b', label: 'Danger Zone' }
  ].forEach((zone, index) => {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(zone.radius - 0.18, zone.radius, 64),
      new THREE.MeshBasicMaterial({ color: zone.color, side: THREE.DoubleSide, transparent: true, opacity: 0.85 })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02 + index * 0.003;
    scene.add(ring);

    const marker = new THREE.Object3D();
    marker.position.set(zone.radius + 0.4, 0.25, 0);
    scene.add(marker);
    makeAnchorLabel(zone.label, marker, zone.color);
  });
}

function addWorker() {
  const bodyMat = new THREE.MeshStandardMaterial({ color: '#4b92ff' });
  const skinMat = new THREE.MeshStandardMaterial({ color: '#e0b59a' });
  const ppeOrange = new THREE.MeshStandardMaterial({ color: '#ff8c00', emissive: '#552a00' });
  const ppeYellow = new THREE.MeshStandardMaterial({ color: '#ffd84d', emissive: '#554900' });

  const worker = new THREE.Group();
  const torso = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.6, 0.6), bodyMat);
  torso.position.y = 2.2;
  worker.add(torso);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), skinMat);
  head.position.y = 3.45;
  worker.add(head);

  const armGeo = new THREE.BoxGeometry(0.28, 1.2, 0.28);
  const leftArm = new THREE.Mesh(armGeo, bodyMat);
  leftArm.position.set(-0.85, 2.2, 0);
  worker.add(leftArm);
  const rightArm = leftArm.clone();
  rightArm.position.x = 0.85;
  worker.add(rightArm);

  const legGeo = new THREE.BoxGeometry(0.32, 1.4, 0.32);
  const leftLeg = new THREE.Mesh(legGeo, bodyMat);
  leftLeg.position.set(-0.25, 0.8, 0);
  worker.add(leftLeg);
  const rightLeg = leftLeg.clone();
  rightLeg.position.x = 0.25;
  worker.add(rightLeg);

  const helmet = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.28, 0.9), ppeOrange);
  helmet.position.set(0, 3.88, 0);
  helmet.userData = { title: 'Hard Hat', purpose: 'Protects the worker from impact and overhead hazards in energized areas.' };
  worker.add(helmet);

  const leftGlove = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.28, 0.22), ppeYellow);
  leftGlove.position.set(-0.85, 1.45, 0);
  leftGlove.userData = { title: 'Insulated Gloves', purpose: 'Reduce shock risk near exposed conductors or live equipment.' };
  worker.add(leftGlove);
  const rightGlove = leftGlove.clone();
  rightGlove.position.x = 0.85;
  rightGlove.userData = { title: 'Insulated Gloves', purpose: 'Reduce shock risk near exposed conductors or live equipment.' };
  worker.add(rightGlove);

  ppeTargets.push(helmet, leftGlove, rightGlove);
  scene.add(worker);
  makeAnchorLabel('Helmet', helmet, '#ff8c00');
  makeAnchorLabel('Gloves', leftGlove, '#ffd84d');
}

function onPointerDown(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(ppeTargets, false);
  if (hits.length) {
    const data = hits[0].object.userData;
    showTooltip(`<strong>${data.title}</strong><br>${data.purpose}`, event.clientX, event.clientY);
  } else {
    tooltip.style.display = 'none';
  }
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#0a0f2e');
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(7, 8, 9);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = createControls(camera, renderer.domElement);
  controls.target.set(0, 1.8, 0);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  createOverlay();
  createRoom();
  addZoneRings();
  addWorker();
  scene.add(new THREE.GridHelper(14, 14, '#123d7a', '#0e234f'));
  scene.add(new THREE.AmbientLight('#7da6ff', 0.6));
  const keyLight = new THREE.DirectionalLight('#ffffff', 1.1);
  keyLight.position.set(5, 10, 4);
  scene.add(keyLight);
  window.addEventListener('resize', onResize);
  renderer.domElement.addEventListener('pointerdown', onPointerDown);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  updateAnchoredLabels();
  renderer.render(scene, camera);
}

window.addEventListener('DOMContentLoaded', () => { init(); animate(); });
