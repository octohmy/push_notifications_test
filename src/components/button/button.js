import React from "react";

function Button() {
  const handleClick = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("You have a new message!");
    } else if (
      "Notification" in window &&
      Notification.permission !== "denied"
    ) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("You have a new message!");
        }
      });
    }
  };

  return <button onClick={handleClick}>Click here for push test!</button>;
}

export default Button;
