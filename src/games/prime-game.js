import { randomNumber, greetAndLoop } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const getQuestionAndRightAnswer = () => {
  const number = randomNumber(100);
  const question = `Question: ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const primeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default primeGame;
