"use client";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { BsClockHistory } from "react-icons/bs";
const Timer: NextPage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHOurs] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const [partyTime, setPartyTime] = useState(false);
    const target = new Date("04/28/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHOurs(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && 0 <= m && 0 <= s) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* {partyTime? (<h1>Happy new Yewr!</h1> : )} */}
      <BsClockHistory color="#645DFF" />
      <div>
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    </div>
  );
};

export default Timer;
