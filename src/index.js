import readlineSync from 'readline-sync';

const greetAndLoop = (task, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, rightAnswer] = questionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer !== rightAnswer) {
      return console.log(`Your answer:${userAnswer}.\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    }
    console.log(`Your answer: '${userAnswer}'\nCorrect!`);
  }
  return console.log(`Congratulations, ${name}!`);
};

export default greetAndLoop;
