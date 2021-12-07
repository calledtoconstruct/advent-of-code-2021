function calculatePartOne([accumulator, previous], current) {
  return [accumulator + (previous < current ? 1 : 0), current];
}

function solvePartOne(data) {
  return data
    .reduce(calculatePartOne, [0, Infinity])
    .shift();
}

function calculatePartTwo([accumulator, previous, values], current) {
  values.push(current);

  if (values.length < 3) return [0, Infinity, values];

  while (values.length > 3) values.shift();
  const sumOfValues = values.reduce((sum, value) => sum + value, 0);
  return [accumulator + (previous < sumOfValues ? 1 : 0), sumOfValues, values];
}

function solvePartTwo(data) {
  return data
    .reduce(calculatePartTwo, [0, Infinity, []])
    .shift();
}

export {
  solvePartOne,
  solvePartTwo
};