import React from "react";
import { TbShare } from "react-icons/tb";
function ShareButton() {
  return (
    <div>
      <TbShare
        size={25}
        color="#22FF60"
        className=" bg-navy-100 shadow-xl p-1 rounded-[.3rem]"
      />
    </div>
  );
}

export default ShareButton;
