import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function ButtonDefault({ name, href }: any) {
  return (
    <Link
      href={href}
      className=" px-5 py-3 flex gap-1  items-center bg-transparent text-blue-200 shadow border border-blue rounded-md font-semibold  text-base hover:text-white hover:bg-gradient-to-t  hover:from-blue-100 hover:to-blue-200  transition-all hover:transition-all "
    >
      {name}
      <BsArrowRightShort size="24" />
    </Link>
  );
}

export default ButtonDefault;
