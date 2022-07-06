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
 * @param n: input number
 * @return: string indicate if the number is a fibonacci number and the closet index n in fibonacci sequence
 */
function isFibonacci(x) {
  let fibonacciNum = 0;
}

console.log(getFibonacci(8));
