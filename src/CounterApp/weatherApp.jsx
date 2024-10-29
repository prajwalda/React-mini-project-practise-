import React, { useEffect, useRef, useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(0);
  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 300);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
  };
  const reset = () => {
    clearInterval(intervalRef.current);
    setCount(0);
    intervalRef.current = 0;
  };

 
  console.log(intervalRef.current)
  return (
    <div>
      <p>Count: {count}</p>
      <button className="border border-gray-400 p-2" onClick={start}>
        start
      </button>
      <button className="border border-gray-400 p-2" onClick={stop}>
        pause
      </button>
      <button className="border border-gray-400 p-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default CounterApp;
