// EyeCareBasic.js
import React, { useState, useEffect } from 'react';

const EyeCareBasic = ({onFinish}) => {
  const electron = window.electron;

  const eyeCareTime = 3;
  const [seconds, setSeconds] = useState(3);
  const [isRunning, setIsRunning] = useState(false);
  const [notificationTriggered, setNotificationTriggered] = useState(false);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    setSeconds(3)
    setIsRunning(false)
  };

  const notifyUser = () => {
    Notification.requestPermission().then(function(result){
      new Notification("Sample", {
        body: "sample",
      })
    })
  }

  useEffect(() => {
    let timerId;

    if (seconds === 0) {
      console.log("Hola")
      notifyUser()
      resetCountdown()
    } else 
    if (seconds > 0 && isRunning)
    {
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [seconds, isRunning]);

  return (
    <section>
      <button onClick={startCountdown}>Start Countdown</button>
      <button onClick={stopCountdown}>Stop Countdown</button>
      <button onClick={resetCountdown}>Reset</button>
      <div>{seconds}</div>
      <div><button onClick={notifyUser}>Notify</button></div>
    </section>
  );
};

export default EyeCareBasic;