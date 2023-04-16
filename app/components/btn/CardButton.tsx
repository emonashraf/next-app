import Link from "next/link";
import React from "react";

function CardButton({ name, href, icon }: any) {
  return (
    <Link
      href={href}
      className=" px-5 py-3 flex gap-1  items-center bg-navy-200 text-base text-blue-300 hover:text-white border-blue rounded-md font-semibold hover:bg-gradient-to-t hover:from-blue-100 hover:to-blue-200  transition-all hover:transition-all"
    >
      {icon}
      {name}
    </Link>
  );
}

export default CardButton;
