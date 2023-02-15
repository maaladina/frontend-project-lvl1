import readlineSync from 'readline-sync';

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    let rightAnswer = '';
    const randomNumber = Math.round(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question:${randomNumber} `);
    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else if (randomNumber % 2 !== 0) {
      rightAnswer = 'no';
    }
    if (userAnswer !== rightAnswer) {
      console.log(`Your answer:${userAnswer}.\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      break;
    } else if (userAnswer === rightAnswer) {
      console.log(`Your answer: '${userAnswer}'\nCorrect!`);
      score += 1;
    }
  } if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default isEvenGame;
