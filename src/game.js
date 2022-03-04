import './style.css'
import * as THREE from 'three'
import { DragControls } from 'three/examples/jsm/controls/DragControls'

// import GLTFLoader from 'three-gltf-loader'

const resizing = () => {
  console.log('resizeeeeeeeee')
  const w = window.innerWidth - 30
  const h = window.innerHeight - 30

  const scene = new THREE.Scene()
  // scene.add(new THREE.AxesHelper(5))
  scene.background = new THREE.Color(0x000000)
  const canvas1 = document.querySelector('.game')

  const light = new THREE.PointLight()
  light.position.set(10, 10, 10)
  scene.add(light)

  // camera

  const width = 10
  const height = width * (h / w)
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

  // luce

  // const ambientlight = new THREE.AmbientLight(0xffffff, 0.6)
  // scene.add(ambientlight)

  // // luce direzionale
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
  dirLight.position.set(10, 20, 0) // x, y, z
  scene.add(dirLight)

  const renderer = new THREE.WebGLRenderer(
    { antialias: true, canvas: canvas1 })

  const geometry = new THREE.BoxGeometry()

  // const geometrySphere = new THREE.SphereGeometry()

  // mateariali
  const materiali = [
    new THREE.MeshLambertMaterial({ color: 0x12AAB8 }), // Blu
    new THREE.MeshLambertMaterial({ color: 0xfccb00 }), // Giallo
    new THREE.MeshLambertMaterial({ color: 0xFF6900 }), // Arancione
    new THREE.MeshLambertMaterial({ color: 0x008b02 }), // Verde
    new THREE.MeshLambertMaterial({ color: 0x5300eb }) // Viola
  ]

  // figure
  const figure = [
    new THREE.Mesh(geometry, materiali[0]),
    new THREE.Mesh(geometry, materiali[1]),
    new THREE.Mesh(geometry, materiali[2]),
    new THREE.Mesh(geometry, materiali[3]),
    new THREE.Mesh(geometry, materiali[4])
  ]
  figure[0].position.x = -0.5
  figure[0].position.y = -2
  figure[1].position.x = 1.4
  figure[1].position.y = 0.8
  figure[2].position.x = 0
  figure[2].position.y = 2
  figure[3].position.x = 4
  figure[3].position.y = 4
  figure[4].position.x = 4
  figure[4].position.y = 1
  figure.forEach((c) => scene.add(c))

  const controls = new DragControls(figure, camera, renderer.domElement)
  controls.addEventListener('dragstart', function (event) {
    event.object.material.opacity = 0.33
  })
  controls.addEventListener('dragend', function (event) {
    event.object.material.opacity = 1
  })
  controls.enableDamping = true

  // Rendering profile

  renderer.setSize(w, h)
  renderer.render(scene, camera)

  // Animazione della terra che gira
  function animate () {
    window.requestAnimationFrame(animate)

    figure[0].rotation.x += 0.01
    figure[0].rotation.y += 0.011
    figure[1].rotation.x += 0.012
    figure[1].rotation.y += 0.013
    figure[2].rotation.x += 0.014
    figure[2].rotation.y += 0.015
    figure[3].rotation.x += 0.014
    figure[3].rotation.y += 0.015
    figure[4].rotation.x += 0.014
    figure[4].rotation.y += 0.015
    // controls.update()

    render()
  }

  // Renderinig della scena e camera
  const render = () => {
    renderer.render(scene, camera)
  }

  animate()
}
resizing()
