import { add } from './math';

test('adds 1 + 2 to equal 3', async () => {
  expect.assertions(1);
  const data = await add(1, 2);
  expect(data)..toBe(3);
});
