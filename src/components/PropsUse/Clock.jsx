import React from "react";
import { useState, useEffect } from "react";
function Clock() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <div className="bg-green-300 w-25 text-white p-2">{time}</div>
    </>
  );
}
export default Clock;
