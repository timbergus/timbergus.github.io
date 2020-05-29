export const getRandom = (limit = 10) => Math.ceil(Math.random() * limit);

export const add = (a = 0, b = 0) => new Promise((resolve, reject) => {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    reject(NaN);
  }  else {
    resolve(a + b);
  }
});
