"use client";
import { useState, useEffect } from "react";
import { BsClockHistory } from "react-icons/bs";
// type Props = {
//   targetDate: string;
//   V2: string;
// };

const Timer = ({ targetDate, V2 }: any) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const timeDiff = target - now;

      if (timeDiff <= 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      <div className=" flex items-center gap-2">
        <BsClockHistory color="#645DFF" />
        <h6>
          <span className=" font-semibold">{timeLeft.days}</span>d{" "}
        </h6>
        <span className=" text-[#EAEAEA]">|</span>
        <h6>
          <span className=" font-semibold"> {timeLeft.hours}</span>h
        </h6>
        <span className=" text-[#EAEAEA]">|</span>
        <h6>
          <span className=" font-semibold">{timeLeft.minutes}</span>m
        </h6>
        <span className=" text-[#EAEAEA]">|</span>
        <h6>
          <span className=" font-semibold">{timeLeft.seconds}</span>s
        </h6>
      </div>
      {V2 && (
        <h6>
          {timeLeft.days} D | {timeLeft.hours} H | {timeLeft.minutes} M |
          {timeLeft.seconds} S
        </h6>
      )}
    </div>
  );
};

export default Timer;
