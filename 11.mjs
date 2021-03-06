
/*

129  111  23*  010  24-  111  35-
381  111  492  011  4*3  101  5-4

*/

function reset(grid) {
  return Array.from(grid).map(row => Array.from(row).map(column => isNaN(column) ? 0 : column));
}

function increment(compliment, width, height, x, y) {
  if (x < 0 || x >= width) return;
  if (y < 0 || y >= height) return;
  compliment[y][x] += 1;
}

function flash(grid) {
  const compliment = Array.from(grid).map(row => Array.from(row).fill(0));
  const height = compliment.length;
  let flashes = 0;
  grid.forEach((row, y) => row.forEach((column, x) => {
    if (!isNaN(column) && column > 9) {
      grid[y][x] = NaN;
      const width = row.length;
      for (let cy = y - 1; cy <= y + 1; cy++) {
        for (let cx = x - 1; cx <= x + 1; cx++) {
          increment(compliment, width, height, cx, cy);
        }
      }
      flashes++;
    }
  }));
  return [flashes, compliment];
}

function sum(grid, compliment) {
  return Array.from(grid).map((row, y) => Array.from(row).map((column, x) => column + compliment[y][x]));
}

function step(grid) {
  return Array.from(grid).map(row => Array.from(row).fill(1));
}

function solvePartOne(input) {
  let grid = input.map(line => line.split('').map(value => parseInt(value, 10)));
  let totalFlashes = 0;
  let count = 100;
  while (count-- > 0) {
    let compliment = step(grid);
    let complete;
    do {
      grid = sum(grid, compliment);
      let flashes;
      [flashes, compliment] = flash(grid);
      totalFlashes += flashes;
      complete = 0 === flashes;
    } while (!complete);
    grid = reset(grid);
  }
  return totalFlashes;
}

function solvePartTwo(input) {
  let grid = input.map(line => line.split('').map(value => parseInt(value, 10)));
  const height = grid.length;
  const width = grid[0].length;
  const all = (height * width);
  let iteration = 0;
  let numberOfFlashes;
  do {
    numberOfFlashes = 0;
    iteration++;
    let compliment = step(grid);
    let complete;
    do {
      grid = sum(grid, compliment);
      let flashes;
      [flashes, compliment] = flash(grid);
      numberOfFlashes += flashes;
      complete = 0 === flashes;
    } while (!complete);
    grid = reset(grid);
  } while (numberOfFlashes < all);
  return iteration;
}

export {
  solvePartOne,
  solvePartTwo
};
