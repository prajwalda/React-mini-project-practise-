import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);

  const copyArr = [...items];

  const [count, setCount] = useState(0);

  const plus = (idx) => {
    let copyArr = [...items];
    copyArr[idx].value += 1;
    setItems(copyArr);
  };

  const minus = (idx) => {
    let copyArr = [...items];
    if (copyArr[idx].value > 0) copyArr[idx].value -= 1;
    setItems(copyArr);
  };

  const deleteHandle = (idx) => {
    let copyArr = [...items];
    copyArr.splice(idx, 1);
    setItems(copyArr);
  };
  const reset = () => {
    // const resetItems = items.map((item) => ({ ...item, value: 0 }));
    setItems(copyArr);
  };

  useEffect(() => {
    const len = items.filter((item) => item.value > 0).length;
    setCount(len);
  }, [items]);

  return (
    <div className="container mx-auto">
      <p>Total Cart Qty - {count}</p>
      <button className="border" onClick={reset}>
        Reset
      </button>

      {items.map((item, idx) => {
        return (
          <div className="flex space-x-2" key={idx}>
            <p>{item.value}</p>
            <button className="border" onClick={() => plus(idx)}>
              Plus
            </button>
            <button className="border" onClick={() => minus(idx)}>
              Minus
            </button>
            <button className="border" onClick={() => deleteHandle(idx)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
