var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 1, 1100);
camera.target = new THREE.Vector3(0, 0, 0);
camera.lookAt(camera.target);

var axisHelper = new THREE.AxisHelper( 5 );
// scene.add( axisHelper );
var textureLoader = new THREE.TextureLoader();
var AU = 27;

var milkyWaySize = 1000;

var sunSize = 348.15;
scene.add(new THREE.AmbientLight(0xffffff));

var material = new THREE.MeshBasicMaterial({
  map: textureLoader.load('images/sky2.jpg'),
  side: THREE.DoubleSide
});

var milkyWay = new THREE.Mesh(new THREE.SphereGeometry(milkyWaySize, 35, 35), material);
scene.add(milkyWay);

// mercury
var mercurySize = 2.2;
var mercuryOrbitRadius = sunSize + (AU * 0.4);
var mercuryOrbitAngle = getRandomArbitrary(0, 360);
var mercuryOrbitSpeed = 0.3;
var mercuryRotateSpeed = 0.05;

var material = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/mercury.jpg'),
  shading: THREE.SmoothShading
});
var mercury = new THREE.Mesh(new THREE.SphereGeometry(mercurySize, 15, 15), material);
//scene.add(mercury);

// venus
var venusSize = 3;
var venusOrbitRadius = sunSize + (AU * 0.7);
var venusOrbitAngle = getRandomArbitrary(0, 360);
var venusOrbitSpeed = 0.2;
var venusRotateSpeed = 0.05;

var material = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/venus.jpg'),
  shading: THREE.SmoothShading
});
var venus = new THREE.Mesh(new THREE.SphereGeometry(venusSize, 15, 15), material);
//scene.add(venus);

// earth
var earthSize = 3.5;
var earthOrbitRadius = sunSize + AU;
var earthOrbitAngle = getRandomArbitrary(0, 360);
var earthOrbitSpeed = 0.2;
var earthRotateSpeed = 0.05;

var material = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/earth.jpg'),
  shading: THREE.SmoothShading
});
var earth = new THREE.Mesh(new THREE.SphereGeometry(earthSize, 20, 20), material);
scene.add(earth);

// mars
var marsSize = 4.6;
var marsOrbitRadius = sunSize + (AU * 1.5);
var marsOrbitAngle = getRandomArbitrary(0, 360);
var marsOrbitSpeed = 0.2;
var marsRotateSpeed = 0.05;

var material = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/mars.jpg'),
  shading: THREE.SmoothShading
});
var mars = new THREE.Mesh(new THREE.SphereGeometry(marsSize, 15, 15), material);
scene.add(mars);

// jupiter
var jupiterSize = 34.99;
var jupiterOrbitRadius = sunSize + (AU * 5.2);
var jupiterOrbitAngle = getRandomArbitrary(0, 360);
var jupiterOrbitSpeed = 0.12;
var jupiterRotateSpeed = 0.05;

var jupiterMaterial = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/jupiter.jpg'),
  shading: THREE.SmoothShading
});

var jupiter = new THREE.Mesh(new THREE.SphereGeometry(jupiterSize, 25, 25), jupiterMaterial);
scene.add(jupiter);

// saturn
var saturnSize = 29.1;
var saturnOrbitRadius = sunSize + (AU * 9.5);
var saturnOrbitAngle = getRandomArbitrary(0, 360);
var saturnOrbitSpeed = 0.18;
var saturnRotateSpeed = 0.05;

var saturnMaterial = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/saturn.jpg'),
  shading: THREE.SmoothShading
});

var saturn = new THREE.Mesh(new THREE.SphereGeometry(saturnSize, 25, 25), saturnMaterial);
scene.add(saturn);

var saturnRingMaterial = new THREE.MeshLambertMaterial({
  map: THREE.ImageUtils.loadTexture('images/saturn-ring.jpg'),
  shading: THREE.SmoothShading,
  side: THREE.DoubleSide
});
saturnRing = new THREE.Mesh( new THREE.RingGeometry(saturnRingStart, saturnRingEnd, 30), saturnRingMaterial);
saturn.add(saturnRing);
saturnRing.rotation.x = 90 * Math.PI / 180;

var saturnRingStart = saturnSize + 3.3;
var saturnRingEnd = saturnSize + 60;

// uranus
var uranusSize = 12.7;
var uranusOrbitRadius = sunSize + (AU * 19.2);
var uranusOrbitAngle = getRandomArbitrary(0, 360);
var uranusOrbitSpeed = 0.23;
var uranusRotateSpeed = 0.05;

var uranusRingStart = uranusSize + 3;
var uranusRingEnd = uranusSize + 40;

var uranusMaterial = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/uranus.jpg'),
  shading: THREE.SmoothShading
});

var uranus = new THREE.Mesh(new THREE.SphereGeometry(uranusSize, 20, 20), uranusMaterial);
scene.add(uranus);

var uranusRingMaterial = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/uranus-ring.png'),
  shading: THREE.SmoothShading,
  side: THREE.DoubleSide,
  transparent: true
});
var uranusRing = new THREE.Mesh(new THREE.RingGeometry(uranusRingStart, uranusRingEnd, 30), uranusRingMaterial);
uranus.add(uranusRing);

