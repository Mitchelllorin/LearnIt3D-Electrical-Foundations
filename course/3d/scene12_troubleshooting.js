// LearnIt3D — Module 12: Troubleshooting Arena
let scene, camera, renderer, raycaster, mouse;
let faultType = null, score = 0;
const nodes = [], wires = [];
let nodeVoltages = [120, 90, 40, 0];

const FAULTS = ['open','short','ground'];
const SYMPTOMS = {
  open:   'Symptom: No voltage at Load — circuit appears dead.',
  short:  'Symptom: Breaker trips immediately when energized.',
  ground: 'Symptom: GFCI trips — possible ground fault on circuit.',
};

function init() {
  scene = new THREE.Scene(); scene.background = new THREE.Color(0x0a0f2e);
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1,50);
  camera.position.set(0,3,10); camera.lookAt(0,0,0);
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  raycaster = new THREE.Raycaster(); mouse = new THREE.Vector2();
  scene.add(new THREE.AmbientLight(0xffffff,0.5));
  const dl=new THREE.DirectionalLight(0xffffff,0.8); dl.position.set(5,8,5); scene.add(dl);

  // Board
  scene.add(Object.assign(new THREE.Mesh(new THREE.PlaneGeometry(12,5),new THREE.MeshStandardMaterial({color:0x0a2a0a})),{rotation:{x:-Math.PI/2,y:0,z:0},position:{x:0,y:0,z:0}}));

  // Source
  addBox(0xff8800, -4.5, 0.3, 0, 0.8,0.8,0.5,'source','120VAC');
  // Nodes
  [[-2.5,0,0,'N1'],[0,0,0,'N2'],[2.5,0,0,'N3']].forEach(([x,y,z,lbl])=>{
    const m=addBox(0xffffff,x,0.2,z,0.25,0.25,0.25,'node',lbl);
    m.userData.nodeLabel=lbl; nodes.push(m);
  });
  // Resistors
  addBox(0x884400,-1.25,0.3,0,0.9,0.4,0.4,'resistor','R1');
  addBox(0x884400, 1.25,0.3,0,0.9,0.4,0.4,'resistor','R2');
  // Load
  addBox(0x00f5ff, 4.5,0.3,0,0.8,0.8,0.5,'load','Load');

  buildWires();
  renderer.domElement.addEventListener('click', onClick);
  window.addEventListener('resize', onResize);
  buildUI();
}

function addBox(color, x, y, z, w, h, d, type, label) {
  const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:0.2}));
  m.position.set(x,y,z); m.userData={type,label}; scene.add(m); return m;
}

function buildWires() {
  [[-4,0,-2.8],[-2.2,0,-0.2],[-0.85,0,0.85],[0.85,0,1.65],[2.8,0,3.8]].forEach(([x1,y,x2],i)=>{
    const geo=new THREE.BoxGeometry(Math.abs(x2-x1),0.08,0.08);
    const mat=new THREE.MeshStandardMaterial({color:0xff4444,emissive:0xff0000,emissiveIntensity:0.3});
    const m=new THREE.Mesh(geo,mat); m.position.set((x1+x2)/2,0.2,0);
    m.userData.wireIdx=i; scene.add(m); wires.push(m);
  });
}

function onClick(e) {
  mouse.x=(e.clientX/window.innerWidth)*2-1; mouse.y=-(e.clientY/window.innerHeight)*2+1;
  raycaster.setFromCamera(mouse,camera);
  const hits=raycaster.intersectObjects(nodes);
  if(hits.length){
    const n=hits[0].object;
    const idx=['N1','N2','N3'].indexOf(n.userData.nodeLabel);
    let v = nodeVoltages[idx];
    if(faultType==='open' && idx>=1) v=0;
    if(faultType==='short') v=120;
    if(faultType==='ground' && idx===2) v=0;
    document.getElementById('probe').textContent=`Probe at ${n.userData.nodeLabel}: ${v} V`;
  }
}

function buildUI() {
  const ctrl=document.getElementById('controls');
  ctrl.innerHTML=`
    <h3>Troubleshooting Arena</h3>
    <button id="faultBtn" style="padding:8px;background:#cc4400;color:#fff;border:none;cursor:pointer;width:100%;margin-bottom:8px">⚡ Inject Fault</button>
    <div id="symptom" style="color:#ff8c00;font-size:12px;min-height:36px;margin-bottom:8px"></div>
    <div id="probe" style="color:#00ff88;font-size:13px;margin-bottom:8px">Click a node to probe voltage.</div>
    <label style="color:#fff">Diagnosis:</label><br>
    <select id="diagSel" style="width:100%;padding:4px;background:#1a2a4a;color:#fff;border:1px solid #00f5ff;margin-bottom:8px">
      <option value="">-- Select fault type --</option>
      <option value="open">Open Circuit</option>
      <option value="short">Short Circuit</option>
      <option value="ground">Ground Fault</option>
    </select>
    <button id="submitBtn" style="padding:8px;background:#004488;color:#fff;border:none;cursor:pointer;width:100%;margin-bottom:8px">Submit Diagnosis</button>
    <div id="result" style="font-size:13px;min-height:24px"></div>
    <div style="color:#00f5ff;margin-top:12px">Score: <b id="scoreDisplay">0</b></div>
  `;
  document.getElementById('faultBtn').addEventListener('click', injectFault);
  document.getElementById('submitBtn').addEventListener('click', checkDiagnosis);
}

function injectFault() {
  faultType = FAULTS[Math.floor(Math.random()*FAULTS.length)];
  document.getElementById('symptom').textContent = SYMPTOMS[faultType];
  document.getElementById('result').textContent='';
  document.getElementById('diagSel').value='';
  document.getElementById('probe').textContent='Click a node to probe voltage.';
  wires.forEach((w,i)=>{
    if(faultType==='open' && i===2){ w.material.color.setHex(0x444444); w.material.emissiveIntensity=0; }
    else if(faultType==='short'){ w.material.color.setHex(0xff0000); w.material.emissiveIntensity=0.8; }
    else { w.material.color.setHex(0xff4444); w.material.emissiveIntensity=0.3; }
  });
}

function checkDiagnosis() {
  const guess = document.getElementById('diagSel').value;
  if(!faultType){ document.getElementById('result').innerHTML='<span style="color:#aaa">Inject a fault first.</span>'; return; }
  if(guess===faultType){ score++; document.getElementById('result').innerHTML='<span style="color:#00ff88">✓ Correct! Well diagnosed.</span>'; }
  else { score--; document.getElementById('result').innerHTML=`<span style="color:#ff4444">✗ Incorrect. Fault was: ${faultType.toUpperCase()}</span>`; }
  document.getElementById('scoreDisplay').textContent=score;
}

function animate() { requestAnimationFrame(animate); renderer.render(scene,camera); }
function onResize() { camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth,window.innerHeight); }
window.addEventListener('DOMContentLoaded',()=>{init();animate();});
