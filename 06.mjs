
function calculateOffspring(year, age) {
  let offspring = 0;
  if (year >= age) {
    const remaining = year - age;
    const births = Math.floor(remaining / 7);
    for (let child = 0; child <= births; child++) {
      const left = remaining - (child * 7) - 2;
      offspring += calculateOffspring(left, 7);
    }
  }
  return offspring + 1;
}

function solvePartOne(lines) {
  const ages = lines
    .map(line => line.split(',')
      .map(age => parseInt(age, 10))
      .reduce((accumulator, age) => {
        accumulator[age] = (accumulator[age] || 0) + 1;
        return accumulator;
      }, [])
    )
    .pop();
  return ages.reduce((accumulator, count, age) => accumulator + (count * (calculateOffspring(79, age))), 0);
}

export {
  solvePartOne
};