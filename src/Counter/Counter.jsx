import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const plus = () => {
    setCount((prev) => prev + value);
  };

  const minus = () => {
    setCount((prev) => prev - value);
  };

  //   const handleInput= (e) => {
  //     setValue(e.targ)
  //   }

  return (
    <div>
      <p>{count}</p>
      <div>
        <button className="border p-1 text-2xl" onClick={plus}>
          +
        </button>
        <button className="border p-1 text-2xl" onClick={minus}>
          -
        </button>
      </div>

      <input
        type="number"
        className="border p-1 text-2xl"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button className="border p-1 text-2xl">reset</button>
    </div>
  );
};

export default Counter;
