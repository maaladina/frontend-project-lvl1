import greetAndLoop from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.round(Math.random() * 2)];
};

const getQuestionAndRightAnswer = () => {
  const randomNumber1 = Math.round(Math.random() * 100);
  const randomNumber2 = Math.round(Math.random() * 100);
  const operator = getRandomOperator();
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
