
function matchPairs(line) {
  const update = line.replace('<>', '').replace('()', '').replace('[]', '').replace('{}', '');
  if (update === line) return update;
  return matchPairs(update);
}

function getScore(error) {
  if (error === ')') return 3;
  if (error === ']') return 57;
  if (error === '}') return 1197;
  return 25137;
}

function solvePartOne(lines) {
  const remaining = lines.map(line => matchPairs(line));
  const syntax = remaining.filter(line => line.match(/[\]\}\>\)]/) !== null);
  const errors = syntax.map(line => line.match(/[\]\}\>\)]/)[0]);
  const score = errors.reduce((accumulator, error) => accumulator + getScore(error), 0);
  return score;
}

export {
  solvePartOne
};