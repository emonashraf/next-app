import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function ButtonBlue({ name, href }: any) {
  return (
    <Link
      href={href}
      className=" px-5 py-3 flex gap-1  items-center bg-blue text-white shadow border border-blue rounded-md font-semibold  text-base  hover:bg-transparent hover:text-blue transition-lg hover:transition-sm"
    >
      {name}
      <BsArrowRightShort size="24" />
    </Link>
  );
}

export default ButtonBlue;
