import { Data, Question } from "../domain/data";

const getQuestions = async (): Promise<Question[]> => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
  );
  const data: Data = await response.json();
  return data.results;
};

export default getQuestions;
