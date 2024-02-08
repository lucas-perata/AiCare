import React, { useState, useEffect } from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import "./EyeCareBasic.css"
import { notifyUser } from '../helpers/NotificationHelper';
import { useDispatch, useSelector } from 'react-redux';
import { startCountdown, stopCountdown, resetCountdown, decrementSeconds } from '../redux/actions';
import {startRestartButtons, stopResetButtons} from '../helpers/CountdownHelpers';

const EyeCareBasic = () => {
  const id = "countdown1"; 
  const countdown = useSelector(state => state.countdowns[id]);
  const dispatch = useDispatch(); 
  const seconds = countdown.seconds; 
  const eyeCareTime = countdown.eyeCareTime; 
  const isRunning = countdown.isRunning; 

  const start = () => dispatch(startCountdown({id})); 
  const stop = () => dispatch(stopCountdown({id})); 
  const reset = () => dispatch(resetCountdown({ id }));

  useEffect(() => {
    let timerId;
  
    if (seconds === 0) {
      console.log("Hola")
      notifyUser("Take", "Test")
    } else if (seconds > 0 && isRunning) {
      timerId = setInterval(() => {
        dispatch(decrementSeconds());
      }, 1000);
    }
  
    return () => clearInterval(timerId);
  }, [seconds, isRunning, dispatch, id]);

  
  return (
    <section class='bg-gray-200 flex flex-col justify-center' style={{height: "100vh"}}>
      <div>
        <div class="p-2">
          <CircularProgress size={"50vh"} value={seconds/60} max={20} color='green.400'>
          <CircularProgressLabel>  {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? '0' : ''}{seconds % 60} </CircularProgressLabel>
          </CircularProgress>
        </div>
          <div class="grid gap-2">
              <div class="min-h-10">{stopResetButtons(isRunning, eyeCareTime, seconds, stop, reset)}</div>
              <div class="min-h-10">  {startRestartButtons(eyeCareTime, seconds, start, isRunning)} </div>
          </div>
      </div>
    </section>
  );
};

export default EyeCareBasic;