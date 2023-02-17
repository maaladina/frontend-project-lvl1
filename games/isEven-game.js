import greet from '../src/cli.js';
import askAndCheckQuestion from '../src/index.js';

const getRightAnswer = (randomNumber) => {
  if (randomNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isEvenGame = () => {
  const name = greet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    const question = `Question: ${randomNumber}`;
    const rightAnswer = getRightAnswer(randomNumber);
    if (!askAndCheckQuestion(name, question, rightAnswer)) {
      break;
    }
    score += 1;
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export default isEvenGame;
