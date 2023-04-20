import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
function ButtonTransparent({ name, href, className }: any) {
  return (
    <div>
      <Link
        href={href}
        className=" px-5 py-3 flex gap-1  items-center bg-navy-200 text-base text-white shadow  border-blue rounded-md font-semibold hover:bg-gradient-to-t hover:from-blue-100 hover:text-white hover:to-blue-200  transition-all hover:transition-all "
      >
        {name}
        <BsArrowRightShort size="24" />
      </Link>
    </div>
  );
}

export default ButtonTransparent;
