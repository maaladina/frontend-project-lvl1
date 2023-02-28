import greetAndLoop from '../index.js';

const getQuestionAndRightAnswer = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const question = `Question: ${randomNumber}`;
  let rightAnswer = '';
  if (randomNumber % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [question, rightAnswer];
};

const isEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default isEvenGame;
