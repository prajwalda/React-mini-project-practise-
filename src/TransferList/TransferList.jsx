import React, { useState } from "react";

const TransferList = () => {
  const [left, setLeft] = useState(["JAVA", "CPP", "PYTHON"]);
  const [right, setRight] = useState(["DSA", "OOPS", "DBMS"]);

  const [leftSelected, setLeftSelected] = useState([]);
  const [rightSelected, setSelectedRight] = useState([]);

  const handleCheckLeft = (e, item) => {
    if (e.target.checked) {
      setLeftSelected([...leftSelected, item]);
    } else {
      setLeftSelected(leftSelected.filter((ele) => ele !== item));
    }
  };

  const handleCheckRight = (e, item) => {
    if (e.target.checked) {
      setSelectedRight([...rightSelected, item]);
    } else {
      setSelectedRight(rightSelected.filter((ele) => ele !== item));
    }
  };

  const setSelectedToLeft = () => {
    if (rightSelected.length !== 0) {
      setLeft([...left, ...rightSelected]);
      setSelectedRight([]);
      setRight(right.filter((item) => !rightSelected.includes(item)));
    }
  };

  const setSelectedToRight = () => {
    if (leftSelected.length !== 0) {
      setRight([...right, ...leftSelected]);
      setLeftSelected([]);
      setLeft(left.filter((item) => !leftSelected.includes(item)));
    }
  };

  const moveAllToRight = () => {
    setLeft([...left, ...right]);
    setRight([]);
    setLeftSelected([]);
  };
  const moveAllToLeft = () => {
    setRight([...right, ...left]);
    setLeft([]);
    setSelectedRight([]);
  };

  return (
    <div className="flex">
      <div className="w-[30rem] h-[40rem] border border-gray-400">
        {left.map((item, idx) => {
          return (
            <div className="p-4" key={idx}>
              <input
                type="checkbox"
                name=""
                id=""
                onChange={(e) => handleCheckLeft(e, item)}
                checked={leftSelected.includes(item)}
              />
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="border shadow-lg" onClick={setSelectedToLeft}>
          shift to left
        </button>
        <button className="border shadow-lg" onClick={setSelectedToRight}>
          shift to right
        </button>
        <button className="border shadow-lg" onClick={moveAllToRight}>
          move all to right
        </button>
        <button className="border shadow-lg" onClick={moveAllToLeft}>
          move all to left
        </button>
      </div>
      <div className="w-[30rem] h-[40rem] border border-gray-400">
        {right.map((item, idx) => {
          return (
            <div className="p-4" key={idx}>
              <input
                type="checkbox"
                name=""
                id=""
                onChange={(e) => handleCheckRight(e, item)}
              />
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransferList;
