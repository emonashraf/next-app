import React from "react";
import { TbStar } from "react-icons/tb";
function StarButton() {
  return (
    <div>
      <TbStar
        size={25}
        color="#FEB62B"
        className=" bg-navy-100 shadow-xl p-1 rounded-[.3rem]"
      />
    </div>
  );
}

export default StarButton;
