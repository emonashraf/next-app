import Link from "next/link";
import React from "react";

function ButtonGradientV2({ name, href, icon }: any) {
  return (
    <Link
      href={href}
      className=" px-5 py-3 flex gap-1  items-center bg-gradient-to-t from-blue-200 to-blue-100 text-base text-white hover:text-white border-blue rounded-md font-semibold hover:bg-gradient-to-t hover:from-blue-100 hover:to-blue-200  transition-all hover:transition-all"
    >
      {icon}
      {name}
    </Link>
  );
}

export default ButtonGradientV2;
