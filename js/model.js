const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 300 / 200, 0.1, 1000);
camera.position.z = 3; // отдалим камеру по оси Y

const renderer = new THREE.WebGLRenderer({
    alpha: true, 
    antialias: true,
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(300, 200);

renderer.domElement.setAttribute("id", "planet-1");
document.querySelector('#planet1').appendChild(renderer.domElement);

const eLight = new THREE.AmbientLight(0x242424, 5);
scene.add(eLight);

const pLight = new THREE.PointLight(0xFFFFFF, 3);
pLight.position.set(50, 50, 0);
scene.add(pLight);


const helper = new THREE.PointLightHelper(pLight);
scene.add(helper);


let loader = new THREE.GLTFLoader();
let obj = null;
loader.load('../models/alien_planet1/scene.gltf', function(gltf) {
    obj = gltf;
    obj.scene.scale.set(1, 1, 1);

    scene.add(obj.scene)
});

function animate() {
    requestAnimationFrame(animate);

    if (obj) {
        obj.scene.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
}
animate();




const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(45, 300 / 200, 0.1, 1000);
camera2.position.z = 3; // отдалим камеру по оси Y

const renderer2 = new THREE.WebGLRenderer({
    alpha: true, 
    antialias: true,
});
renderer2.setClearColor(0x000000, 0);
renderer2.setSize(300, 200);

renderer2.domElement.setAttribute("id", "planet-2");
document.querySelector('#planet2').appendChild(renderer2.domElement);

const eLight2 = new THREE.AmbientLight(0x242424, 5);
scene2.add(eLight2);

const pLight2 = new THREE.PointLight(0xFFFFFF, 3);
pLight2.position.set(50, 50, 0);
scene2.add(pLight2);


const helper2 = new THREE.PointLightHelper(pLight2);
scene2.add(helper2);


let loader2 = new THREE.GLTFLoader();
let obj2 = null;
loader2.load('../models/Mars1/scene.gltf', function(gltf2) {
    obj2 = gltf2;
    obj2.scene.scale.set(1, 1, 1);

    scene2.add(obj2.scene)
});

function animate2() {
    requestAnimationFrame(animate2);

    if (obj2) {
        obj2.scene.rotation.y += 0.005;
    }

    renderer2.render(scene2, camera2);
}
animate2();




const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(45, 300 / 200, 0.1, 1000);
camera3.position.z = 3; // отдалим камеру по оси Y

const renderer3 = new THREE.WebGLRenderer({
    alpha: true, 
    antialias: true,
});
renderer3.setClearColor(0x000000, 0);
renderer3.setSize(300, 200);

renderer3.domElement.setAttribute("id", "planet-3");
document.querySelector('#planet3').appendChild(renderer3.domElement);

const eLight3 = new THREE.AmbientLight(0x242424, 5);
scene3.add(eLight3);

const pLight3 = new THREE.PointLight(0xFFFFFF, 3);
pLight3.position.set(50, 50, 0);
scene3.add(pLight3);


const helper3 = new THREE.PointLightHelper(pLight3);
scene3.add(helper3);


let loader3 = new THREE.GLTFLoader();
let obj3 = null;
loader3.load('../models/planet_earth_alt-drag_to_change_lighting/scene.gltf', function(gltf3) {
    obj3 = gltf3;
    obj3.scene.scale.set(1, 1, 1);

    scene3.add(obj3.scene)
});

function animate3() {
    requestAnimationFrame(animate3);

    if (obj3) {
        obj3.scene.rotation.y += 0.005;
    }

    renderer3.render(scene3, camera3);
}
animate3();





const scene4 = new THREE.Scene();
const camera4 = new THREE.PerspectiveCamera(45, 300 / 200, 0.1, 1000);
camera4.position.z = 6; // отдалим камеру по оси Y

const renderer4 = new THREE.WebGLRenderer({
    alpha: true, 
    antialias: true,
});
renderer4.setClearColor(0x000000, 0);
renderer4.setSize(300, 200);

renderer4.domElement.setAttribute("id", "planet-4");
document.querySelector('#planet4').appendChild(renderer4.domElement);

const eLight4 = new THREE.AmbientLight(0x242424, 5);
scene4.add(eLight4);

const pLight4 = new THREE.PointLight(0xFFFFFF, 3);
pLight4.position.set(50, 50, 0);
scene4.add(pLight4);


const helper4 = new THREE.PointLightHelper(pLight4);
scene4.add(helper4);


let loader4 = new THREE.GLTFLoader();
let obj4 = null;
loader4.load('../models/04/planet1.gltf', function(gltf4) {
    obj4 = gltf4;
    obj4.scene.scale.set(1, 1, 1);

    scene4.add(obj4.scene)
});

function animate4() {
    requestAnimationFrame(animate4);

    if (obj4) {
        obj4.scene.rotation.y += 0.005;
    }

    renderer4.render(scene4, camera4);
}
animate4();




const scene5 = new THREE.Scene();
const camera5 = new THREE.PerspectiveCamera(45, 300 / 200, 0.1, 1000);
camera5.position.z = 30; // отдалим камеру по оси Y

const renderer5 = new THREE.WebGLRenderer({
    alpha: true, 
    antialias: true,
});
renderer5.setClearColor(0x000000, 0);
renderer5.setSize(300, 200);

renderer5.domElement.setAttribute("id", "planet-5");
document.querySelector('#planet5').appendChild(renderer5.domElement);

const eLight5 = new THREE.AmbientLight(0x242424, 5);
scene5.add(eLight5);

const pLight5 = new THREE.PointLight(0xFFFFFF, 3);
pLight5.position.set(500, 500, 0);
scene5.add(pLight5);


const helper5 = new THREE.PointLightHelper(pLight5);
scene5.add(helper5);


let loader5 = new THREE.GLTFLoader();
let obj5 = null;
loader5.load('../models/neptune/scene.gltf', function(gltf5) {
    obj5 = gltf5;
    obj5.scene.scale.set(1, 1, 1);

    scene5.add(obj5.scene)
});

function animate5() {
    requestAnimationFrame(animate5);

    if (obj5) {
        obj5.scene.rotation.y += 0.005;
    }

    renderer5.render(scene5, camera5);
}
animate5();