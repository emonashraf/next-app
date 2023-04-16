"use client";

import React from "react";
import CountUp from "react-countup";

function Counter() {
  return (
    <ul className="flex gap-5 md:gap-6 lg:gap-8 xl:gap-10 font-manrope">
      <li>
        <h5>NFTsArtwrks</h5>
        <h3>
          <CountUp end={2467} suffix="K" />
        </h3>
      </li>
      <li>
        <h5>Live Auction</h5>
        <h3>
          <CountUp end={1104} />
        </h3>
      </li>
      <li>
        <h5>NFTsArtwrks</h5>
        <h3>
          <CountUp end={444} suffix="M" />
        </h3>
      </li>
    </ul>
  );
}

export default Counter;
