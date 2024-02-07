export function notifyUser(main, body){
    Notification.requestPermission().then(function(result){
      new Notification(main, {
        body: body,
      })
    })
  }