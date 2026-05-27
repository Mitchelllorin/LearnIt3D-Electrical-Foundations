// LearnIt3D — Module 9: 3D House Wiring Map
let scene, camera, renderer, raycaster, mouse;
const roomMeshes = [];
const ROOMS = [
  { name:'Kitchen',     x:-2,  z:-1.5, color:0xff8c00, breaker:'20A', awg:'12 AWG', gfci:'Yes', afci:'Yes',  loads:'Outlets, dishwasher, microwave' },
  { name:'Bathroom',    x: 2,  z:-1.5, color:0x0055ff, breaker:'20A', awg:'12 AWG', gfci:'Yes', afci:'No',   loads:'Outlets, exhaust fan, lighting' },
  { name:'Living Room', x:-2,  z: 1,   color:0x00aa44, breaker:'15A', awg:'14 AWG', gfci:'No',  afci:'Yes',  loads:'Outlets, lighting, TV' },
  { name:'Bedroom',     x: 2,  z: 1,   color:0x7700cc, breaker:'15A', awg:'14 AWG', gfci:'No',  afci:'Yes',  loads:'Outlets, lighting' },
  { name:'Garage',      x: 0,  z: 2.8, color:0xcccc00, breaker:'20A', awg:'12 AWG', gfci:'Yes', afci:'No',   loads:'Outlets, garage door opener' },
];

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0f2e);
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
  camera.position.set(0, 9, 9); camera.lookAt(0,0,0);
  renderer = new THREE.WebGLRenderer({ antialias:true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  raycaster = new THREE.Raycaster(); mouse = new THREE.Vector2();
  scene.add(new THREE.AmbientLight(0xffffff,0.6));
  const dl = new THREE.DirectionalLight(0xffffff,0.8); dl.position.set(5,10,5); scene.add(dl);

  // Floor
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(10,8), new THREE.MeshStandardMaterial({color:0x1a1a2a}));
  floor.rotation.x = -Math.PI/2; scene.add(floor);

  // Walls
  [[0,1,10,0.2,4,0,2],[0,1,10,0.2,4,0,-4],[1,0,0.2,8,4,-5,0],[1,0,0.2,8,4,5,0]].forEach(([rx,ry,w,d,h,x,z])=>{
    const m = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), new THREE.MeshStandardMaterial({color:0x334455,transparent:true,opacity:0.5}));
    m.position.set(x,2,z); scene.add(m);
  });

  // Roof
  const roof = new THREE.Mesh(new THREE.ConeGeometry(6.5,2,4), new THREE.MeshStandardMaterial({color:0x223344}));
  roof.position.set(0,5,0); scene.add(roof);

  // Panel
  const panel = new THREE.Mesh(new THREE.BoxGeometry(0.5,1,0.2), new THREE.MeshStandardMaterial({color:0x888888,emissive:0x00f5ff,emissiveIntensity:0.3}));
  panel.position.set(-4.8,1.5,0); scene.add(panel);

  // Room zones
  ROOMS.forEach(r => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2.5,2), new THREE.MeshStandardMaterial({color:r.color,transparent:true,opacity:0.7}));
    m.rotation.x = -Math.PI/2; m.position.set(r.x, 0.01, r.z); m.userData = r;
    scene.add(m); roomMeshes.push(m);
  });

  renderer.domElement.addEventListener('click', onClick);
  window.addEventListener('resize', onResize);
}

function onClick(e) {
  mouse.x = (e.clientX/window.innerWidth)*2-1;
  mouse.y = -(e.clientY/window.innerHeight)*2+1;
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(roomMeshes);
  if (hits.length) {
    const r = hits[0].object.userData;
    document.getElementById('info').innerHTML =
      `<h3>${r.name}</h3><table>
       <tr><td>Breaker</td><td>${r.breaker}</td></tr>
       <tr><td>Wire Gauge</td><td>${r.awg}</td></tr>
       <tr><td>GFCI Required</td><td>${r.gfci}</td></tr>
       <tr><td>AFCI Required</td><td>${r.afci}</td></tr>
       <tr><td>Loads</td><td>${r.loads}</td></tr>
       </table>`;
  }
}

function animate() { requestAnimationFrame(animate); renderer.render(scene,camera); }
function onResize() { camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth,window.innerHeight); }
window.addEventListener('DOMContentLoaded',()=>{init();animate();});
