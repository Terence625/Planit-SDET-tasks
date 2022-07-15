/**
 * Get the nth number in the fibonacci sequence given n
 * @param n: index in the fibonacci sequence
 * @return: the nth number
 */
export function getFibonacci(n: number): number {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getFibonacci(n - 1) + getFibonacci(n - 2);
}

/**
 * Check if a number is a fibonacci number and get the closet index n in fibonacci sequence
 * @param x: input number
 * @return: string indicate if the number is a fibonacci number and the closet index n in fibonacci sequence
 */
export function isFibonacci(x: number): string {
  let fibonacciArr = [0, 1];
  let fibonacciArrLen = fibonacciArr.length;
  while (x > fibonacciArr[fibonacciArrLen - 1]) {
    fibonacciArr.push(
      fibonacciArr[fibonacciArrLen - 1] + fibonacciArr[fibonacciArrLen - 2]
    );
    fibonacciArrLen = fibonacciArr.length;
  }
  let fibonacciArrLastNum = fibonacciArr[fibonacciArrLen - 1];
  let fibonacciArrASecLastNum = fibonacciArr[fibonacciArrLen - 2];
  if (x === 0) return `${x} is the 1st fibonacci number`;
  else if (x === 1) return `${x} is the 2nd or 3rd fibonacci number`;
  else if (fibonacciArrLastNum === x)
    return `${x} is the ${fibonacciArrLen}th fibonacci number`;
  else if (x - fibonacciArrASecLastNum === fibonacciArrLastNum - x)
    return `${x} is not a fibonacci number, the closest index in the fibonacci sequence is ${
      fibonacciArrLen - 1
    } or ${fibonacciArrLen}`;
  else if (x - fibonacciArrASecLastNum > fibonacciArrLastNum - x)
    return `${x} is not a fibonacci number, the closest index in the fibonacci sequence is ${fibonacciArrLen}`;
  else
    return `${x} is not a fibonacci number, the closest index in the fibonacci sequence is ${
      fibonacciArrLen - 1
    }`;
}
