import readlineSync from 'readline-sync';

const askAndCheckQuestion = (name, question, rightAnswer) => {
  const userAnswer = readlineSync.question(`${question} `);
  if (userAnswer === rightAnswer) {
    console.log(`Your answer: '${userAnswer}'\nCorrect!`);
    return true;
  }
  console.log(`Your answer:${userAnswer}.\n'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
  return false;
};

export default askAndCheckQuestion;
