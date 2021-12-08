
function drawLine(board, from, to) {
  const changeInX = Math.abs(to.x - from.x);
  const changeInY = Math.abs(to.y - from.y);
  const stepX = changeInX !== 0 ? (to.x - from.x) / Math.abs(to.x - from.x) : 0;
  const stepY = changeInY !== 0 ? (to.y - from.y) / Math.abs(to.y - from.y) : 0;
  const lengthOfLine = Math.max(changeInX, changeInY);
  for (let index = 0; index <= lengthOfLine; index++) {
    const x = from.x + (stepX * index);
    const y = from.y + (stepY * index);
    board[y][x] += 1;
  }
}

function createRow(width) {
  const row = [];
  while (width-- > 0) {
    row.push(0);
  }
  return row;
}

function createBoard(lines) {
  let width = lines.reduce((accumulator, line) => Math.max(accumulator, line.from.x, line.to.x), 0) + 1;
  let height = lines.reduce((accumulator, line) => Math.max(accumulator, line.from.y, line.to.y), 0) + 1;
  const board = [];
  while (height-- > 0) {
    const row = createRow(width);
    board.push(row);
  }
  return board;
}

function readInput(input) {
  return input
    .map(line => line.split(' -> '))
    .map(([from, to]) => {
      return [from.split(','), to.split(',')]
    })
    .map(([[fx, fy], [tx, ty]]) => {
      return {
        from: { x: parseInt(fx, 10), y: parseInt(fy, 10) },
        to: { x: parseInt(tx, 10), y: parseInt(ty, 10) }
      }
    });
}

function solvePartOne(input) {
  const lines = readInput(input)
    .filter(({ from, to }) => from.x === to.x || from.y === to.y);
  const board = createBoard(lines);
  lines.forEach(({ from, to }) => drawLine(board, from, to));
  return board.flat().filter(count => count > 1).length;
}

function solvePartTwo(input) {
  const lines = readInput(input);
  const board = createBoard(lines);
  lines.forEach(({ from, to }) => drawLine(board, from, to));
  return board.flat().filter(count => count > 1).length;
}

export {
  solvePartOne,
  solvePartTwo
}