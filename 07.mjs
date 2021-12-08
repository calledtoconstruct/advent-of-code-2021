
function calculateCost(positions, target) {
  return positions.reduce((accumulator, position) => accumulator + Math.abs(position - target), 0)
}

function readInput(input) {
  return input
    .pop()
    .split(',')
    .map(position => parseInt(position, 10))
    .sort((left, right) => left - right);
}

function solvePartOne(input) {
  const positions = readInput(input);
  let high = positions.length - 1;
  let right = calculateCost(positions, positions[high]);
  let low = 0;
  let left = calculateCost(positions, positions[low]);
  while (left !== right) {
    if (left < right) {
      high -= Math.ceil((high - low) / 2);
      right = calculateCost(positions, positions[high])
    } else if (left > right) {
      low += Math.ceil((high - low) / 2);
      left = calculateCost(positions, positions[low])
    }
  }
  return left;
}

export {
  solvePartOne
};