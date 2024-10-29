import React, { useState } from "react";

const ChessBoard = () => {
  const board = Array(64).fill(null);

  const [selectedCell, setSelectedCell] = useState(null);

  const handleClick = (row, col) => {
    setSelectedCell({ row, col });
  };
  const isDiogonal = (row, col) => {
    if (!selectedCell) return false;
    if (!isDiogonal) return false;
    const { row: seletedRow, col: seletedCol } = selectedCell;
    return Math.abs(row - seletedRow) === Math.abs(col - seletedCol);
  };  };

  return (
    <div className="grid_container">
      {board.map((_, idx) => {
        const row = Math.floor(idx / 8);
        const col = idx % 8;
        const isBlack = (row + col) % 2 !== 0;
        const isMark = isDiogonal(row, col);
        return (
          <div
            key={idx}
            onClick={() => handleClick(row, col)}
            className={`item ${
              isMark ? "bg-red-800" : isBlack ? "bg-white" : "bg-black"
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default ChessBoard;
