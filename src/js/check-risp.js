import { scope, domandeQuiz } from './domande-quiz'
// Inizio parte Quiz
export const hide = (obj) => {
  obj.classList.toggle('hide')
}
// controllo delle risposte
export const checkRisp = (index) => {
  const quiz = document.querySelector('.answ-card')

  if (scope.sel1 === domandeQuiz[index].c1 && scope.sel2 === domandeQuiz[index].c2) {
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
