// reducer.js
import { START_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN, DECREMENT_SECONDS, TICK_COUNTDOWN } from './actions';
const initialState = {
  countdowns: {
    countdown1: { eyeCareTime: 60*20, seconds: 60*20, isRunning: false },
    countdown2: { postureTime: 10*60, seconds: 10*60, isRunning: false },
  }
};

export const countdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COUNTDOWN:
      return {
        ...state,
        countdowns: {
          ...state.countdowns,
          [action.payload.id]: {
            ...state.countdowns[action.payload.id],
            isRunning: true,
            intervalId: null, 
          },
        },
      };
      case 'SET_INTERVAL_ID':
  return {
    ...state,
    countdowns: {
      ...state.countdowns,
      [action.payload.id]: {
        ...state.countdowns[action.payload.id],
        intervalId: action.payload.intervalId,
      },
    },
  };
    case STOP_COUNTDOWN:
      return {
        ...state,
        countdowns: {
          ...state.countdowns,
          [action.payload.id]: {
            ...state.countdowns[action.payload.id],
            seconds: state.countdowns[action.payload.id].seconds,
            isRunning: false,
          },
        },
      };
    case RESET_COUNTDOWN:
      return {
        ...state,
        countdowns: {
          ...state.countdowns,
          [action.payload.id]: {
            ...state.countdowns[action.payload.id],
            seconds: action.payload.id === "countdown1" ? state.countdowns[action.payload.id].eyeCareTime : state.countdowns[action.payload.id].postureTime,
            isRunning: false,
          },
        },
      };
    case DECREMENT_SECONDS:
      case TICK_COUNTDOWN:
  // console.log('TICK_COUNTDOWN action received', action.payload); 
  if (!action.payload || !action.payload.id) {
  //  console.error('TICK_COUNTDOWN action received without id', action);
    return state;
  }
  return {
    ...state,
    countdowns: {
      ...state.countdowns,
      [action.payload.id]: {
        ...state.countdowns[action.payload.id],
        seconds: state.countdowns[action.payload.id].seconds - 1,
      },
    },
  };
    default:
      return state;
  }}

export default countdownReducer;