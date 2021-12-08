
function calculateLinearCost(positions, target) {
  return positions.reduce((accumulator, position) => accumulator + Math.abs(position - target), 0)
}

function calculateIncrement(distance) {
  return distance > 1
    ? distance + calculateIncrement(distance - 1)
    : 1;
}

function calculateIncrementalCost(positions, target) {
  return positions.reduce((accumulator, position) => accumulator + calculateIncrement(Math.abs(position - target)), 0)
}

function readInput(input) {
  return input
    .pop()
    .split(',')
    .map(position => parseInt(position, 10))
    .sort((left, right) => left - right);
}

function binarySearch(positions, calculateCost) {
  const minimum = positions[0];
  const maximum = positions[positions.length - 1];
  let high = maximum;
  let right = calculateCost(positions, high);
  let low = minimum;
  let left = calculateCost(positions, low);
  while (left !== right) {
    if (left < right) {
      high -= Math.ceil((high - low) / 2);
      right = calculateCost(positions, high)
    } else if (left > right) {
      low += Math.ceil((high - low) / 2);
      left = calculateCost(positions, low)
    }
  }
  return left;
}

function solvePartOne(input) {
  const positions = readInput(input);
  return binarySearch(positions, calculateLinearCost);
}

function solvePartTwo(input) {
  const positions = readInput(input);
  return binarySearch(positions, calculateIncrementalCost);
}

export {
  solvePartOne,
  solvePartTwo
};