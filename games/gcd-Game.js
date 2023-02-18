import greet from '../src/cli.js';
import askAndCheckQuestion from '../src/index.js';

const getGreatestCommonDivisor = (number1, number2) => {
  let divider = 0;
  let gcd = 0;
  if (number1 > number2) {
    divider = number2;
  } else if (number1 < number2) {
    divider = number1;
  }
  for (let i = divider; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const gcdGame = () => {
  const name = greet();
  console.log('Find the greatest common divisor of given numbers.');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    const rightAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2).toString();
    const question = `Question: ${randomNumber1} ${randomNumber2}`;
    if (!askAndCheckQuestion(name, question, rightAnswer)) {
      break;
    }
    score += 1;
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export default gcdGame;
