const randomNumber = (upperBound, lowerBound = 0) => {
  const random = Math.round(Math.random() * upperBound) + lowerBound;
  return random;
};

export default randomNumber;
