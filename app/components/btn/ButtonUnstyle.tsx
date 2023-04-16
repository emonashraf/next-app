import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function ButtonUnstyle({ name, href }: any) {
  return (
    <div>
      <Link
        href={href}
        className="flex gap-1  items-center bg-transparent text-blue-200 shadow font-semibold  text-base hover:text-white transition-lg hover:transition-sm"
      >
        {name}
        <BsArrowRightShort size="24" />
      </Link>
    </div>
  );
}

export default ButtonUnstyle;
