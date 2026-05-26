// LearnIt3D — Module 10: Breaker Panel Interactive
let scene, camera, renderer, raycaster, mouse;
const breakers = [];
let loadPercent = 50;

const BREAKER_DATA = [
  {label:'Main 200A',  amps:200, x:0,    y:1.2,  double:true },
  {label:'Kitchen 20A',amps:20,  x:-0.5, y:0.7,  double:false},
  {label:'Bathroom 20A',amps:20, x: 0.5, y:0.7,  double:false},
  {label:'Bedroom 1 15A',amps:15,x:-0.5, y:0.35, double:false},
  {label:'Bedroom 2 15A',amps:15,x: 0.5, y:0.35, double:false},
  {label:'Living Rm 15A',amps:15,x:-0.5, y:0,    double:false},
  {label:'Dryer 30A',  amps:30,  x: 0.5, y:0,    double:false},
  {label:'Range 40A',  amps:40,  x:-0.5, y:-0.35,double:false},
  {label:'Garage 20A', amps:20,  x: 0.5, y:-0.35,double:false},
  {label:'HVAC 30A',   amps:30,  x:-0.5, y:-0.7, double:false},
  {label:'Outdoor 20A',amps:20,  x: 0.5, y:-0.7, double:false},
  {label:'Spare 15A',  amps:15,  x:-0.5, y:-1.05,double:false},
];

function init() {
  scene = new THREE.Scene(); scene.background = new THREE.Color(0x0a0f2e);
  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1,50);
  camera.position.set(0,0,6); camera.lookAt(0,0,0);
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  raycaster = new THREE.Raycaster(); mouse = new THREE.Vector2();
  scene.add(new THREE.AmbientLight(0xffffff,0.5));
  const dl=new THREE.DirectionalLight(0xffffff,0.8); dl.position.set(3,5,5); scene.add(dl);

  // Panel enclosure
  scene.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(2.2,3.2,0.3),new THREE.MeshStandardMaterial({color:0x556677})),{position:new THREE.Vector3(0,0,-0.2)}));

  BREAKER_DATA.forEach(b => {
    const w = b.double ? 0.7 : 0.32, h = b.double ? 0.25 : 0.22;
    const mat = new THREE.MeshStandardMaterial({color:0x00aa44,emissive:0x00aa44,emissiveIntensity:0.4});
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,0.1), mat);
    mesh.position.set(b.x, b.y, 0.1);
    mesh.userData = { ...b, state:'ON' };
    scene.add(mesh); breakers.push(mesh);
  });

  renderer.domElement.addEventListener('click', onClick);
  window.addEventListener('resize', onResize);
  buildUI();
}

function onClick(e) {
  mouse.x=(e.clientX/window.innerWidth)*2-1; mouse.y=-(e.clientY/window.innerHeight)*2+1;
  raycaster.setFromCamera(mouse,camera);
  const hits = raycaster.intersectObjects(breakers);
  if (hits.length) {
    const b = hits[0].object;
    if (b.userData.state==='TRIPPED') { b.userData.state='ON'; setColor(b,'ON'); }
    else if (b.userData.state==='ON')  { b.userData.state='OFF'; setColor(b,'OFF'); }
    else                               { b.userData.state='ON';  setColor(b,'ON');  }
  }
}

function setColor(mesh, state) {
  const colors = {ON:0x00aa44, OFF:0x334455, TRIPPED:0xff6600};
  const emit    = {ON:0x00aa44, OFF:0x000000, TRIPPED:0xff6600};
  mesh.material.color.setHex(colors[state]);
  mesh.material.emissive.setHex(emit[state]);
  mesh.material.emissiveIntensity = state==='OFF' ? 0 : 0.5;
}

function buildUI() {
  const ctrl = document.getElementById('controls');
  ctrl.innerHTML = `
    <h3>Breaker Panel</h3>
    <label style="color:#fff">Load: <span id="loadLabel">50</span>%</label><br>
    <input type="range" id="loadSlider" min="0" max="150" value="50" style="width:180px"><br><br>
    <div id="status" style="color:#00f5ff;font-size:13px"></div>
    <p style="color:#aaa;font-size:11px">Click breaker to toggle ON/OFF<br>Click TRIPPED to reset</p>
  `;
  document.getElementById('loadSlider').addEventListener('input', e => {
    loadPercent = parseInt(e.target.value);
    document.getElementById('loadLabel').textContent = loadPercent;
    if (loadPercent > 100) tripRandom();
    document.getElementById('status').innerHTML = loadPercent > 100
      ? `⚠ OVERLOAD: ${loadPercent}% — Breaker Tripped!`
      : `Load: ${loadPercent}% — System Normal`;
  });
  document.getElementById('status').innerHTML = 'Load: 50% — System Normal';
}

function tripRandom() {
  const candidates = breakers.filter(b=>b.userData.state==='ON' && !b.userData.double);
  if (candidates.length) { const b=candidates[Math.floor(Math.random()*candidates.length)]; b.userData.state='TRIPPED'; setColor(b,'TRIPPED'); }
}

function animate() { requestAnimationFrame(animate); renderer.render(scene,camera); }
function onResize() { camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth,window.innerHeight); }
window.addEventListener('DOMContentLoaded',()=>{init();animate();});
