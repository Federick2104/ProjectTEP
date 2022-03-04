import * as THREE from 'three'
import AOS from 'aos'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { getPage } from './game'

const resizing = () => {
  const w = window.innerWidth - 30
  const h = window.innerHeight - 30

  const scene = new THREE.Scene()
  // scene.add(new THREE.AxesHelper(5))
  scene.background = new THREE.Color(0x000000)
  const canvas1 = document.querySelector('.webgl')

  const light = new THREE.PointLight()
  light.position.set(10, 10, 10)
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
  // while (false) {
  //   if (figure[0].position.x > 0 && figure[0].position.y > 0) {
  //     materiali[0] = new THREE.MeshLambertMaterial({ color: 0x827717 })
  //     materiali[0] = new THREE.MeshLambertMaterial({ color: 0x827717 })
  //   }
  // }
}

AOS.init() // Animzioni on scroll realizzate da michalsnik at michalsnik.github.io

// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //

// Inizio parte Quiz
const hide = (obj) => {
  obj.classList.toggle('hide')
}

//  -----> quiz
// d = domande
// risp = array di risposte
// c = risposta corretta
// desc = descrizione finale
const domandeQuiz = [{
  d1: '111Animzioni on scroll realizzate da michalsnik at michalsnik.github.io??',
  risp1: ['risposta 1', 'risposta 2', 'risposta3', 'risposta 4'],
  c1: 2,
  d2: 'Animzioni on scroll realizzate da michalsnik at michalsnik.github.io??',
  risp2: ['risposta 1', 'risposta 2', 'risposta3', 'risposta 4'],
  c2: 2,
  desc: 'ajskldfhkashdfkasdhfjklh ashdfkjlhaskjdfhalkjshdf a kjdhfk ks akjdhf kjhaljkadklj hll'
}, {
  d1: '222Animzioni on scroll realizzate da michalsnik at michalsnik.github.io??',
  risp1: ['risposta 1', 'risposta 2', 'risposta3', 'risposta 4'],
  c1: 2,

  d2: 'Animzioni on scroll realizzate da michalsnik at michalsnik.github.io??',
  risp2: ['risposta 1', 'risposta 2', 'risposta3', 'risposta 4'],
  c2: 2,
  desc: 'ajskldfhkashdfkasdhfjklh ashdfkjlhaskjdfhalkjshdf a kjdhfk ks akjdhf kjhaljkadklj hll'

}, {
  d1: '333Animzioni on scroll realizzate da michalsnik at michalsnik.github.io??',
  risp1: ['risposta 1', 'risposta 2', 'risposta3', 'risposta 4'],
  c1: 2,

  d2: 'Animzioni on scroll realizzate da michalsnik at michalsnik.github.io??',
  risp2: ['risposta 1', 'risposta 2', 'risposta3', 'risposta 4'],
  c2: 2,
  desc: 'ajskldfhkashdfkasdhfjklh ashdfkjlhaskjdfhalkjshdf a kjdhfk ks akjdhf kjhaljkadklj hll'

}]

window.onload = () => {
  console.log('====PAGE', getPage())
  if (getPage() === 'game') {
    console.log('====dsfdsgdsg')
  }
  if (getPage() === 'home') {
    resizing()
    window.onresize = resizing
    const quiz = document.querySelector('.answ-card')
    const buttons = document.querySelectorAll('.quiz-button')
    // document.querySelector('.parallax-image').style.background = 'background: url(./img/pazzoimg.jpeg) no-repeat center;'
    buttons.forEach((b, i) => {
      b.addEventListener('click', function () {
        mapQuiz(i)
        hide(quiz)
      })
    })
  }
}

// le due risposte selezionate
let sel1 = null
let sel2 = null

// controllo delle risposte
const checkRisp = (index) => {
  const quiz = document.querySelector('.answ-card')

  if (sel1 === domandeQuiz[index].c1 && sel2 === domandeQuiz[index].c2) {
    quiz.innerHTML = `
    <div class="answ-title">Corretto!</div>
    <div class="answ-desc">${domandeQuiz[index].desc}</div>
    <div class="answ-close">Chiudi</div>
    `
  } else {
    quiz.innerHTML = `
    <div class="answ-title">Sbagliato!</div>
    <div class="answ-desc">${domandeQuiz[index].desc}</div>
    <div class="answ-close">Chiudi</div>
    `
  }
  document.querySelector('.answ-close').addEventListener('click', function () {
    hide(quiz)
  })
}
const mapQuiz = (index) => {
  //   console.log('---->index', index)
  const quiz = document.querySelector('.answ-card')

  quiz.innerHTML = ''
  quiz.innerHTML = `
    <div class="answ-d">${domandeQuiz[index].d1}</div>
    <div class="answ-grid">
    <div class="answ-r r1">${domandeQuiz[index].risp1[0]}</div>
    <div class="answ-r r1">${domandeQuiz[index].risp1[1]}</div>
    <div class="answ-r r1">${domandeQuiz[index].risp1[2]}</div>
    <div class="answ-r r1">${domandeQuiz[index].risp1[3]}</div>
    </div>
    <div class="answ-d">${domandeQuiz[index].d2}</div>
    <div class="answ-grid">
    <div class="answ-r r2">${domandeQuiz[index].risp2[0]}</div>
    <div class="answ-r r2">${domandeQuiz[index].risp2[1]}</div>
    <div class="answ-r r2">${domandeQuiz[index].risp2[2]}</div>
    <div class="answ-r r2">${domandeQuiz[index].risp2[3]}</div>
    </div>
    <div class="answ-button">Next</div>
  `
  // evidenziare risposta cliccata e assegnamento selezione
  const r1 = document.querySelectorAll('.r1')
  r1.forEach((b, i) => {
    b.addEventListener('click', function () {
      r1.forEach(b => b.classList.remove('answ-select'))
      b.classList.toggle('answ-select')
      sel1 = i
    })
  })
  const r2 = document.querySelectorAll('.r2')
  r2.forEach((b, i) => {
    b.addEventListener('click', function () {
      r2.forEach(b => b.classList.remove('answ-select'))
      b.classList.toggle('answ-select')
      sel2 = i
    })
  })
  // bottone next
  const quizButton = document.querySelector('.answ-button')
  quizButton.addEventListener('click', function () {
    checkRisp(index)
  })
}
