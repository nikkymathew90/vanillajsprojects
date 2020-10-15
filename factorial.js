const factorial = n => {
  let prod = n;
  for (let i = n; i > 1; i--) {
    prod = prod * (i - 1);
  }
  return prod;
};

const fact = n => {
  return n <= 1 ? n : n * fact(n - 1);
};

console.log(factorial(4));
console.log(fact(4));
