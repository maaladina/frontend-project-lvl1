import { randomNumber, greetAndLoop } from '../index.js';

const generateProgression = (first, interval, randomIndex, progrLen) => {
  const progression = [];
  for (let i = 0; i < progrLen; i += 1) {
    const element = first + (interval * i);
    progression.push(element);
  }
  const rightAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const newProgression = progression.join(' ');
  return [newProgression, rightAnswer.toString()];
};

const getQuestionAndRightAnswer = () => {
  const first = randomNumber(100);
  const interval = randomNumber(10);
  const progrLen = randomNumber(5, 5);
  const randomIndex = randomNumber(progrLen - 1);
  const [progression, rightAnswer] = generateProgression(first, interval, randomIndex, progrLen);
  const question = `Question: ${progression}`;
  return [question, rightAnswer];
};

const progressionGame = () => {
  const task = 'What number is missing in the progression?';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default progressionGame;
