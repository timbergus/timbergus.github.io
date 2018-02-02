import arrWasm from './arr.wasm';
import mathWasm from './math.wasm';

export const getRandom = (limit = 10) => Math.ceil(Math.random() * limit);

export const arr = arr => arrWasm().then(response => {
  return response.instance.exports.arr(arr, arr.length);
});

export const add = (a = 0, b = 0) => mathWasm().then(response => {
  return response.instance.exports.add(a, b);
});
