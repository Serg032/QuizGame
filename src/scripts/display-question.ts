import { Question } from "../domain/data";
import shuffleAnswers from "./shuffle-questions-display.js";
const displayQuestion = (
  question: Question,
  questionHeader: HTMLHeadingElement,
  answersDiv: HTMLDivElement
) => {
  questionHeader.textContent = question.question;

  if (question.type === "multiple") {
    const answerList = document.createElement("ul");
    answerList.style.listStyle = "none";
    const wrongChoice = document.createElement("li");
    const wrongChoice2 = document.createElement("li");
    const wrongChoice3 = document.createElement("li");
    const correctChoice = document.createElement("li");

    const divForLi = document.createElement("div");
    const divForLi2 = document.createElement("div");
    const divForLi3 = document.createElement("div");
    const divForLi4 = document.createElement("div");

    const input = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("input");
    const input4 = document.createElement("input");
    input.type = "checkbox";
    input2.type = "checkbox";
    input3.type = "checkbox";
    input4.type = "checkbox";
    input.id = "answer";
    input2.id = "answer2";
    input3.id = "answer3";
    input4.id = "answer4";

    const spanForLi = document.createElement("span");
    const spanForLi2 = document.createElement("span");
    const spanForLi3 = document.createElement("span");
    const spanForLi4 = document.createElement("span");
    spanForLi.textContent = question.incorrect_answers[0];
    spanForLi2.textContent = question.incorrect_answers[1];
    spanForLi3.textContent = question.incorrect_answers[2];
    spanForLi4.textContent = question.correct_answer;

    input.value = spanForLi.textContent;
    input2.value = spanForLi2.textContent;
    input3.value = spanForLi3.textContent;
    input4.value = spanForLi4.textContent;

    divForLi.appendChild(input);
    divForLi.appendChild(spanForLi);
    divForLi2.appendChild(input2);
    divForLi2.appendChild(spanForLi2);
    divForLi3.appendChild(input3);
    divForLi3.appendChild(spanForLi3);
    divForLi4.appendChild(input4);
    divForLi4.appendChild(spanForLi4);

    wrongChoice.appendChild(divForLi);
    wrongChoice2.appendChild(divForLi2);
    wrongChoice3.appendChild(divForLi3);
    correctChoice.appendChild(divForLi4);

    const choices = [wrongChoice, wrongChoice2, wrongChoice3, correctChoice];
    const shuffledAnswers = shuffleAnswers(choices);
    shuffledAnswers.map((answer) => answerList.appendChild(answer));
    answersDiv.appendChild(answerList);
  }
  if (question.type === "boolean") {
  }
};

export default displayQuestion;
