import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

export default function Pomodoro() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const int = setInterval(() => {
      console.log(`${Date.now()} - paused: ${paused}`);
      if (!paused) {
        setSeconds(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [paused]);

  function startTimer() {
    setPaused(false);
  }
  function pauseTimer() {
    setPaused(true);
  }
  function resetTimer() {
    setPaused(true);
    setSeconds(25 * 60);
  }

  return (
    <div className="App2">
      <h2>Pomodoro Timer:</h2>
      <h1>{`${Math.floor(seconds / 60)}:${('00' + (seconds % 60)).slice(
        -2
      )}`}</h1>
      <Button variant="contained" onClick={paused ? startTimer : pauseTimer}>
        {paused ? 'Start' : 'Pause'}
      </Button>

      <Button variant="contained" onClick={resetTimer}>
        Reset
      </Button>
    </div>
  );
}
