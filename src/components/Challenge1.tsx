import React, { useMemo, useState } from "react";
import { getFibonacci, isFibonacci } from "../challenge1";

const Challenge1 = () => {
  const [fibonacciIndex, setFibonacciIndex] = useState<number>();
  const [inputNumber, setInputNumber] = useState<number>();
  const fibonacciNumber = useMemo(
    () => (fibonacciIndex ? getFibonacci(fibonacciIndex) : ""),
    [fibonacciIndex]
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
          onChange={(e) => setFibonacciIndex(Number(e.target.value))}
          style={{ width: "15px" }}
        />
        {" number in the fibonacci sequence: " + fibonacciNumber}
      </div>
      <div>
        <input
          onChange={(e) => setInputNumber(Number(e.target.value))}
          style={{ width: "15px" }}
        />
        {" " + isFibonacciNumber}
      </div>
    </div>
  );
};

export default Challenge1;
