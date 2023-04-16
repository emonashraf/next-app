import React from "react";

import Image from "next/image";
import Link from "next/link";
import Data from "../data/db";
import ButtonUnstyle from "../components/btn/ButtonUnstyle";
import { BsArrowRightShort } from "react-icons/bs";

function Catagories() {
  const catagoriesdData = Data?.categories;
  return (
    <div className="ptb">
      <div className="container mx-auto px-4">
        <div className=" flex flex-wrap justify-between p-b">
          <h2>NFTs Categories</h2>

          <ButtonUnstyle name="Explore Category" href="/" />
        </div>
        <div>
          <div className="w-ful grid-rows-[270px]  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-7">
            {catagoriesdData.slice(0, 6).map((item: any) => (
              <div key={item?.id}>
                <div className=" h-full relative transition-lg group">
                  <Image
                    src={item?.img}
                    alt="Catagories Item"
                    className="w-full h-full  rounded-xl "
                  />
                  <div className="w-full  m-0 bg-black/70  absolute bottom-0  opacity-100 hidden group-hover:between transition-lg hover:transition-sm">
                    <div className="py-3 px-3">
                      <h5 className=" text-base font-bold">{item?.title}</h5>
                      <h6> {item?.text}</h6>
                    </div>

                    <Link
                      href="/"
                      className="px-3 py-3 flex gap-1  items-center bg-gradient-to-t from-blue-200 to-blue-100 text-base text-white hover:text-white border-blue rounded-br-md font-semibold hover:bg-gradient-to-t hover:from-blue-100 hover:to-blue-200  transition-all hover:transition-all"
                    >
                      <BsArrowRightShort size={40} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catagories;
