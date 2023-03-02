import { randomNumber, greetAndLoop } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

const getQuestionAndRightAnswer = () => {
  const randomNumber1 = randomNumber(100);
  const question = `Question: ${randomNumber1}`;
  const rightAnswer = isPrime(randomNumber1);
  return [question, rightAnswer];
};

const primeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default primeGame;
