import React, { useEffect, useRef, useState } from "react";
import Timer from "./CountdownTime/BannerSection";

const TimerSimple = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalID] = useState(null);

  const minutesRef = useRef(null);
  const secondsRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setSeconds((prevSec) => {
          if (prevSec === 0) {
            if (minutes === 0) {
              clearInterval(id);
              setIsRunning(false);
              return 0;
            }

            setMinutes((prevMin) => prevMin - 1);
            return 59;
          }
          return prevSec - 1;
        });
      }, 1000);
      setIntervalID(id);
      return () => clearInterval(id);
    }
  }, [minutes, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const pauseHandler = () => {
    setIsRunning(false);
  };

  const resethandler = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setMinutes(0);
    setSeconds(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value, 10);
    if (name === "minutes") {
      if (value.length <= 2) {
        setMinutes(isNaN(value) ? 0 : numValue);
      } else {
        secondsRef.current.focus()
      }
    } else if (name === "seconds") {
      if (value.length <= 2) {
        setSeconds(isNaN(value) ? 0 : numValue);
      }
    }
  };

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="my-2">
        <input
          type="text"
          name="minutes"
          onChange={handleChange}
          value={formattedMinutes}
          ref={minutesRef}
          className="border border-cyan-600 p-2 w-10"
        />
        :
        <input
          type="text"
          name="seconds"
          value={formattedSeconds}
          onChange={handleChange}
          ref={secondsRef}
          className="border border-cyan-600 p-2 w-10"
        />
      </div>
      <div>
        <button className="border border-cyan-600 p-2 " onClick={handleStart}>
          start
        </button>
        <button className="border border-cyan-600 p-2 " onClick={pauseHandler}>
          pause
        </button>
        <button className="border border-cyan-600 p-2 " onClick={resethandler}>
          reset
        </button>
      </div>


    </div>
  );
};

export default TimerSimple;
