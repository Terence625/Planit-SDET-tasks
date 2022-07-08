/**
 * Get the nth number in the fibonacci sequence given n
 * @param n: index in the fibonacci sequence
 * @return: the nth number
 */
function getFibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getFibonacci(n - 1) + getFibonacci(n - 2);
}

/**
 * Check if a number is a fibonacci number and get the closet index n in fibonacci sequence
 * @param x: input number
 * @return: string indicate if the number is a fibonacci number and the closet index n in fibonacci sequence
 */
function isFibonacci(x) {
  let fibonacciArr = [0, 1];
  while (x > fibonacciArr.at(-1)) {
    fibonacciArr.push(fibonacciArr.at(-1) + fibonacciArr.at(-2));
  }
  let fibonacciArrLastNum = fibonacciArr.at(-1);
  let fibonacciArrASecLastNum = fibonacciArr.at(-2);
  if (x === 0) return `${x} is the 1st fibonacci number`;
  else if (x === 1) return `${x} is the 2nd or 3rd fibonacci number`;
  else if (fibonacciArrLastNum === x)
    return `${x} is the ${fibonacciArr.length}th fibonacci number`;
  else if (x - fibonacciArrASecLastNum === fibonacciArrLastNum - x)
    return `${x} is not a fibonacci number, the closest index in the fibonacci sequence is ${
      fibonacciArr.length - 1
    } or ${fibonacciArr.length}`;
  else if (x - fibonacciArrASecLastNum > fibonacciArrLastNum - x)
    return `${x} is not a fibonacci number, the closest index in the fibonacci sequence is ${fibonacciArr.length}`;
  else
    return `${x} is not a fibonacci number, the closest index in the fibonacci sequence is ${
      fibonacciArr.length - 1
    }`;
}
console.log(getFibonacci(8));
console.log(isFibonacci(2585));
