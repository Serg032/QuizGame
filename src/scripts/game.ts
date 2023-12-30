import getQuestions from "./get-questions.js";
import displayQuestion from "./display-question.js";
import submitAnswer from "./submit-answer.js";

const formQuestion = document.getElementById(
  "question-form"
) as HTMLFormElement;
const questionHeader = document.getElementById(
  "question"
) as HTMLHeadingElement;
const answersDiv = document.getElementById(
  "possible-answers"
) as HTMLDivElement;

getQuestions().then((questions) => {
  const q = questions[0];
  displayQuestion(q, questionHeader, answersDiv);
  formQuestion.addEventListener("submit", (event) => {
    event.preventDefault();
    submitAnswer(q);
  });
});
