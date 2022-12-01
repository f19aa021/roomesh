import { useEffect } from "react";

const Clock = () => {
  const clock = () => {
    const WEEKS = ["日", "月", "火", "水", "木", "金", "土"];
  
    const clockDate = document.getElementById("clock-date");
    const clockTime = document.getElementById("clock-time");
  
    const now = new Date();
  
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const week = WEEKS[now.getDay()];
    const hour = now.getHours();
    const minute = String(now.getMinutes()).padStart(2, '0');
    // const second = String(now.getSeconds()).padStart(2, '0');
  
    const clockColon = '<span id="clock-colon">:</span>';
  
    clockDate.textContent = `${month}月${day}日(${week})`;
    clockTime.innerHTML = `${hour}${clockColon}${minute}`;
  };
  useEffect(() => {
    clock();
    setInterval(clock, 1000);
  }, []);
  return (
    <div id="clock" className="fade-in">
      <div id="clock-date"></div>
      <div id="clock-time"></div>
    </div>
  );
}
export default Clock;