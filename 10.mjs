
function matchPairs(line) {
  const update = line.replace('<>', '').replace('()', '').replace('[]', '').replace('{}', '');
  if (update === line) return update;
  return matchPairs(update);
}

function getErrorScore(error) {
  if (error === ')') return 3;
  if (error === ']') return 57;
  if (error === '}') return 1197;
  return 25137;
}

function solvePartOne(lines) {
  const remaining = lines.map(line => matchPairs(line));
  const syntax = remaining.filter(line => line.match(/[\]\}\>\)]/) !== null);
  const errors = syntax.map(line => line.match(/[\]\}\>\)]/)[0]);
  const score = errors.reduce((accumulator, error) => accumulator + getErrorScore(error), 0);
  return score;
}

function getCompletionScore(unmatched) {
  if (unmatched === '(') return 1;
  if (unmatched === '[') return 2;
  if (unmatched === '{') return 3;
  return 4;
}

function solvePartTwo(lines) {
  const remaining = lines.map(line => matchPairs(line));
  const incomplete = remaining.filter(line => line.match(/[\]\}\>\)]/) === null);
  const unmatched = incomplete.map(line => line.split('').reverse());
  const scores = unmatched.map(symbols => symbols.reduce((accumulator, error) => (accumulator * 5) + getCompletionScore(error), 0));
  scores.sort((left, right) => right - left);
  return scores[Math.floor(scores.length / 2)];
}

export {
  solvePartOne,
  solvePartTwo
};