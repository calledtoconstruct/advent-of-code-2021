
function calculatePartOne(registers, bits) {
  bits
    .split('')
    .forEach((bit, index) => {
      registers[index] = (registers[index] || 0) + parseInt(bit, 2);
    });
  return registers;
}

function solvePartOne(data) {
  const final = data.reduce(calculatePartOne, []);

  const { gamma, epsilon } = final.reduce((registers, ones) => {
    registers.gamma *= 2;
    registers.gamma += Math.round(ones / data.length);
    registers.epsilon *= 2;
    registers.epsilon += 1 - Math.round(ones / data.length);
    return registers;
  }, { gamma: 0, epsilon: 0 });

  return gamma * epsilon;
}

function split(data, index) {
  const zeros = [];
  const ones = [];

  data.forEach(entry => {
    if (entry.charAt(index) === '0') {
      zeros.push(entry);
    } else {
      ones.push(entry);
    }
  });

  const most = (zeros.length > ones.length)
    ? zeros
    : ones;

  const least = (zeros.length <= ones.length)
    ? zeros
    : ones;

  return {
    oxygen: most.length > 1 ? split(most, index + 1).oxygen : most[0],
    scrubber: least.length > 1 ? split(least, index + 1).scrubber : least[0]
  };
}

function solvePartTwo(data) {

  const { oxygen, scrubber } = split(data, 0);

  return parseInt(oxygen, 2) * parseInt(scrubber, 2);
}

export {
  solvePartOne,
  solvePartTwo
};