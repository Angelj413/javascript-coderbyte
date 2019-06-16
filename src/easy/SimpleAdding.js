const SimpleAdding = num => {
  if (num === 0) return 0;
  return SimpleAdding(num - 1) + num;
};

// keep this function call here
SimpleAdding(readline());
