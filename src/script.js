import './style.css'
import * as THREE from 'three'
// import stats from '../node_modules/three/examples/jsm/libs/stats.module.js'

import AOS from 'aos'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)
const canvas1 = document.querySelector('.webgl')
// const loader = new THREE.TextureLoader() , map: loader.load('src/texture/earthmap1k.jpg')
// creazione sfera/cubo
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshLambertMaterial({ color: 0x12AAB8 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(-2, 0, 0)
scene.add(mesh)

const geometry2 = new THREE.BoxGeometry(2, 2, 2)
const material2 = new THREE.MeshLambertMaterial({ color: 0x0c9e0f })
const mesh2 = new THREE.Mesh(geometry2, material2)
mesh2.position.set(2, 0, 0)
scene.add(mesh2)

// luce
const ambientlight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientlight)
// luce direzionale
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
dirLight.position.set(10, 20, 0) // x, y, z
scene.add(dirLight)

// camera
const width = 10
const height = width * (window.innerHeight / window.innerWidth)
const camera = new THREE.OrthographicCamera(
  width / -2, // left
  width / 2, // right
  height / 2, // top
  height / -2, // bottom
  1, // near
  100 // far
)

camera.position.set(4, 4, 4)
camera.lookAt(0, 0, 0)

// Rendering profile
const renderer = new THREE.WebGLRenderer(
  { antialias: true, canvas: canvas1 })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

// Mostra le specifiche tecniche(Fps,ms ecc.)
// const stats = Stats()
// document.body.appendChild(stats.dom)

// Animazione della terra che gira
const animate = () => {
  window.requestAnimationFrame(animate)
  mesh2.rotation.x -= 0.0040
  mesh.rotation.y -= 0.0035
  render()
}

// Renderinig della scena e camera
const render = () => {
  renderer.render(scene, camera)
}

animate()
AOS.init()
