import greetAndLoop from '../index.js';
import randomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getQuestionAndRightAnswer = () => {
  const number = randomNumber(100);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const isEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default isEvenGame;
