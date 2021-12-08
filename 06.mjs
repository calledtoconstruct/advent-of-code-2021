
function calculateOffspring(cache, remaining) {
  let offspring = 0;
  const births = Math.floor(remaining / 7);
  for (let child = 0; child <= births; child++) {
    const left = remaining - (child * 7) - 9;
    offspring += (left < 0)
      ? 1
      : cache[left] || calculateOffspring(cache, left);
  }
  return cache[remaining] = offspring + 1;
}

function loadAges(lines) {
  return lines
    .map(line => line.split(',')
      .map(age => parseInt(age, 10))
      .reduce((accumulator, age) => {
        accumulator[age] = (accumulator[age] || 0) + 1;
        return accumulator;
      }, [])
    )
    .pop();
}

function years(years, ages) {
  return loadAges(ages)
    .reduce((accumulator, count, age) => accumulator + (count * (calculateOffspring([], years - age - 1))), 0);
}

function solvePartOne(ages) {
  return years(80, ages);
}

function solvePartTwo(ages) {
  return years(256, ages);
}

export {
  solvePartOne,
  solvePartTwo
};