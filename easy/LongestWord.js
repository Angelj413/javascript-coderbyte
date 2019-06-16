const LongestWord = sen => {
  const str = sen.replace(/[^\w\s]/gi, "").split(" ");

  let longestWord = str.sort((a, b) => b.length - a.length);

  return longestWord[0];
};

// keep this function call here
LongestWord(readline());
