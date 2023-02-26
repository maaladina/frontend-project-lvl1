import greet from '../cli.js';
import askAndCheckQuestion from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

const primeGame = () => {
  const name = greet();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    const question = `Question: ${randomNumber}`;
    const rightAnswer = isPrime(randomNumber);
    if (!askAndCheckQuestion(name, question, rightAnswer)) {
      break;
    }
    score += 1;
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default primeGame;
