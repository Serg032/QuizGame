import { Question } from "../domain/data";

const submitAnswer = (question: Question) => {
  const answer = document.getElementById("answer") as HTMLInputElement;
  const answer2 = document.getElementById("answer2") as HTMLInputElement;
  const answer3 = document.getElementById("answer3") as HTMLInputElement;
  const answer4 = document.getElementById("answer4") as HTMLInputElement;

  const choicedAnswer = [answer, answer2, answer3, answer4]
    .filter((answer) => answer.checked === true)
    .map((answer) => ({
      value: answer.value,
    }));

  if (choicedAnswer.length < 1 || choicedAnswer.length > 1) {
    alert("ONE CHOICE PLEASE");
    return;
  }

  if (choicedAnswer[0].value === question.correct_answer) {
    console.log(choicedAnswer[0].value, "EXITO");
  }
};

export default submitAnswer;
