const TimeConvert = time => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}:${minutes}`;
};

// keep this function call here
TimeConvert(readline());
