function calculatePartOne([accumulator, previous], current) {
  return [accumulator + (previous < current ? 1 : 0), current];
}

function solvePartOne(lines) {
  return lines
    .map(depth => parseInt(depth, 10))
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

function solvePartTwo(lines) {
  return lines
    .map(depth => parseInt(depth, 10))
    .reduce(calculatePartTwo, [0, Infinity, []])
    .shift();
}

export {
  solvePartOne,
  solvePartTwo
};