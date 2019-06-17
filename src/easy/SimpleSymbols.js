const SimpleSymbols = str => {
  let i = 0;

  const arr = str.toLowerCase().split("");

  while (i < arr.length) {
    if (arr[i] >= "a" && arr[i] <= "z") {
      if (i === 0 || i === arr.length) {
        return false;
      }

      if (arr[i - 1] !== "+" || arr[i + 1] !== "+") {
        return false;
      }
    }

    i++;
  }

  return true;
};

// keep this function call here
SimpleSymbols(readline());
