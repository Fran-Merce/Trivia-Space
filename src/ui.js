import { Questions } from "./Questions.js";
import { data } from "./data.js";


const questionContainer = document.querySelectorAll(".question");
const scoreElement = document.querySelector("#score");
let score = 0
let played = false
export let questionUser = getIndex()
export const questionsArr = data.map((data) => {
  const { question, choices, answer, src } = data;
  return new Questions(question, choices, answer,src);
});
const body = document.querySelector("body");
export class UI {
  displayQuestionsAndBg(Questions) {
    questionContainer.forEach((question, index) => {
      question.firstChild.textContent = Questions.choices[index];
      body.style.backgroundImage = `url(${Questions.src})`;
    });
    const answer = document.querySelector("#answer").firstChild;
    answer.textContent = Questions.text;
  }

  displayScore() {
    score ++;   
    scoreElement.textContent = `score: ${score}`;
  }

  gameStart() {
    const startContainer = document.querySelector("#startGame");
    const btnStart = document.querySelector("#btnStart");
    startContainer.classList.add("hidden");
    btnStart.classList.add("hidden");
    
  }
  reset(){
    ui.displayQuestionsAndBg(questionsArr[questionUser]);
    questionUser = getIndex();
    played = false;
    score = -1;
    this.displayScore()
    scoreElement.textContent = `score: ${score}`;
    document.querySelector('#popUpGameOVer').classList.add('hidden');
    document.querySelector('#btn-gameOver').classList.add('hidden');
    document.querySelector('#popUpGameOverCont').classList.add('hidden');
  }
}

export const displayNextQuestion = (questionUser) => {
  ui.displayQuestionsAndBg(questionsArr[questionUser]);
};
export const answerValidate = (e) => {
  const bgElement = e.target;
  if (played === false )   {
    played = true
    if (questionsArr[questionUser].correctAnswer(e.target.textContent) === true) {
      questionUser = getIndex();
      bgElement.classList.add("correct");
      ui.displayScore();
      setTimeout(() => {
        displayNextQuestion(questionUser);
        bgElement.classList.remove("correct");
        played = false
      },1000)
      
    } else {
      bgElement.classList.add("wrong");
      setTimeout(() => {
        document.querySelector('#popUpGameOVer').classList.remove('hidden');
        document.querySelector('#btn-gameOver').classList.remove('hidden');
        document.querySelector('#popUpGameOverCont').classList.remove('hidden');
        bgElement.classList.remove("wrong");
      },500)
    }
  }
};

export function getIndex() {
  return Math.floor(Math.random() * data.length);
}
export const ui = new UI();
