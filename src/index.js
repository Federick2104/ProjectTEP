import AOS, { init } from 'aos'
import { getPage } from './js/get-page'
import { mapQuiz } from './js/map-quiz'
import { hide } from './js/check-risp'
import { resizing, footercubes } from './js/resize'
import { init as initModel } from './js/gltfloader'

// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //

window.onload = () => {
  AOS.init() // Animzioni on scroll realizzate da michalsnik at michalsnik.github.io

  console.log('====PAGE', getPage())
  if (getPage() === 'game') {
    initModel()
    console.log('====dsfdsgdsg')
  }
  if (getPage() === 'home') {
    init()
    resizing()
    footercubes()
    window.onresize = function () {
      resizing()
      footercubes()
    }
    const up = document.querySelector('.up')
    const body = document.querySelector('body')
    up.addEventListener('click', function () { body.scrollIntoView() })
    const quiz = document.querySelector('.answ-card')
    const buttons = document.querySelectorAll('.quiz-button')
    buttons.forEach((b, i) => {
      b.addEventListener('click', function () {
        mapQuiz(i)
        hide(quiz)
        quiz.scrollIntoView()
      })
    })
  }
}
