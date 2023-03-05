import greetAndLoop from '../index.js';
import randomNumber from '../utils.js';

const generateProgression = (first, interval, progrLen) => {
  const progression = [];
  for (let i = 0; i < progrLen; i += 1) {
    const element = first + (interval * i);
    progression.push(element);
  }
  return progression;
};

const getQuestionAndRightAnswer = () => {
  const first = randomNumber(100);
  const interval = randomNumber(10);
  const progrLen = randomNumber(5, 5);
  const randomIndex = randomNumber(progrLen - 1);
  const progression = generateProgression(first, interval, progrLen);
  const missingElement = progression[randomIndex];
  const rightAnswer = missingElement.toString();
  progression[randomIndex] = '..';
  const newProgression = progression.join(' ');
  return [newProgression, rightAnswer];
};

const progressionGame = () => {
  const task = 'What number is missing in the progression?';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default progressionGame;
