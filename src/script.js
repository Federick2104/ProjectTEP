import './style.css'
import * as THREE from 'three'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls'
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'

import AOS from 'aos'

// Variabili globali

const canvas = document.querySelector('.webgl')

// Setup della scena
const scene = new THREE.Scene()

// Setup della camera(punto di vista dell'utente)
const fov = 70
const aspect = window.innerWidth / window.innerHeight
const near = 0.1
const far = 1000

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 2
scene.add(camera)

// Render
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1)
renderer.autoClear = false
renderer.setClearColor(0x000000, 0.0)

// Setup dei controlli dell'orbita
const controls = new OrbitControls(camera, renderer.domElement)

// Geometria della terra default(0.6, 32, 32)
const earthGeometry = new THREE.SphereGeometry(0.6, 50, 50)
// Raggio, Width Segments(low = poligon) e Height Segments(low = poligon)

// Geomteria del secondo pianeta distrutto
const corruptedEarthGeometry = new THREE.SphereGeometry(0.3, 50, 50)

// Materiale della terra o in un'altro caso di un'altro modello 3D
const earthMaterial = new THREE.MeshPhongMaterial({
  // roughness: 1,
  // metalness: 0,
  map: THREE.ImageUtils.TextureLoader('./texture/earthmap1k.jpg'),
  bumpMap: THREE.ImageUtils.TextureLoader('./texture/earthbump.jpg'),
  bumpScale: 0.3
})
// Materiale del secondo pianeta
const corruptedEarthMaterial = new THREE.MeshPhongMaterial({
  // roughness: 1,
  // metalness: 0,
  map: THREE.ImageUtils.loadTexture('./texture/earthmap1k.jpg'),
  bumpMap: THREE.ImageUtils.loadTexture('./texture/earthbump.jpg'),
  bumpScale: 0.3
})
// Griglia della terra
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
earthMesh.position.set(0, 0, 0)
console.log('Coordinate Obj1: ', earthMesh.position.x + ',' + earthMesh.position.y + ',' + earthMesh.position.z)
scene.add(earthMesh)

// girglia del secondo pianeta
const corruptedEarthMesh = new THREE.Mesh(corruptedEarthGeometry, corruptedEarthMaterial)
corruptedEarthMesh.position.set(0, 10, 0)
console.log('Coordinate Obj2: ', corruptedEarthMesh.position.x + ',' + corruptedEarthMesh.position.y + ',' + corruptedEarthMesh.position.z)
scene.add(corruptedEarthMesh)

// Geometria delle Nuvole
const cloudGeometry = new THREE.SphereGeometry(0.65, 32, 32)

// Materiale delle nuvole ('texture/earthCloud.png')

const cloudMetarial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('./texture/earthCloud.png'),
  transparent: true
})

// Griglia nuvole
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial)
scene.add(cloudMesh)

// Geometria della Galassia(sfondo)
const starGeometry = new THREE.SphereGeometry(80, 64, 64)

// Materiale della galassia
const starMaterial = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture('./texture/galaxy.png'),
  side: THREE.BackSide
})

// Griglia galassia
const starMesh = new THREE.Mesh(starGeometry, starMaterial)
scene.add(starMesh)

// Luce dell'ambiente
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientlight)

// Direzione della luce
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(5, 3, 5)
scene.add(pointLight)

// This displays a helper object consisting of a spherical Mesh for visualizing
// a PointLight.
const Helper = new THREE.PointLightHelper(pointLight)
scene.add(Helper)

// Gestione del ridimensionamento
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}, false)

// Mostra le specifiche tecniche(Fps,ms ecc.)
const stats = Stats()
document.body.appendChild(stats.dom)

// Animazione della terra che gira
const animate = () => {
  window.requestAnimationFrame(animate)
  starMesh.rotation.y -= 0.002
  earthMesh.rotation.y -= 0.0035
  cloudMesh.rotation.y -= 0.0115
  controls.update()
  render()
  stats.update()
}

// Renderinig della scena e camera
const render = () => {
  renderer.render(scene, camera)
}

animate()
AOS.init() // Animzioni on scroll realizzate da michalsnik at michalsnik.github.io
