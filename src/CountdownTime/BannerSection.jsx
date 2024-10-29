import React, { useEffect, useState } from "react";

const TimerBuild = () => {
  const [minutesTens, setMinutesTens] = useState(0);
  const [minutesOnes, setMinutesOnes] = useState(0);
  const [secondsTens, setSecondsTens] = useState(0);
  const [secondsOnes, setSecondsOnes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalID] = useState(null);

  useEffect(() => {
    if (isRunning) {
      if (intervalId) {
        clearInterval(intervalId);
      }

      const id = setInterval(() => {
        setSecondsOnes((prevSecOnes) => {
          if (prevSecOnes === 0) {
            if (secondsTens === 0) {
              if (minutesOnes === 0 && minutesTens === 0) {
                clearInterval(id);
                setIsRunning(false);
                return 0;
              }

              if (minutesOnes === 0) {
                setMinutesTens((prevMinTens) => prevMinTens - 1);
                setMinutesOnes(9);
              } else {
                setMinutesOnes((prevMinOnes) => prevMinOnes - 1);
              }

              setSecondsTens(secondsTens === 0 ? 5 : secondsTens - 1);
              return 9;
            }
            setSecondsTens((prevSecTens) => (prevSecTens === 0 ? 5 : prevSecTens - 1));
            return 9;
          }
          return prevSecOnes - 1;
        });
      }, 1000);

      setIntervalID(id);

      return () => clearInterval(id);
    }
  }, [isRunning, minutesTens, minutesOnes, secondsTens, secondsOnes]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const pauseHandler = () => {
    setIsRunning(false);
  };

  const resetHandler = () => {
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
    setMinutesTens(0);
    setMinutesOnes(0);
    setSecondsTens(0);
    setSecondsOnes(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value, 10);

    if (name === "minutesTens") {
      setMinutesTens(isNaN(numValue) ? 0 : Math.min(Math.max(numValue, 0), 9));
    } else if (name === "minutesOnes") {
      setMinutesOnes(isNaN(numValue) ? 0 : Math.min(Math.max(numValue, 0), 9));
    } else if (name === "secondsTens") {
      setSecondsTens(isNaN(numValue) ? 0 : Math.min(Math.max(numValue, 0), 5));
    } else if (name === "secondsOnes") {
      setSecondsOnes(isNaN(numValue) ? 0 : Math.min(Math.max(numValue, 0), 9));
    }
  };

  const formattedMinutes = `${minutesTens}${minutesOnes}`;
  const formattedSeconds = `${secondsTens}${secondsOnes}`;

  return (
    <div className="flex justify-center items-center flex-col p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="my-2 flex">
        <input
          type="number"
          name="minutesTens"
          value={minutesTens}
          onChange={handleChange}
          className="border border-cyan-600 p-2 w-12 text-center"
          min="0"
          max="9"
          maxLength={1}
        />
        <input
          type="number"
          name="minutesOnes"
          value={minutesOnes}
          onChange={handleChange}
          className="border border-cyan-600 p-2 w-12 text-center mx-1"
          min="0"
          max="9"
          maxLength={1}
        />
        :
        <input
          type="number"
          name="secondsTens"
          value={secondsTens}
          onChange={handleChange}
          className="border border-cyan-600 p-2 w-12 text-center mx-1"
          min="0"
          max="5"
          maxLength={1}
        />
        <input
          type="number"
          name="secondsOnes"
          value={secondsOnes}
          onChange={handleChange}
          className="border border-cyan-600 p-2 w-12 text-center"
          min="0"
          max="9"
          maxLength={1}
        />
      </div>
      <div>
        <button
          className="border border-cyan-600 p-2 mx-1"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="border border-cyan-600 p-2 mx-1"
          onClick={pauseHandler}
        >
          Pause
        </button>
        <button
          className="border border-cyan-600 p-2 mx-1"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerBuild;
