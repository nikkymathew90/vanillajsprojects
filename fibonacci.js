// funtion f(n) which returns the nth fibonacci number using loop

const fib = num => {
  const arr = [1, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr.pop();
};

//too many duplicate computations wuith this approach
const fibRec = num => {
  return num <= 1 ? num : fibRec(num - 1) + fibRec(num - 2);
};

const fibWhile = num => {
  const arr = [0, 1];
  let i = 2;
  while (i < num) {
    arr.push(arr[i - 1] + arr[i - 2]);
    i++;
  }

  return arr;
};

const res = fib(77);
const res1 = fibRec(7);
const res2 = fibWhile(7);
console.log(res1);
//console.log(res2);
