import React, { useEffect, useState, useRef } from "react";
import useTicTacToe from "./useTicTacToe";

const TicTacToe = () => {
  const { board, handleClick, getWinner, messages, reset } = useTicTacToe();
  const [xWins, setXwins] = useState(0);
  const [oWins, setOwins] = useState(0);
  const [ties, setTies] = useState(0);
  const gameOverRef = useRef(false);

  useEffect(() => {
    const checkWinner = getWinner(board);
    if (gameOverRef.current) return;
    if (checkWinner === "X") {
      setXwins(xWins + 1);
      gameOverRef.current = true;
    } else if (checkWinner === "O") {
      setOwins(oWins + 1);
      gameOverRef.current = true;
    } else if (!board.includes(null)) {
      setTies(ties + 1);
      gameOverRef.current = true;
    }
  });

  const handleReset = () => {
    reset();
    gameOverRef.current = false;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p>{messages()}</p>
      <button className="shadow-xl p-2" onClick={handleReset}>
        reset
      </button>
      <div className="flex gap-2">
        <div className="flex justify-center flex-col items-center">
          <div>Player X Wins</div>
          <div>{xWins}</div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div>Player O Wins</div>
          <div>{oWins}</div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div>Ties</div>
          <div>{ties}</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border border-gray-400 grid grid-cols-3">
          {board.map((item, idx) => {
            return (
              <div
                key={idx}
                className="border border-gray-400 h-[4rem] w-[4rem] cursor-pointer text-3xl"
                onClick={() => handleClick(idx)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;