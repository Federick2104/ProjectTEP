import {
  Scene,
  Color,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  HemisphereLight,
  Vector3,
  Clock,
  AnimationMixer
} from 'three'
import OrbitControls from 'three-orbitcontrols'
import GLTFLoader from 'three-gltf-loader'
import '../model/Flamingo.glb'

let container
let camera
let renderer
let scene
let controls

const mixers = []
const clock = new Clock()

export function init () {
  container = document.querySelector('#scene-container')

  // Creating the scene
  scene = new Scene()
  scene.background = new Color('skyblue')

  createCamera()
  createLights()
  loadModels()
  createControls()
  createRenderer()

  renderer.setAnimationLoop(() => {
    update()
    render()
  })
}

function createCamera () {
  const fov = 35
  const aspect = container.clientWidth / container.clientHeight
  const near = 0.1
  const far = 1000
  camera = new PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(-1.5, 1.5, 10)
}

function createLights () {
  const mainLight = new DirectionalLight(0xffffff, 5)
  mainLight.position.set(10, 10, 10)

  const hemisphereLight = new HemisphereLight(0xddeeff, 0x202020, 5)
  scene.add(mainLight, hemisphereLight)
}

function loadModels () {
  const loader = new GLTFLoader()

  const onLoad = (result, position) => {
    const model = result.scene.children[0]
    model.position.copy(position)
    model.scale.set(0.05, 0.05, 0.05)

    const mixer = new AnimationMixer(model)
    mixers.push(mixer)

    const animation = result.animations[0]
    const action = mixer.clipAction(animation)
    action.play()

    scene.add(model)
  }

  const onProgress = progress => {}

  const flamingoPosition = new Vector3(7.5, 0, -10)
  loader.load(
    '../model/Flamingo.glb',
    gltf => onLoad(gltf, flamingoPosition),
    onProgress
  )
}

function createRenderer () {
  renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.gammaFactor = 2.2
  renderer.gammaOutput = true
  renderer.physicallyCorrectLights = true

  container.appendChild(renderer.domElement)
}

function createControls () {
  controls = new OrbitControls(camera, container)
  controls.enableDamping = true
}

function update () {
  const delta = clock.getDelta()
  mixers.forEach(mixer => mixer.update(delta))
}

function render () {
  renderer.render(scene, camera)
}

// init()

function onWindowResize () {
  camera.aspect = container.clientWidth / container.clientHeight

  // Update camera frustum
  camera.updateProjectionMatrix()

  renderer.setSize(container.clientWidth, container.clientHeight)
}
window.addEventListener('resize', onWindowResize, false)
