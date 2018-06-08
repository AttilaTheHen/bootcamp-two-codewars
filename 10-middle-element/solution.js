var gimme = function (inputArray) {
  let sorted = inputArray.slice().sort((a, b) => {
    return a - b;
  });
  let middle = sorted[1];
  return inputArray.indexOf(middle);
};