var radians = 0 * Math.PI / 180;
uranus.position.x = Math.cos(radians) * uranusOrbitRadius;
uranus.position.z = Math.sin(radians) * uranusOrbitRadius;
uranusRing.rotation.x = 90 * Math.PI / 180;
uranus.rotation.z = 90 * Math.PI / 180;

// neptune
var neptuneSize = 12.3;
var neptuneOrbitRadius = sunSize + (AU * 30.1);
var neptuneOrbitAngle = getRandomArbitrary(0, 360);
var neptuneOrbitSpeed = 0.2;
var neptuneRotateSpeed = 0.05;

var neptuneMaterial = new THREE.MeshLambertMaterial({
  map: textureLoader.load('images/neptune.jpg'),
  shading: THREE.SmoothShading
});

var neptune = new THREE.Mesh(new THREE.SphereGeometry(neptuneSize, 20, 20), neptuneMaterial);
scene.add(neptune);



var textMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
var mercuryText = new THREE.Mesh();
var venusText = new THREE.Mesh();
var marsText = new THREE.Mesh();
var earthText = new THREE.Mesh();
var jupiterText = new THREE.Mesh();
var saturnText = new THREE.Mesh();
var uranusText = new THREE.Mesh();
var neptuneText = new THREE.Mesh();
var farEdgeText = new THREE.Mesh();

var fontLoader = new THREE.FontLoader().load('helvetiker_regular.typeface.json', function(font) {
  var mercuryTextGeometry = new THREE.TextGeometry('Mercury', {
    font: font,
    size: 40,
    bevelEnabled: false,
    height: 1
  });
  mercuryText = new THREE.Mesh(mercuryTextGeometry, textMaterial);
  //scene.add(mercuryText);

  var venusTextGeometry = new THREE.TextGeometry('Venus', {
    font: font,
    size: 45,
    bevelEnabled: false,
    height: 1
  });
  venusText = new THREE.Mesh(venusTextGeometry, textMaterial);
  //scene.add(venusText);

  var earthTextGeometry = new THREE.TextGeometry('Sentiment Analysis', {
    font: font,
    size: 35,
    bevelEnabled: false,
    height: 1
  });
  earthText = new THREE.Mesh(earthTextGeometry, textMaterial);
  scene.add(earthText);

  var marsTextGeometry = new THREE.TextGeometry('Fraud Detection', {
    font: font,
    size: 35,
    bevelEnabled: false,
    height: 1
  });
  marsText = new THREE.Mesh(marsTextGeometry, textMaterial);
  scene.add(marsText);

  var saturnTextGeometry = new THREE.TextGeometry('ChatBot', {
    font: font,
    size: 40,
    bevelEnabled: false,
    height: 1
  });
  saturnText = new THREE.Mesh(saturnTextGeometry, textMaterial);
  scene.add(saturnText);

  var jupiterTextGeometry = new THREE.TextGeometry('Smart Search', {
    font: font,
    size: 35,
    bevelEnabled: false,
    height: 1
  });
  jupiterText = new THREE.Mesh(jupiterTextGeometry, textMaterial);
  scene.add(jupiterText);

  var uranusTextGeometry = new THREE.TextGeometry('Anomaly Detection', {
    font: font,
    size: 45,
    bevelEnabled: false,
    height: 1
  });
  uranusText = new THREE.Mesh(uranusTextGeometry, textMaterial);
  scene.add(uranusText);

  var neptuneTextGeometry = new THREE.TextGeometry('Double Debit', {
    font: font,
    size: 45,
    bevelEnabled: false,
    height: 1
  });
  neptuneText = new THREE.Mesh(neptuneTextGeometry, textMaterial);
  scene.add(neptuneText);


  var FarEdgeTextGeometry = new THREE.TextGeometry('FarEdge', {
    font: font,
    size: 30,
    bevelEnabled: false,
    height: 0.3
  });
  farEdgeText = new THREE.Mesh(FarEdgeTextGeometry, textMaterial);
  scene.add(farEdgeText);
  

});

var controls = new THREE.VRControls(camera);
controls.standing = true;
// camera.position.y = controls.userHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var effect = new THREE.VREffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var options = {
  color: 'black',
  background: 'white',
  corners: 'square'
};
var enterVRButton = new webvrui.EnterVRButton(renderer.domElement, options);
enterVRButton.on('exit', function() {
  camera.quaternion.set(0, 0, 0, 1);
  camera.position.set(0, controls.userHeight, 0);
});
enterVRButton.on('hide', function() {
  document.getElementById('ui').style.display = 'none';
});
enterVRButton.on('show', function() {
  document.getElementById('ui').style.display = 'inherit';
});
document.getElementById('vr-button').appendChild(enterVRButton.domElement);
document.getElementById('no-vr').addEventListener('click', function() {
  enterVRButton.requestEnterFullscreen();
});
animate();

