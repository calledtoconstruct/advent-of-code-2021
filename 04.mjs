
function readNumbers(line) {
  return line
    .split(',')
    .map(digits => parseInt(digits, 10));
}

function createCell(digits) {
  return {
    value: parseInt(digits, 10),
    hit: false
  }
}

function readBoards(lines, boards) {
  if (lines.length === 0) {
    return boards;
  }
  const _ = lines.shift();
  const board = [];
  for (let row = 0; row < 5; row++) {
    const values = lines
      .shift()
      .trim()
      .split(/\ +/)
      .map(createCell);
    board.push(values);
  }
  boards.push(board);
  return readBoards(lines, boards);
}

function markBoard(board, number) {
  const rows = board.length;
  const columns = board[0].length;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (board[row][column].value === number) {
        board[row][column].hit = true;
      }
    }
  }
}

function wins(rows, columns, peek) {
  for (let row = 0; row < rows; row++) {
    let hit = true;
    for (let column = 0; column < columns; column++) {
      const value = peek(row, column);
      if (!value.hit) {
        hit = false;
        break;
      }
    }
    if (hit) {
      return true;
    }
  }
  return false;
}

function rowHit(board) {
  const rows = board.length;
  const columns = board[0].length;
  return wins(rows, columns, (row, column) => board[row][column]);
}

function columnHit(board) {
  const columns = board.length;
  const rows = board[0].length;
  return wins(rows, columns, (row, column) => board[column][row]);
}

function solvePartOne(lines) {
  const numbers = readNumbers(lines.shift());
  const boards = readBoards(lines, []);
  let winning = false;
  let index = 0;
  let number;
  while (!winning) {
    number = numbers[index++];
    winning = boards.reduce((winner, board) => {
      if (winner) return winner;
      markBoard(board, number);
      return (rowHit(board) || columnHit(board))
        ? board
        : false;
    }, false);
  }
  const score = winning
    .flat()
    .filter(cell => !cell.hit)
    .reduce((accumulator, cell) => accumulator + cell.value, 0);
  return score * number;
}

function solvePartTwo(lines) {
  const numbers = readNumbers(lines.shift());
  const boards = readBoards(lines, []);
  let losing = [];
  let index = 0;
  let number;
  do {
    number = numbers[index++];
    losing = boards.reduce((losers, board) => {
      markBoard(board, number);
      if (!rowHit(board) && !columnHit(board)) {
        losers.push(board);
      }
      return losers;
    }, []);
  } while (losing.length > 1);
  const loser = losing[0];
  while (!rowHit(loser) && !columnHit(loser)) {
    number = numbers[index++];
    markBoard(loser, number);
  }
  const score = loser
    .flat()
    .filter(cell => !cell.hit)
    .reduce((accumulator, cell) => accumulator + cell.value, 0);
  return score * number;
}

export {
  solvePartOne,
  solvePartTwo
};
