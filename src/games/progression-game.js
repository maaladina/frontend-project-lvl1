import greet from '../cli.js';
import askAndCheckQuestion from '../index.js';

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

const progressionGame = () => {
  const name = greet();
  console.log('What number is missing in the progression?');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const first = Math.round(Math.random() * 100);
    const interval = Math.round(Math.random() * 10);
    const progrLen = Math.round(Math.random() * 5) + 5;
    const randomIndex = Math.round(Math.random() * (progrLen - 1));
    const [progression, rightAnswer] = generateProgression(first, interval, randomIndex, progrLen);
    const question = `Question: ${progression}`;
    if (!askAndCheckQuestion(name, question, rightAnswer)) {
      break;
    }
    score += 1;
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default progressionGame;
