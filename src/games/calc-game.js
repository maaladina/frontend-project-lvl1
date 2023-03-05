import greetAndLoop from '../index.js';
import randomNumber from '../utils.js';

const getResult = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const getQuestionAndRightAnswer = () => {
  const number1 = randomNumber(100);
  const number2 = randomNumber(100);
  const operators = ['+', '-', '*'];
  const operator = operators[randomNumber(2)];
  const expression = `${number1} ${operator} ${number2}`;
  const result = getResult(number1, number2, operator);
  const rightAnswer = result.toString();
  return [expression, rightAnswer];
};

const calcGame = () => {
  const task = 'What is the result of the expression?';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default calcGame;
