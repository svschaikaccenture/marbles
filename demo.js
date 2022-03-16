const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// cube instantiation
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// marble 
const marbleGeometry = new THREE.SphereGeometry( 15, 32, 16 );
const marbleMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const marble = new THREE.Mesh( marbleGeometry, marbleMaterial );
scene.add( marble );

camera.position.z = 10;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();