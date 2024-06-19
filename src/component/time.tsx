import { useEffect, useState } from "react";

function Time() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, "0");
      const formattedTime = `${period} ${formattedHours}:${formattedMinutes}`;

      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="text" style={{ fontSize: "1.5rem" }}>
      {currentTime}
    </div>
  );
}

export default Time;
