import React, { useReducer } from "react";

const CounterReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "addValue":
        return { value: state.value + 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    value: 0,
  });

  const addValue = () => {
    dispatch({ type: "addValue" });
  };
  return (
    <div>
      <p>{state.value}</p>
      <button className="p-2 border" onClick={addValue}>
        plus
      </button>
      <button className="p-2 border">minus</button>
    </div>
  );
};

export default CounterReducer;
