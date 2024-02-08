export const START_COUNTDOWN = 'START_COUNTDOWN';
export const STOP_COUNTDOWN = 'STOP_COUNTDOWN';
export const RESET_COUNTDOWN = 'RESET_COUNTDOWN';
export const DECREMENT_SECONDS = 'DECREMENT_SECONDS';
export const TICK_COUNTDOWN = "TICK_COUNTDOWN"; 

export const startCountdown = (payload) => ({
    type: START_COUNTDOWN,
    payload,
  });

  export const stopCountdown = (payload) => ({
    type: STOP_COUNTDOWN,
    payload
  }); 
 
  export const resetCountdown = (payload) => ({
    type: RESET_COUNTDOWN,
    payload,
  });
  
  export const decrementSeconds = (payload) => ({
    type: DECREMENT_SECONDS,
    payload,
  });
  
  export const tickCountdown = (payload) => {
    // console.trace('tickCountdown action dispatched with payload:', payload); 
    return {
      type: TICK_COUNTDOWN,
      payload,
    };
  };
