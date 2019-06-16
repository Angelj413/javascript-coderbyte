const AlphabetSoup = str =>
  str
    .split("")
    .sort()
    .join("");

// keep this function call here
AlphabetSoup(readline());
