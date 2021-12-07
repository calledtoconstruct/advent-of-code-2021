
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

export {
  solvePartOne
};