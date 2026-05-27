// LearnIt3D — Module 11: Motor Cutaway Model
let scene, camera, renderer, clock, raycaster, mouse;
let rotor, shaft, statorSegments=[];
let running=false, speed=0.5;

const PART_INFO = {
  stator:    { name:'Stator',      desc:'Stationary outer winding. Creates rotating magnetic field.' },
  rotor:     { name:'Rotor',       desc:'Rotating inner core. Follows stator field with slight slip (~3%).' },
  shaft:     { name:'Shaft',       desc:'Transmits mechanical power to the load.' },
  endbell:   { name:'End Bell',    desc:'Supports bearings and encloses the motor internals.' },
  terminal:  { name:'Terminal Box',desc:'Connection point for line voltage and motor leads.' },
};

function init() {
  scene = new THREE.Scene(); scene.background = new THREE.Color(0x0a0f2e);
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1,50);
  camera.position.set(0,2,7); camera.lookAt(0,0,0);
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  clock = new THREE.Clock();
  raycaster = new THREE.Raycaster(); mouse = new THREE.Vector2();
  scene.add(new THREE.AmbientLight(0xffffff,0.5));
  const dl=new THREE.DirectionalLight(0xffffff,0.8); dl.position.set(5,8,5); scene.add(dl);

  // Stator
  const statorGeo = new THREE.CylinderGeometry(1.2,1.2,2.5,32,1,true);
  const statorMat = new THREE.MeshStandardMaterial({color:0x667788,side:THREE.DoubleSide,transparent:true,opacity:0.7});
  const statorMesh = new THREE.Mesh(statorGeo,statorMat);
  statorMesh.userData.partKey='stator'; scene.add(statorMesh);

  // 6 stator coil segments
  for(let i=0;i<6;i++){
    const angle = (i/6)*Math.PI*2;
    const geo = new THREE.BoxGeometry(0.15,2.4,0.2);
    const mat = new THREE.MeshStandardMaterial({color:0xb87333,emissive:0xb87333,emissiveIntensity:0.2});
    const m = new THREE.Mesh(geo,mat);
    m.position.set(Math.cos(angle)*1.1, 0, Math.sin(angle)*1.1);
    m.rotation.y = angle;
    m.userData.partKey='stator'; m.userData.segIdx=i;
    scene.add(m); statorSegments.push(m);
  }

  // Rotor
  const rotorGeo = new THREE.CylinderGeometry(0.7,0.7,2.6,24);
  const rotorMat = new THREE.MeshStandardMaterial({color:0x1a3a6a});
  rotor = new THREE.Mesh(rotorGeo,rotorMat);
  rotor.userData.partKey='rotor'; scene.add(rotor);

  // Shaft
  const shaftGeo = new THREE.CylinderGeometry(0.1,0.1,4,12);
  const shaftMat = new THREE.MeshStandardMaterial({color:0xcccccc});
  shaft = new THREE.Mesh(shaftGeo,shaftMat);
  shaft.userData.partKey='shaft'; scene.add(shaft);

  // End bells
  [-1.3,1.3].forEach(y=>{
    const geo = new THREE.CylinderGeometry(1.2,1.2,0.15,32);
    const mat = new THREE.MeshStandardMaterial({color:0x556677});
    const m = new THREE.Mesh(geo,mat); m.position.y=y;
    m.userData.partKey='endbell'; scene.add(m);
  });

  // Terminal box
  const termGeo = new THREE.BoxGeometry(0.5,0.4,0.3);
  const termMat = new THREE.MeshStandardMaterial({color:0x888800,emissive:0x444400,emissiveIntensity:0.3});
  const term = new THREE.Mesh(termGeo,termMat);
  term.position.set(1.35,0.5,0); term.userData.partKey='terminal'; scene.add(term);

  renderer.domElement.addEventListener('click', onClick);
  window.addEventListener('resize', onResize);
  buildUI();
}

function onClick(e) {
  mouse.x=(e.clientX/window.innerWidth)*2-1; mouse.y=-(e.clientY/window.innerHeight)*2+1;
  raycaster.setFromCamera(mouse,camera);
  const all=[...statorSegments,...scene.children.filter(c=>c.userData.partKey)];
  const hits=raycaster.intersectObjects(all);
  if(hits.length){
    const key=hits[0].object.userData.partKey;
    const info=PART_INFO[key];
    if(info) document.getElementById('info').innerHTML=`<b>${info.name}</b><br>${info.desc}`;
  }
}

function buildUI() {
  const ctrl=document.getElementById('controls');
  ctrl.innerHTML=`
    <h3>AC Motor</h3>
    <button id="runBtn" style="padding:8px 16px;background:#00aa44;color:#fff;border:none;cursor:pointer;margin-bottom:12px">▶ Run</button><br>
    <label style="color:#fff">Speed: <span id="speedLabel">50</span>%</label><br>
    <input type="range" id="speedSlider" min="0" max="100" value="50" style="width:180px"><br><br>
    <div id="info" style="color:#00f5ff;font-size:13px;margin-top:8px">Click a part for details.</div>
  `;
  document.getElementById('runBtn').addEventListener('click',()=>{
    running=!running;
    document.getElementById('runBtn').textContent=running?'⏹ Stop':'▶ Run';
    document.getElementById('runBtn').style.background=running?'#cc2200':'#00aa44';
  });
  document.getElementById('speedSlider').addEventListener('input',e=>{
    speed=parseInt(e.target.value)/100;
    document.getElementById('speedLabel').textContent=e.target.value;
  });
}

function animate() {
  requestAnimationFrame(animate);
  const dt=clock.getDelta();
  if(running){
    const fieldSpeed=speed*5;
    rotor.rotation.y+=dt*fieldSpeed*0.97; // 3% slip
    shaft.rotation.y=rotor.rotation.y;
    statorSegments.forEach((seg,i)=>{
      const phase=clock.getElapsedTime()*fieldSpeed+(i/6)*Math.PI*2;
      const intensity=0.2+0.6*Math.max(0,Math.sin(phase));
      seg.material.emissiveIntensity=intensity;
    });
  }
  renderer.render(scene,camera);
}

function onResize() { camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth,window.innerHeight); }
window.addEventListener('DOMContentLoaded',()=>{init();animate();});
