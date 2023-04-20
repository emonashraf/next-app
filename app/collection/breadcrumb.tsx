import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

function Breadcrumb() {
  return (
    <div className="bg-breadCrumb h-full w-full ">
      <div className="container mx-auto px-4">
        <div className=" h-[610px] w-full ptb center flex-col">
          <h1>Collection</h1>
          <ul className="flex gap-2 items-center mt-5 justify-center md:justify-normal">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <BsChevronRight />
            </li>
            <li>
              <Link href="/">Collection</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
