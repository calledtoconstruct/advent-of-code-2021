function calculatePartOne(data) {
  return data
    .reduce(([accumulator, previous], current) => [accumulator + (previous < current ? 1 : 0), current], [0, Infinity])
    .shift();
}

export {
  calculatePartOne
};