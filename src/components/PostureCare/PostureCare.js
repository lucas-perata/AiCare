import React, {useState, useEffect} from 'react'

const PostureCare = () => {
    const electron = window.electron;
    const postureTime = 0; 
    const [seconds, setSeconds] = useState(postureTime);
    const [isRunning, setIsRunning] = useState(false);

    const notifyUser = () => {
        Notification.requestPermission().then(function(result){
          new Notification("Check your posture", {
            body: "",
          })
        })
      }
    
    
  
    return (<>Posture</> )
}

export default PostureCare