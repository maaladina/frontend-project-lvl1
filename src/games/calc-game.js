import askAndCheckQuestion from '../index.js';
import greet from '../cli.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.round(Math.random() * 2)];
};

const generateExpression = () => {
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
  return [expression, value.toString()];
};

const calcGame = () => {
  const name = greet();
  console.log('What is the result of the expression?');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const [expression, rightAnswer] = generateExpression();
    const question = `Question: ${expression}`;
    if (!askAndCheckQuestion(name, question, rightAnswer)) {
      break;
    }
    score += 1;
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default calcGame;
