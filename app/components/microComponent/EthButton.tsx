"use client";

import React from "react";
import { TbCurrencyEthereum } from "react-icons/tb";
function EthButton() {
  return (
    <div>
      <TbCurrencyEthereum
        size={15}
        className=" bg-navy-100 text-white p-[3px] rounded-full"
      />
    </div>
  );
}

export default EthButton;
