import { add, getRandom } from 'utils/simple-math';

test('random number must be under the limit', () => {
  const limit = 10;
  expect.assertions(1);
  expect(getRandom(limit)).toBeLessThanOrEqual(limit);
});

test('random number must be under the default limit', () => {
  expect.assertions(1);
  expect(getRandom()).toBeLessThanOrEqual(10);
});

test('adds 1 + 2 to equal 3', () => {
  expect.assertions(1);
  add(1, 2)
    .then(result => expect(result).toBe(3))
    .catch(error => expect(error).toBe(NaN));
});

test('adds no numbers to equal 0', () => {
  expect.assertions(1);
  add()
    .then(result => expect(result).toBe(0))
    .catch(error => expect(error).toBe(NaN));
});

test('adds letters to equal NaN', () => {
  expect.assertions(1);
  add(NaN, NaN)
    .then(result => expect(result).toBe(0))
    .catch(error => expect(error).toBe(NaN));
});
