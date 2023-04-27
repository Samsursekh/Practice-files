import React, { useEffect, useRef, useState } from "react";

const fixTime = (time) => {
  if (time < 10) {
    return `0` + time;
  }
  return time;
};
const formatTimeToString = (time) => {
  const seconds = time % 60;
  const mins = Math.floor(time / 60) % 60;

  return `00:${fixTime(mins)}:${fixTime(seconds)}`;
};

const TimerComp = () => {
  const [time, setTime] = useState(0);
  const ref = useRef(null);
  // console.log(ref, "REF HOLO");
  const startTimer = () => {
    if (ref.current !== null) return;

    ref.current = setInterval(() => {
     console.log(`date` ,Date.now());
      setTime((time) => time + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h1>{formatTimeToString(time)}</h1>

      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
};

export default TimerComp;
