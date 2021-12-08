
function drawLine(board, from, to) {
  const changeInX = (to.x - from.x);
  const changeInY = (to.y - from.y);
  const lengthOfLine = Math.floor(Math.sqrt(changeInX * changeInX + changeInY * changeInY));

  for (let index = 0; index <= lengthOfLine; index++) {
    const x = from.x + Math.round((changeInX / lengthOfLine) * index);
    const y = from.y + Math.round((changeInY / lengthOfLine) * index);
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

function createBoard(width, height) {
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
  const width = lines.reduce((accumulator, line) => accumulator = Math.max(accumulator, line.from.x, line.to.x), 0);
  const height = lines.reduce((accumulator, line) => accumulator = Math.max(accumulator, line.from.y, line.to.y), 0);
  const board = createBoard(width + 1, height + 1);
  lines.forEach(({ from, to }) => drawLine(board, from, to));
  return board.flat().filter(count => count > 1).length;
}

export {
  solvePartOne
}