import { useState, useEffect } from 'react';

import classes from '../breakTimer.module.css';

const alarmAudioSource = '/sounds/233645__zanox__alarm-clock-digital.wav';
const alarm = new Audio(alarmAudioSource);

const Timer = ({ breakMinutes }) => {
  const [intervalId, setIntervalId] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(breakMinutes * 60);

  const [isStopped, setIsStopped] = useState(true);
  const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);

  function decrementRemainingSeconds() {
    setRemainingSeconds((prevSeconds) => prevSeconds - 1);
  }

  function resetTimer() {
    stopAlarm();
    setIsStopped(true);
    clearInterval(intervalId);
    setIntervalId(null);
    setRemainingSeconds(breakMinutes * 60);
  }

  function pauseTimer() {
    stopAlarm();
    setIsStopped(true);
    clearInterval(intervalId);
    setIntervalId(null);
  }

  function startTimer() {
    setIsStopped(false);
    if (!intervalId) {
      setIntervalId(
        setInterval(() => {
          decrementRemainingSeconds();
        }, 1000)
      );
    }
  }

  function addLeadingZero(num) {
    return num > 9 ? num : `0${num}`;
  }

  function playAlarm() {
    alarm.play();
    setIsAlarmPlaying(true);
  }

  function stopAlarm() {
    alarm.pause();
    alarm.currentTime = 0;
    setIsAlarmPlaying(false);
  }

  useEffect(() => {
    if (remainingSeconds === 0) {
      pauseTimer();
      playAlarm();
    }
  }, [remainingSeconds]);

  return (
    <>
      <section className={classes.timer}>
        <h3 className={classes.timerTitle}>
          {breakMinutes} Minute {breakMinutes === 30 ? 'Meal' : 'Break'}
        </h3>

        <h2>
          {addLeadingZero(Math.floor(remainingSeconds / 60))}:
          {addLeadingZero(Math.floor(remainingSeconds % 60))}
        </h2>
      </section>

      <div className="controls">
        {!isStopped || isAlarmPlaying ? (
          <button id="stop-timer" onClick={pauseTimer}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/pause--v1.png" />
          </button>
        ) : (
          <button id="start-timer" onClick={startTimer}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/play--v1.png" />
          </button>
        )}

        <button id="reset-timer" onClick={resetTimer}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/stop.png" />
        </button>
      </div>
    </>
  );
};

export default Timer;
