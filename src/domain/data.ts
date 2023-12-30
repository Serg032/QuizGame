export interface Question {
  catergory: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface Data {
  results: Question[];
}
