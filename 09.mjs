
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
  if (x > 0) result.push(map.floor[y][x-1]);
  if (x < map.width - 1) result.push(map.floor[y][x+1]);
  if (y > 0) result.push(map.floor[y-1][x]);
  if (y < map.height - 1) result.push(map.floor[y+1][x]);
  return result.reduce((accumulator, depth) => Math.min(accumulator, depth), Infinity);
}

function solvePartOne(input) {
  const map = load(input);
  return map.floor.reduce((mapAccumulator, line, y) => mapAccumulator + line.reduce((lineAccumulator, depth, x) => lineAccumulator + (getAdjacent(map, x, y) <= depth ? 0 : depth + 1), 0), 0);
}

export {
  solvePartOne
};