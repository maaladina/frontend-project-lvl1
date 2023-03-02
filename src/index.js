import readlineSync from 'readline-sync';

export const randomNumber = (upperBound, lowerBound = 0) => {
  const random = Math.round(Math.random() * upperBound) + lowerBound;
  return random;
};

export const greetAndLoop = (task, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = questionAndAnswer();
    const userAnswer = readlineSync.question(`${question} `);
    if (userAnswer === rightAnswer) {
      console.log(`Your answer: '${userAnswer}'\nCorrect!`);
      score += 1;
    } else {
      console.log(`Your answer:${userAnswer}.\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
