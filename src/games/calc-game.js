import { randomNumber, greetAndLoop } from '../index.js';

const getQuestionAndRightAnswer = () => {
  const randomNumber1 = randomNumber(100);
  const randomNumber2 = randomNumber(100);
  const operators = ['+', '-', '*'];
  const operator = operators[randomNumber(2)];
  const expression = `${randomNumber1} ${operator} ${randomNumber2}`;

  let value = null;
  switch (operator) {
    case '+':
      value = randomNumber1 + randomNumber2;
      break;
    case '-':
      value = randomNumber1 - randomNumber2;
      break;
    default:
      value = randomNumber1 * randomNumber2;
  }
  const question = `Question: ${expression}`;
  return [question, value.toString()];
};

const calcGame = () => {
  const task = 'What is the result of the expression?';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default calcGame;
