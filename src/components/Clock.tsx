import React, { useEffect } from "react";

const Clock: React.FC = () => {
  const clock: Function = (): void => {
    const WEEKS: string[] = ["日", "月", "火", "水", "木", "金", "土"];
  
    const clockDate: HTMLElement | null = document.getElementById("clock-date");
    const clockTime: HTMLElement | null = document.getElementById("clock-time");
  
    const now: Date = new Date();
  
    const month: number = now.getMonth() + 1;
    const day: number = now.getDate();
    const week: string = WEEKS[now.getDay()];
    const hour: number = now.getHours();
    const minute: string = String(now.getMinutes()).padStart(2, '0');
    // const second: string = String(now.getSeconds()).padStart(2, '0');
  
    const clockColon: string = '<span id="clock-colon">:</span>';
    
    if (clockDate) clockDate.textContent = `${month}月${day}日(${week})`;
    if (clockTime) clockTime.innerHTML = `${hour}${clockColon}${minute}`;
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