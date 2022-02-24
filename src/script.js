import './style.css'
import * as THREE from 'three'
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

// 2 Cubo
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
  const quiz = document.querySelector('.answ-card')
  const buttons = document.querySelectorAll('.quiz-button')
  buttons.forEach((b, i) => {
    b.addEventListener('click', function () {
      mapQuiz(i)
      hide(quiz)
    })
  })
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
