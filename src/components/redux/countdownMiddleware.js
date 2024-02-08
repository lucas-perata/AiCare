import { START_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN, tickCountdown } from './actions';

let countdownInterval = null;
const intervals = new Map();


export const countdownMiddleware = store => next => action => {
  switch (action.type) {
    case START_COUNTDOWN:
    const intervalId = setInterval(() => {
      store.dispatch(tickCountdown({ id: action.payload.id }));
    }, 1000);
    intervals.set(action.payload.id, intervalId); // Store the interval ID in the map
    // console.log('intervalId stored:', action.payload.id, intervalId);
  break;
    case STOP_COUNTDOWN:
    //  console.log('intervalId retrieved:', action.payload.id, action.payload.id);
      if (intervals.has(action.payload.id)) {
        clearInterval(intervals.get(action.payload.id));
        intervals.delete(action.payload.id);
      }
      break;
    case RESET_COUNTDOWN:
      if (intervals.has(action.payload.id)) {
        clearInterval(intervals.get(action.payload.id));
        intervals.delete(action.payload.id);
      }
      break;
    default:
      break;
  }
 return next(action);
};

export default countdownMiddleware;