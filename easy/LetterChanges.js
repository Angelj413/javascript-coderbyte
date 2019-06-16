const LetterChanges = str => {
  const converted = str.replace(/[a-z]/gi, char => {
    return char === "z" || char === "Z"
      ? "a"
      : String.fromCharCode(char.charCodeAt() + 1);
  });

  const capitalized = converted.replace(/a|e|i|o|u/gi, vowel =>
    vowel.toUpperCase()
  );

  return capitalized;
};

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());
