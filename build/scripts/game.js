import getQuestions from "./get-questions.js";
import displayQuestion from "./display-question.js";
import submitAnswer from "./submit-answer.js";
const formQuestion = document.getElementById("question-form");
const questionHeader = document.getElementById("question");
const answersDiv = document.getElementById("possible-answers");
getQuestions().then((questions) => {
    const q = questions[0];
    displayQuestion(q, questionHeader, answersDiv);
    formQuestion.addEventListener("submit", (event) => {
        event.preventDefault();
        submitAnswer(q);
    });
});
