import React, { useMemo, useState } from "react";
import {
  getFibonacciRecursion,
  getFibonacciIteration,
  isFibonacci,
} from "../challenge1";

const Challenge1 = () => {
  const [fibonacciIndexRecursion, setFibonacciIndexRecursion] =
    useState<number>();
  const [fibonacciIndexIteration, setFibonacciIndexIteration] =
    useState<number>();
  const [inputNumber, setInputNumber] = useState<number>();
  const fibonacciNumberRecursion = useMemo(
    () =>
      fibonacciIndexRecursion
        ? getFibonacciRecursion(fibonacciIndexRecursion)
        : "",
    [fibonacciIndexRecursion]
  );
  const fibonacciNumbeIteration = useMemo(
    () =>
      fibonacciIndexIteration
        ? getFibonacciIteration(fibonacciIndexIteration)
        : "",
    [fibonacciIndexIteration]
  );
  const isFibonacciNumber = useMemo(
    () => (typeof inputNumber === "number" ? isFibonacci(inputNumber) : ""),
    [inputNumber]
  );

  return (
    <div>
      <div>
        {"The "}
        <input
          onChange={(e) => setFibonacciIndexRecursion(Number(e.target.value))}
          style={{ width: "15px" }}
        />
        {" number in the fibonacci sequence with recursive function: " +
          fibonacciNumberRecursion}
      </div>
      <div>
        {"The "}
        <input
          onChange={(e) => setFibonacciIndexIteration(Number(e.target.value))}
          style={{ width: "15px" }}
        />
        {" number in the fibonacci sequence with iterative function: " +
          fibonacciNumbeIteration}
      </div>
      <div>
        {"Check if a number is in fabonacci sequence "}
        <input
          onChange={(e) => setInputNumber(Number(e.target.value))}
          style={{ width: "15px" }}
        />
        {": " + isFibonacciNumber}
      </div>
    </div>
  );
};

export default Challenge1;
