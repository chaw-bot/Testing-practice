const stringLength = require('../string');
const reverseString = require('../reverse');
const sum = require('../add');
const subtract = require('../subtract');
const multiply = require('../multiple');
const divide = require('../divide');
const capitalize = require('../capitalize');

describe('check if work', () => {
  test('returns length of string between 1 and 10 inclusive', () => {
    expect(stringLength('abc')).toBe(3);
  });
  test('returns a reverse string', () => {
    expect(reverseString('code')).toBe('edoc');
  });
});

describe('calculator', () => {
  test('return sum of a + b', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('returns the difference of d - c', () => {
    expect(subtract(3, 4)).toBe(1);
  });

  test('returns the product of x * y', () => {
    expect(multiply(5, 6)).toBe(30);
  });

  test('return the quotient of b / a', () => {
    expect(divide(5, 15)).toBe(3);
  });
});

describe('capitalize', () => {
  test('Capitalizes the first character of a string', () => {
    expect(capitalize('chawanzi')).toBe('Chawanzi');
  });
});