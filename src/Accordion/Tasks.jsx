import React, { useState } from "react";

const Tasks = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <div key={item.id} className="flex flex-col my-2">
      <div className="flex justify-between items-center bg-gray-200 w-[50rem] p-2">
        <div>{item.title}</div>
        <button className="border p-2" onClick={() => setActive(!active)}>
          {active ? "-" : "+"}
        </button>
      </div>
      {active && <div className="p-2 bg-gray-100">{item.content}</div>}
    </div>
  );
};

export default Tasks;

