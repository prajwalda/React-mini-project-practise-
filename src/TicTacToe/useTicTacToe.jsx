import React, { useState } from "react";

const initialBoard = Array(9).fill(null);

const useTicTacToe = () => {
  const [isXnext, setIsXnext] = useState(true);
  const [board, setBoard] = useState(initialBoard);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getWinner = (currBoard) => {
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];

      if (
        currBoard[a] &&
        currBoard[b] === currBoard[c] &&
        currBoard[a] === currBoard[c]
      ) {
        return currBoard[a];
      }
    }
    return null;
  };

  const handleClick = (idx) => {
    let checkWinner = getWinner(board);
    if (checkWinner || board[idx]) return;

    const copyArr = [...board];
    copyArr[idx] = isXnext ? "X" : "O";
    setBoard(copyArr);
    setIsXnext(!isXnext);
  };

  const messages = () => {
    let checkWinner = getWinner(board);
    if (checkWinner === "X") {
      return "X";
    } else if (checkWinner === "O") {
      return "O";
    }
    if (!board.includes(null)) {
      return "Tie";
    }
  };

  const reset = () => {
    setBoard(initialBoard);
  };
  return { board, handleClick, getWinner, messages, reset };
};

export default useTicTacToe;