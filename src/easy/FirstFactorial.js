const FirstFactorial = num => {
  if (num === 0) return 1;
  return FirstFactorial(num - 1) * num;
};

// keep this function call here
FirstFactorial(readline());
