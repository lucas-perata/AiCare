import {useEffect, React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCountdown, stopCountdown, resetCountdown, decrementSeconds, tickCountdown } from '../redux/actions';
import {startRestartButtons, stopResetButtons} from '../helpers/CountdownHelpers';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { notifyUser } from '../helpers/NotificationHelper';

const PostureCare = () => {
  const id = "countdown2"; 
  const countdown = useSelector(state => state.countdowns[id]);
  const dispatch = useDispatch();
  const seconds = countdown.seconds;
  const postureTime = countdown.postureTime;
  const isRunning = countdown.isRunning;

  const start = () => dispatch(startCountdown({ id }));
  const stop = () => dispatch(stopCountdown({ id }));
  const reset = () => dispatch(resetCountdown({ id }));

  useEffect(() => {
    let timerId;
  
    const tick = () => {
      console.log('tick function called with id:', id); // add this line
      dispatch(tickCountdown({ id }));
    };
  
    if (seconds === 0) {
      console.log("Hola")
      notifyUser("Take", "Test")
      stop()
    } else if (seconds > 0 && isRunning) {
      timerId = setInterval(() => {
        dispatch(decrementSeconds({id}));
      }, 1000);
    }
  
    return () => clearInterval(timerId);
  }, [seconds, isRunning, id, dispatch]);

  return (
    <section className='bg-gray-200 flex flex-col justify-center' style={{height: "100vh"}}>
      <div>
        <div className="p-2">
          <CircularProgress size={"50vh"} value={seconds/60} max={10} color='blue.600'>
            <CircularProgressLabel>  {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? '0' : ''}{seconds % 60} </CircularProgressLabel>
          </CircularProgress>
        </div>
        <div className="grid gap-2">
          <div className="min-h-10">{stopResetButtons(isRunning, postureTime, seconds, stop, reset)}</div>
          <div className="min-h-10">  {startRestartButtons(postureTime, seconds, start, isRunning)} </div>
        </div>
      </div>
    </section>
  )
}

export default PostureCare;