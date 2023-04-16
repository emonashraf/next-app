import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
function ButtonSm({ name, href, icon }: any) {
  return (
    <Link
      href={href}
      className=" px-2 py-2 flex gap-1  items-center bg-gradient-to-t from-blue-200 to-blue-100 text-sm text-white hover:text-white border-blue rounded-md  hover:bg-gradient-to-t hover:from-blue-100 hover:to-blue-200  transition-all hover:transition-all"
    >
      {icon}
      {name}
    </Link>
  );
}

export default ButtonSm;