function animate() {

  // run mercury's orbit around the Sun
  mercuryOrbitAngle -= mercuryOrbitSpeed;
  var radians = mercuryOrbitAngle * Math.PI / 180;
  mercury.position.x = Math.cos(radians) * mercuryOrbitRadius;
  mercury.position.z = Math.sin(radians) * mercuryOrbitRadius;
  mercury.rotation.y += mercuryRotateSpeed;
  mercuryText.position.x = mercury.position.x + 10;
  mercuryText.position.y = mercury.position.y;
  mercuryText.position.z = mercury.position.z;
  mercuryText.needsUpdate = true;

  // run venus's orbit around the sun
  venusOrbitAngle -= venusOrbitSpeed;
  var radians = venusOrbitAngle * Math.PI / 180;
  venus.position.x = Math.cos(radians) * venusOrbitRadius;
  venus.position.z = Math.sin(radians) * venusOrbitRadius;
  venus.rotation.y -= venusRotateSpeed;
  venusText.position.x = venus.position.x + 10;
  venusText.position.y = venus.position.y;
  venusText.position.z = venus.position.z;
  venusText.needsUpdate = true;

  // run earth around the sun
  earthOrbitAngle -= earthOrbitSpeed;
  var radians = earthOrbitAngle * Math.PI / 180;
  earth.position.x = Math.cos(radians) * earthOrbitRadius;
  earth.position.z = Math.sin(radians) * earthOrbitRadius;
  earth.position.y += earthRotateSpeed;
  earthText.position.x = earth.position.x + 10;
  earthText.position.y = earth.position.y;
  earthText.position.z = earth.position.z;
  earthText.needsUpdate = true;


  // mars around the sun
  marsOrbitAngle -= marsOrbitSpeed;
  var radians = marsOrbitAngle * Math.PI / 180;
  mars.position.x = Math.cos(radians) * marsOrbitRadius;
  mars.position.z = Math.sin(radians) * marsOrbitRadius;
  mars.position.y += marsRotateSpeed;
  marsText.position.x = mars.position.x + 10;
  //console.log("x "+mars.position.x+"y "+mars.position.y+"z "+mars.position.z);
  marsText.position.y = mars.position.y;
  marsText.position.z = mars.position.z;
  marsText.needsUpdate = true;

  // jupiter around the sun
  jupiterOrbitAngle -= venusOrbitSpeed;
  var radians = jupiterOrbitAngle * Math.PI / 180;
  jupiter.position.x = Math.cos(radians) * jupiterOrbitRadius;
  jupiter.position.z = Math.sin(radians) * jupiterOrbitRadius;
  jupiter.position.y += jupiterRotateSpeed;
  jupiterText.position.x = jupiter.position.x + 10;
  jupiterText.position.y = jupiter.position.y + 40;
  jupiterText.position.z = jupiter.position.z;
  jupiterText.needsUpdate = true;

  // saturn around the sun
  saturnOrbitAngle -= saturnOrbitSpeed;
  var radians = saturnOrbitAngle * Math.PI / 180;
  saturn.position.x = Math.cos(radians) * saturnOrbitRadius;
  saturn.position.z = Math.sin(radians) * saturnOrbitRadius;
  saturn.position.y += saturnRotateSpeed;
  saturnText.position.x = saturn.position.x + 10;
  saturnText.position.y = saturn.position.y + 30;
  saturnText.position.z = saturn.position.z;
  saturnText.needsUpdate = true;

  // uranus around the sun
  uranusOrbitAngle -= uranusOrbitSpeed;
  var radians = uranusOrbitAngle * Math.PI / 180;
  uranus.position.x = Math.cos(radians) * uranusOrbitRadius;
  uranus.position.z = Math.sin(radians) * uranusOrbitRadius;
  uranus.position.y += uranusRotateSpeed;
  uranusText.position.x = uranus.position.x + 20;
  uranusText.position.y = uranus.position.y + 3;
  uranusText.position.z = uranus.position.z;
  uranusText.needsUpdate = true;

  // neptune around the sun
  neptuneOrbitAngle -= neptuneOrbitSpeed;
  var radians = neptuneOrbitAngle * Math.PI / 180;
  neptune.position.x = Math.cos(radians) * neptuneOrbitRadius;
  neptune.position.z = Math.sin(radians) * neptuneOrbitRadius;
  neptune.position.y += neptuneRotateSpeed;
  neptuneText.position.x = neptune.position.x + 10;
  neptuneText.position.y = neptune.position.y;
  neptuneText.position.z = neptune.position.z;
  neptuneText.needsUpdate = true;
   


  farEdgeText.position.x =   -20;
  farEdgeText.position.y =   10;
  farEdgeText.position.z =   -50;
  console.log("x "+farEdgeText.position.x+"y "+farEdgeText.position.y+"z"+farEdgeText.position.z);
 

  effect.render(scene, camera);

  if (enterVRButton.isPresenting()) {
    controls.update();
  }

  requestAnimationFrame(animate);
}

window.addEventListener('resize', onResize, false);
document.addEventListener( 'wheel', onDocumentMouseWheel, false );

function onDocumentMouseWheel( event ) {
  camera.fov += event.deltaY * 0.05;
  camera.updateProjectionMatrix();
}

function onResize() {
  effect.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
