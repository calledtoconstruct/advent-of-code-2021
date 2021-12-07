
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

function calculatePartTwo(navigation, instruction) {
  const [command, distance] = instruction.split(' ');
  const amount = parseInt(distance, 10);

  switch (command) {
    case 'forward':
      navigation.x += amount;
      navigation.y += (navigation.aim * amount);
      break;
    case 'down':
      navigation.aim += amount;
      break;
    case 'up':
      navigation.aim -= amount;
      break;
  }

  return navigation;
}

function solvePartTwo(instructions) {
  const final = instructions
    .reduce(calculatePartTwo, { x: 0, y: 0, aim: 0 });

  return final.x * final.y;
}

export {
  solvePartOne,
  solvePartTwo
};