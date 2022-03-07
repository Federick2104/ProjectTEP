import * as THREE from 'three'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
export const resizing = () => {
  const w = window.innerWidth - 30
  const h = window.innerHeight - 30

  const scene = new THREE.Scene()
  // scene.add(new THREE.AxesHelper(5))
  scene.background = new THREE.Color(0x000000)
  const canvas1 = document.querySelector('.webgl')

  const light = new THREE.PointLight()
  light.position.set(10, 10, 1)
  scene.add(light)

  // camera
  // const loader = new GLTFLoader()
  // loader.load(
  //   './img/untitled.gltf',
  //   function (gltf) {
  //     scene.add(gltf.scene)
  //   },
  //   (xhr) => {
  //     console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  //   },
  //   (error) => {
  //     console.log(error)
  //   }
  // )

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

  const ambientlight = new THREE.AmbientLight(0xffffff, 0.2)
  scene.add(ambientlight)

  // // luce direzionale
  // const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
  // dirLight.position.set(20, 20, 0) // x, y, z
  // scene.add(dirLight)

  const renderer = new THREE.WebGLRenderer(
    { antialias: true, canvas: canvas1 })

  const geometry = new THREE.BoxGeometry()
  const geometryCono = new THREE.CylinderBufferGeometry(0.7, 0, 1.5, 32)
  const geometrySphere = new THREE.SphereGeometry(0.8, 50, 50)
  const geometryCilinder = new THREE.CylinderBufferGeometry(0.8, 0.8, 0.3, 32)
  // const geometryText = new THREE.TextBufferGeometry('3d Text',{
  //   font, size: 30, height: 30, curveSegments: 20
  // })

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
    new THREE.Mesh(geometrySphere, materiali[1]),
    new THREE.Mesh(geometryCono, materiali[2]),
    new THREE.Mesh(geometryCilinder, materiali[3]),
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
  controls.addEventListener('dragstart', function (e) {
    e.object.material.opacity = 0.33
  })
  controls.addEventListener('dragend', function (e) {
    e.object.material.opacity = 1
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

// ---------------------------------------- ----------------------------------------
// ---------------------------------------- ----------------------------------------
//  Footer con cubi che girano dei creatori (three.js scene)
// ---------------------------------------- ----------------------------------------
// ---------------------------------------- ----------------------------------------

export const footercubes = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // gsap.to(mesh.rotation, {
  //   scrollTrigger: {
  //   trigger: "#trigger",
  //   start: "top top",
  //   end: "bottom top",
  //   scrub: true,
  //   toggleActions: "restart pause resume pause"
  // },
  //   y: Math.PI
  // });
  const w = window.innerWidth - 10
  const h = window.innerHeight
  const scene2 = new THREE.Scene()
  // scene2.add(new THREE.AxesHelper(5))
  scene2.background = new THREE.Color(0x71c5f9)
  const canvas2 = document.querySelector('.cubo-GS')

  const light = new THREE.PointLight()
  light.position.set(10, 10, 10)
  scene2.add(light)

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

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
  dirLight.position.set(10, 20, 0) // x, y, z
  scene2.add(dirLight)

  const renderer2 = new THREE.WebGLRenderer(
    { antialias: true, canvas: canvas2 })

  // const geometry2 = new THREE.BoxGeometry(1.5, 1.5, 1.5)
  const geometryCoin = new THREE.CylinderBufferGeometry(0.8, 0.8, 0.3, 32)

  // mateariali
  const materiali2 = [
    new THREE.MeshLambertMaterial({ color: 0xFCD30A }), // Gherghina
    new THREE.MeshLambertMaterial({ color: 0xFC0A6B }) // Schianchi
  ]

  // figure
  const figure2 = [
    new THREE.Mesh(geometryCoin, materiali2[0]),
    new THREE.Mesh(geometryCoin, materiali2[1])
  ]
  figure2[0].position.x = -5
  figure2[0].position.y = -3
  figure2[1].position.x = 5
  figure2[1].position.y = 2

  figure2.forEach((c) => scene2.add(c))

  const controls = new DragControls(figure2, camera, renderer2.domElement)
  controls.addEventListener('dragstart', function (e) {
    e.object.material.opacity = 0.33
  })
  controls.addEventListener('dragend', function (e) {
    e.object.material.opacity = 1
  })
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      console.log('key pressed')
    }
  })
  controls.enableDamping = true

  // Rendering profile

  renderer2.setSize(w, h)
  renderer2.render(scene2, camera)

  // Animazione della terra che gira
  function animate2 () {
    window.requestAnimationFrame(animate2)

    figure2[0].rotation.x += 0
    figure2[0].rotation.z += 0.01
    figure2[1].rotation.x += 0
    figure2[1].rotation.z += 0.01

    // controls.update()

    render()
  }
  const render = () => {
    renderer2.render(scene2, camera)
  }
  animate2()
}
