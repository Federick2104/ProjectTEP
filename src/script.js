import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls'
// import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js'

import AOS from 'aos'

// const canvas = document.querySelector('.webgl')

AOS.init() // Animzioni on scroll realizzate da michalsnik at michalsnik.github.io

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
