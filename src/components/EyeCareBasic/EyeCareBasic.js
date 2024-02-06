import React, { useState, useEffect } from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import "./EyeCareBasic.css"

const EyeCareBasic = ({onFinish}) => {
  const electron = window.electron;

  const eyeCareTime = 20*60;
  const [seconds, setSeconds] = useState(eyeCareTime);
  const [isRunning, setIsRunning] = useState(false);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    setSeconds(eyeCareTime)
    setIsRunning(false)
  };

  const notifyUser = () => {
    Notification.requestPermission().then(function(result){
      new Notification("Take an eye break", {
        body: "Look something in the distance",
      })
    })
  }

  useEffect(() => {
    let timerId;

    if (seconds === 0) {
      console.log("Hola")
      notifyUser()
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

  function startRestartButtons(){
    if(seconds !== eyeCareTime && !isRunning){
      return <Button variant="outline" colorScheme='blue' className='btn-alert' onClick={startCountdown}>Restart</Button>
    }
    else if(seconds === eyeCareTime)
    {
      return <Button colorScheme='blue' className='btn-alert' onClick={startCountdown}>Start</Button>
    }
  }

  function stopResetButtons(){
    if (seconds === eyeCareTime) {
     return <ButtonGroup isDisabled> 
      <Button colorScheme='red' onClick={stopCountdown}>Stop</Button> 
      <Button colorScheme='red' variant="outline" onClick={resetCountdown}>Reset</Button>
    </ButtonGroup> 
    }
   else if (seconds !== eyeCareTime){
      return <ButtonGroup> 
      <Button colorScheme='red' onClick={stopCountdown}>Stop</Button> 
      <Button colorScheme='red' variant="outline" onClick={resetCountdown}>Reset</Button>
      </ButtonGroup>
   }      
  }

  return (
    <section class='bg-gray-200 flex flex-col justify-center' style={{height: "100vh"}}>
      <div>
        <div class="p-2">
          <CircularProgress size={"50vh"} value={seconds/60} max={20} color='green.400'>
          <CircularProgressLabel>  {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? '0' : ''}{seconds % 60} </CircularProgressLabel>
          </CircularProgress>
        </div>
          <div class="grid gap-2">
              <div class="min-h-10">{stopResetButtons()}</div>
              <div class="min-h-10">  {startRestartButtons()} </div>
          </div>
      </div>
    </section>
  );
};

export default EyeCareBasic;