import React from "react";
import { TbArrowLeft } from "react-icons/tb";

function PrevArrow({ onClick }: any) {
  return (
    <div
      className="absolute right-[70px] top-0 mt-[-77px] sm:mt-[-85px] md:mt-[-93px] lg:mt-[-101px] xl:mt-[-109px]"
      onClick={onClick}
    >
      <div className=" bg-navy-200 transition-lg hover:bg-blue-300 focus:bg-blue-300 hover:transition-sm h-[45px] w-[45px] rounded-full grid place-items-center cursor-pointer">
        <TbArrowLeft size={20} />
      </div>
    </div>
  );
}

export default PrevArrow;
