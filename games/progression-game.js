import greet from '../src/cli.js';
import askAndCheckQuestion from '../src/index.js';

const generateProgression = (firstElement, interval, randomIndex, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const element = firstElement + (interval * i);
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
    const firstElement = Math.round(Math.random() * 100);
    const interval = Math.round(Math.random() * 10);
    const randomIndex = Math.round(Math.random() * 9);
    const progressionLength = Math.round(Math.random() * 5) + 5;
    const [progression, rightAnswer] = generateProgression(firstElement, interval, randomIndex, progressionLength);
    const question = `Question: ${progression}`;
    if (!askAndCheckQuestion(name, question, rightAnswer)) {
      break;
    }
    score += 1;
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export default progressionGame;
