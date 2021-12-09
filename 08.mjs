
function readSegments(input) {
  return input
    .map(line => line.split(' | ')[1])
    .map(output => output.split(' '));
}

function solvePartOne(input) {
  const segments = readSegments(input);
  const times = segments
    .flat()
    .reduce((accumulator, segment) => accumulator + ([2, 3, 4, 7].includes(segment.length) ? 1 : 0), 0);
  return times;
}

export {
  solvePartOne
};