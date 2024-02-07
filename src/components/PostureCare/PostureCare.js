import React, { useState, useEffect } from 'react';
import {startRestartButtons, stopResetButtons} from '../helpers/CountdownHelpers';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { notifyUser } from '../helpers/NotificationHelper';


const PostureCare = () => {
    const postureTime = 10*60; 
    const [seconds, setSeconds] = useState(postureTime); 
    const [isRunning, setIsRunning] = useState(false);

    function startCountdown() {
      setIsRunning(true);
    };
  
    function stopCountdown() {
      setIsRunning(false); 
    };
  
    function resetCountdown () {
      setSeconds(postureTime)
      setIsRunning(false)
    };

    useEffect(() => {
      let timerId;
  
      if (seconds === 0) {
        console.log("---> Posture testing")
        notifyUser("Posture", "Test")
        setSeconds(0)
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
      <section class='bg-gray-200 flex flex-col justify-center' style={{height: "100vh"}}>
      <div>
        <div class="p-2">
          <CircularProgress size={"50vh"} value={seconds/60} max={10} color='blue.600'>
          <CircularProgressLabel>  {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? '0' : ''}{seconds % 60} </CircularProgressLabel>
          </CircularProgress>
        </div>
          <div class="grid gap-2">
          <div class="min-h-10">{stopResetButtons(isRunning, postureTime, seconds, stopCountdown, resetCountdown)}</div>
          <div class="min-h-10">  {startRestartButtons(postureTime, seconds, startCountdown, isRunning)} </div>
          </div>
      </div>
    </section>
  )
}

export default PostureCare