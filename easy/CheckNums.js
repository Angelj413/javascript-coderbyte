const CheckNums = (num1, num2) => {
  if (num1 === num2) return -1;
  return num2 > num1 ? true : false;
};

// keep this function call here
CheckNums(readline());
