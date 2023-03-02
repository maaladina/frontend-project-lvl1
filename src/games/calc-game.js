import { randomNumber, greetAndLoop } from '../index.js';

const getResult = (number1, number2, operator) => {
  let value = null;
  switch (operator) {
    case '+':
      value = number1 + number2;
      break;
    case '-':
      value = number1 - number2;
      break;
    default:
      value = number1 * number2;
  }
  return value;
};

const getQuestionAndRightAnswer = () => {
  const number1 = randomNumber(100);
  const number2 = randomNumber(100);
  const operators = ['+', '-', '*'];
  const operator = operators[randomNumber(2)];
  const expression = `${number1} ${operator} ${number2}`;
  const result = getResult(number1, number2, operator);
  const rightAnswer = result.toString();
  const question = `Question: ${expression}`;
  return [question, rightAnswer];
};

const calcGame = () => {
  const task = 'What is the result of the expression?';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default calcGame;
