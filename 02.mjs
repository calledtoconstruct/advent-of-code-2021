
function calculatePartOne(navigation, instruction) {
  const [command, distance] = instruction.split(' ');
  switch (command) {
    case 'forward':
      navigation.x += parseInt(distance, 10);
      break;
    case 'down':
      navigation.y += parseInt(distance, 10);
      break;
    case 'up':
      navigation.y -= parseInt(distance, 10);
      break;
  }
  return navigation;
}

function solvePartOne(instructions) {
  const final = instructions
    .reduce(calculatePartOne, { x: 0, y: 0 });

  return final.x * final.y;
}

export {
  solvePartOne
};