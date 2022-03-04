import AOS from 'aos'
import { getPage } from './js/get-page'
import { mapQuiz } from './js/map-quiz'
import { hide } from './js/check-risp'
import { resizing } from './js/resize'

// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //

window.onload = () => {
  AOS.init() // Animzioni on scroll realizzate da michalsnik at michalsnik.github.io

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