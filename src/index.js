import readlineSync from 'readline-sync';
import greet from './cli.js';

const askAndCheckQuestion = (name, questionAndAnswer) => {
  const [question, rightAnswer] = questionAndAnswer();
  const userAnswer = readlineSync.question(`${question} `);
  if (userAnswer === rightAnswer) {
    console.log(`Your answer: '${userAnswer}'\nCorrect!`);
    return true;
  }
  console.log(`Your answer:${userAnswer}.\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
  return false;
};

const greetAndLoop = (task, questionAndAnswer) => {
  const name = greet();
  console.log(task);
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    if (!askAndCheckQuestion(name, questionAndAnswer)) {
      break;
    }
    score += 1;
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default greetAndLoop;
