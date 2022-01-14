
import{questionsArr,ui,answerValidate,questionUser} from './ui.js'


 
const question = document.querySelectorAll(".question");

document.querySelector("#btnStart").addEventListener("click", () => {
    ui.displayQuestionsAndBg(questionsArr[questionUser]);
    ui.gameStart();
})
document.querySelector("#btn-gameOver").addEventListener("click" , () => {
    ui.reset()
    ui.displayQuestionsAndBg(questionsArr[questionUser]);
})
question.forEach(question => {
    question.addEventListener("click", (e) => {
        e.stopPropagation()
        answerValidate(e)
    })
  });



