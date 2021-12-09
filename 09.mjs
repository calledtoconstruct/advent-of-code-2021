
function load(input) {
  const common = (accumulator, line) => {
    accumulator.floor.push(line.split('').map(digit => parseInt(digit, 10)));
    return accumulator;
  };
  let f = (accumulator, line) => {
    accumulator.width = line.length;
    f = common;
    return f(accumulator, line);
  };
  const map = input.reduce(f, {
    floor: []
  });
  map.height = map.floor.length;
  return map;
}

function getAdjacent(map, x, y) {
  const result = [];
  if (x > 0) result.push(map.floor[y][x - 1]);
  if (x < map.width - 1) result.push(map.floor[y][x + 1]);
  if (y > 0) result.push(map.floor[y - 1][x]);
  if (y < map.height - 1) result.push(map.floor[y + 1][x]);
  return result.reduce((accumulator, depth) => Math.min(accumulator, depth), Infinity);
}

function solvePartOne(input) {
  const map = load(input);
  return map.floor.reduce((mapAccumulator, line, y) => mapAccumulator + line.reduce((lineAccumulator, depth, x) => lineAccumulator + (getAdjacent(map, x, y) <= depth ? 0 : depth + 1), 0), 0);
}

function search(map, x, y) {
  let basin = 0;
  const searched = map.searched[y][x];
  const plateau = map.floor[y][x] === 9;
  if (!searched && !plateau) {
    map.searched[y][x] = true;
    if (x > 0) basin += search(map, x - 1, y);
    if (y < map.height - 1) basin += search(map, x, y + 1);
    if (y > 0) basin += search(map, x, y - 1);
    if (x < map.width - 1) basin += search(map, x + 1, y);
    basin++;
  }
  return basin;
}

function solvePartTwo(input) {
  const map = load(input);
  map.searched = map.floor.reduce((accumulator, line) => {
    accumulator.push(Array.of(...line).fill(false))
    return accumulator;
  }, []);
  const basins = [];
  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const basin = search(map, x, y);
      if (basin > 0) {
        basins.push(basin);
      }
    }
  }
  basins.sort((left, right) => right - left);
  return basins[0] * basins[1] * basins[2];
}

export {
  solvePartOne,
  solvePartTwo
};