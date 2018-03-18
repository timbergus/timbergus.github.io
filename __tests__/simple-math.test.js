import { add } from 'utils/simple-math';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds no numbers to equal 0', () => {
  expect(add()).toBe(0);
});
