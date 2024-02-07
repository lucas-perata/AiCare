import { Button, ButtonGroup } from '@chakra-ui/react'

export function startRestartButtons(timeCare, baseTime, start, runningState){
    if(baseTime !== timeCare && !(runningState)){
      return <Button variant="outline" colorScheme='blue' className='btn-alert' onClick={start}>Restart</Button>
    }
    else if(baseTime === timeCare)
    {
      return <Button colorScheme='blue' className='btn-alert' onClick={start}>Start</Button>
    }
  }


  export function stopResetButtons(runningState, timeCare, baseTime, stop, reset){
    if (baseTime === timeCare) {
     return <ButtonGroup isDisabled> 
      <Button colorScheme='red' onClick={stop}>Stop</Button> 
      <Button colorScheme='red' variant="outline">Reset</Button>
    </ButtonGroup> 
    }
   else if (baseTime !== timeCare && !(runningState)){
      return <ButtonGroup> 
      <Button isDisabled colorScheme='red' onClick={stop}>Stop</Button> 
      <Button colorScheme='red' variant="outline" onClick={reset}>Reset</Button>
      </ButtonGroup>
   } 
   else if (baseTime !== timeCare){
    return <ButtonGroup> 
    <Button colorScheme='red' onClick={stop}>Stop</Button> 
    <Button colorScheme='red' variant="outline" onClick={reset}>Reset</Button>
    </ButtonGroup>
 }      
  }