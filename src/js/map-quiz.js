import { scope, domandeQuiz } from './domande-quiz'
import { checkRisp } from './check-risp'

export const mapQuiz = (index) => {
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
      scope.sel1 = i
    })
  })
  const r2 = document.querySelectorAll('.r2')
  r2.forEach((b, i) => {
    b.addEventListener('click', function () {
      r2.forEach(b => b.classList.remove('answ-select'))
      b.classList.toggle('answ-select')
      scope.sel2 = i
    })
  })
  // bottone next
  const quizButton = document.querySelector('.answ-button')
  quizButton.addEventListener('click', function () {
    checkRisp(index)
  })
}
