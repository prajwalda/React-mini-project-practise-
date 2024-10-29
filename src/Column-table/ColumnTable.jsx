import { useState } from "react";

const ColumnTable = () => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  let array = Array(rows * cols).fill(null);
  return (
    <div>
      <label htmlFor="row">rows</label>
      <input
        type="range"
        min={1}
        max={10}
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />

      <label htmlFor="col">cols</label>
      <input
        type="range"
        min={1}
        max={10}
        value={cols}
        onChange={(e) => setCols(e.target.value)}
      />
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols},1fr)`,
        }}
      >
        {array.map((_, idx) => {
          return <span className="grid-item">{idx + 1}</span>;
        })}
      </div>
    </div>
  );
};

export default ColumnTable;
