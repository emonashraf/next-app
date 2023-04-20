import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
function ButtonGradient({ name, href }: any) {
  return (
    <Link
      href={href}
      className=" px-5 py-3 flex gap-1 items-center primary-gradient text-base text-white hover:text-white border-blue rounded-md font-semibold hover:bg-gradient-to-t  transition-all hover:transition-all"
    >
      {name}
      <BsArrowRightShort size="24" />
    </Link>
  );
}

export default ButtonGradient;
