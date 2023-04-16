"use client";

import React from "react";
import { TbHeart } from "react-icons/tb";
function HeartButton() {
  return (
    <div>
      <TbHeart
        color="#FF4450"
        size={25}
        className=" bg-navy-100 shadow-xl p-1 rounded-[.3rem]"
      />
    </div>
  );
}

export default HeartButton;
