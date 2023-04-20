import React from "react";

import Image from "next/image";
import Link from "next/link";
import Data from "../data/db";
import ButtonUnstyle from "../components/btn/ButtonUnstyle";
import { TbArrowUp } from "react-icons/tb";

function Catagories() {
  const catagoriesdData = Data?.categories;
  return (
    <div className="ptb">
      <div className="container mx-auto px-4">
        <div className=" flex flex-wrap justify-between p-b">
          <div>
            <h6 className=" text-blue-300 relative  after-shape px-1">
              AUCTION
            </h6>
            <h2>NFTs Categories</h2>
          </div>
          <ButtonUnstyle name="Explore Category" href="/" />
        </div>
        <div>
          <div className="w-ful grid-rows-[270px]  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-7">
            {catagoriesdData.slice(0, 6).map((item: any) => (
              <div key={item?.id}>
                <div className=" h-full relative transition-lg group">
                  <div className=" h-full p-5 rounded-xl secondary-gradient">
                    <Image
                      src={item?.img}
                      alt="Catagories Item"
                      className="w-full h-full  rounded-xl "
                    />
                  </div>
                  <div className="  absolute bottom-0 right-0  opacity-100 group-hover:between transition-lg hover:transition-sm">
                    <Link
                      href="/"
                      className="px-3 py-3 flex gap-1  items-center bg-navy-100  text-base text-white hover:text-white rounded-br-md font-semibold group-hover:bg-gradient-to-t group-hover:from-blue-100 group-hover:to-blue-200  transition-all hover:transition-all group-hover:rotate-90"
                    >
                      <TbArrowUp size={40} />
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
