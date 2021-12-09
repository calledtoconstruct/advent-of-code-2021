
function load(input) {
  return input
    .map(line => line.split(' | '))
    .map(([encoding, display]) => { return { encoding: encoding.split(' '), display: display.split(' ') } });
}

function solvePartOne(input) {
  const times = load(input)
    .map(line => line.display)
    .flat()
    .reduce((accumulator, segment) => accumulator + ([2, 3, 4, 7].includes(segment.length) ? 1 : 0), 0);
  return times;
}

function findOne(encoding) {
  return encoding
    .filter(segment => segment.length === 2)
    .pop().split('').sort().join('');
}

function findSeven(encoding) {
  return encoding
    .filter(segment => segment.length === 3)
    .pop().split('').sort().join('');
}

function findFour(encoding) {
  return encoding
    .filter(segment => segment.length === 4)
    .pop().split('').sort().join('');
}

function findEight(encoding) {
  return encoding
    .filter(segment => segment.length === 7)
    .pop().split('').sort().join('');
}

function calculateTop(encoding) {
  const one = findOne(encoding).split('');
  const seven = findSeven(encoding).split('');
  return seven
    .filter(segment => !one.includes(segment))
    .pop();
}

function calculateTopLeft(encoding) {
  const count = encoding
    .filter(segment => segment.length === 5)
    .reduce((accumulator, segment) => accumulator + segment, '')
    .split('')
    .reduce((accumulator, letter) => {
      accumulator[letter] = (accumulator[letter] || 0) + 1;
      return accumulator
    }, {});
  const bottomLeft = calculateBottomLeft(encoding);
  return Object.keys(count)
    .filter(key => key !== bottomLeft)
    .filter(key => count[key] < 2)
    .pop();
}

function calculateTopRight(encoding) {
  const count = encoding
    .reduce((accumulator, segment) => accumulator + segment, '')
    .split('')
    .reduce((accumulator, letter) => {
      accumulator[letter] = (accumulator[letter] || 0) + 1;
      return accumulator
    }, {});
  const top = calculateTop(encoding);
  return Object.keys(count)
    .filter(key => key !== top)
    .filter(key => count[key] === 8)
    .pop();
}

function calculateMiddle(encoding) {
  const topLeft = calculateTopLeft(encoding);
  const four = findFour(encoding).split('');
  const one = findOne(encoding).split('');
  return four
    .filter(letter => !one.includes(letter) && letter !== topLeft)
    .pop();
}

function calculateBottomLeft(encoding) {
  const count = encoding
    .reduce((accumulator, segment) => accumulator + segment, '')
    .split('')
    .reduce((accumulator, letter) => {
      accumulator[letter] = (accumulator[letter] || 0) + 1;
      return accumulator
    }, {});
  return Object.keys(count)
    .filter(key => count[key] === 4)
    .pop();
}

function calculateBottomRight(encoding) {
  const count = encoding
    .reduce((accumulator, segment) => accumulator + segment, '')
    .split('')
    .reduce((accumulator, letter) => {
      accumulator[letter] = (accumulator[letter] || 0) + 1;
      return accumulator
    }, {});
  return Object.keys(count)
    .filter(key => count[key] === 9)
    .pop();
}

function calculateBottom(encoding) {
  const count = encoding
    .reduce((accumulator, segment) => accumulator + segment, '')
    .split('')
    .reduce((accumulator, letter) => {
      accumulator[letter] = (accumulator[letter] || 0) + 1;
      return accumulator
    }, {});
  const middle = calculateMiddle(encoding);
  return Object.keys(count)
    .filter(key => key !== middle)
    .filter(key => count[key] === 7)
    .pop();
}

function calculateZero(encoding) {
  return (calculateTop(encoding)
    + calculateTopLeft(encoding)
    + calculateTopRight(encoding)
    + calculateBottomLeft(encoding)
    + calculateBottomRight(encoding)
    + calculateBottom(encoding))
    .split('').sort().join('');
}

function calculateTwo(encoding) {
  return (calculateTop(encoding)
    + calculateTopRight(encoding)
    + calculateMiddle(encoding)
    + calculateBottomLeft(encoding)
    + calculateBottom(encoding))
    .split('').sort().join('');
}

function calculateThree(encoding) {
  return (calculateTop(encoding)
    + calculateTopRight(encoding)
    + calculateMiddle(encoding)
    + calculateBottomRight(encoding)
    + calculateBottom(encoding))
    .split('').sort().join('');
}

function calculateFive(encoding) {
  return (calculateTop(encoding)
    + calculateTopLeft(encoding)
    + calculateMiddle(encoding)
    + calculateBottomRight(encoding)
    + calculateBottom(encoding))
    .split('').sort().join('');
}

function calculateSix(encoding) {
  return (calculateTop(encoding)
    + calculateTopLeft(encoding)
    + calculateMiddle(encoding)
    + calculateBottomLeft(encoding)
    + calculateBottomRight(encoding)
    + calculateBottom(encoding))
    .split('').sort().join('');
}

function calculateNine(encoding) {
  return (calculateTop(encoding)
    + calculateTopLeft(encoding)
    + calculateTopRight(encoding)
    + calculateMiddle(encoding)
    + calculateBottomRight(encoding)
    + calculateBottom(encoding))
    .split('').sort().join('');
}

function solvePartTwo(input) {
  return load(input)
    .map(line => {
      const encoding = line.encoding;
      const translator = [
        { input: calculateZero(encoding), output: 0 },
        { input: findOne(encoding), output: 1 },
        { input: calculateTwo(encoding), output: 2 },
        { input: calculateThree(encoding), output: 3 },
        { input: findFour(encoding), output: 4 },
        { input: calculateFive(encoding), output: 5 },
        { input: calculateSix(encoding), output: 6 },
        { input: findSeven(encoding), output: 7 },
        { input: findEight(encoding), output: 8 },
        { input: calculateNine(encoding), output: 9 },
      ];
      return line.display
        .map(digits => digits.split('').sort().join(''))
        .map(digits => translator.filter(translation => translation.input === digits).pop())
        .map(translation => translation.output)
        .reduce((accumulator, digit) => (accumulator * 10) + digit, 0);
    })
  .reduce((accumulator, value) => accumulator + value, 0);
}

export {
  solvePartOne,
  solvePartTwo
};