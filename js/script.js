import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PLYLoader } from 'three/addons/loaders/PLYLoader.js';

const container = document.getElementById('container');
container.style.position = 'relative';
let renderer, stats, gui;
let scene, camera, controls, cube;

function initScene () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth * 0.9, window.innerHeight);
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 2;
    controls.maxDistance = 100;
    controls.addEventListener('change', function () { renderer.render(scene, camera); });
    camera.position.z = 5;

    const loader = new PLYLoader();
    for (let i = 2; i <= 19; i++) {
        loader.load(`assets/results/fountain-P11/point-clouds/cloud_${i}_view.ply`, function (geometry) {
            geometry.computeVertexNormals();
            const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });
            const points = new THREE.Points(geometry, material);
            scene.add(points);
        });
    }
}

function initSTATS () {
    stats = new Stats();
    stats.showPanel(0);
    stats.dom.style.position = 'absolute';
    stats.dom.style.top = 0;
    stats.dom.style.left = 0;
    container.appendChild(stats.dom);
}

function initGUI () {
    gui = new GUI({ autoPlace: false });
    // // cube = scene.getObjectByName( "cube" );
    // gui.add(cube.position, 'x', -1, 1);
    // gui.add(cube.position, 'y', -1, 1);
    // gui.add(cube.position, 'z', -1, 1);
    // gui.domElement.style.position = 'absolute';
    // gui.domElement.style.top = '0px';
    // gui.domElement.style.right = '0px';
    container.appendChild(gui.domElement);
}

function animate () {
    requestAnimationFrame(animate);

    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    stats.update();
}

function onWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onWindowResize, false);

initScene();
initSTATS();
initGUI();
animate();