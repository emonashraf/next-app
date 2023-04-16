import Image from "next/image";
import React from "react";
import { TbCurrencyEthereum } from "react-icons/tb";
import { IoDiamondSharp } from "react-icons/io5";
import CheckMark from "../components/microComponent/CheckMark";
import Data from "../data/db";

function TopSeller() {
  const cardData = Data?.topSeller;
  return (
    <div className="ptb">
      <div className="container mx-auto px-4">
        <div className=" between p-b">
          <h2>Top Seller</h2>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {cardData.map((item: any) => (
            <div className=" w-full items-center flex gap-5 group transition-lg">
              <div className="overflow-hidden ">
                <Image
                  src={item?.img}
                  alt="top seller"
                  height={120}
                  width={120}
                  className="group-hover:scale-110 transition-sm group-hover:opacity-40"
                />
              </div>
              <div>
                <div className="d-inline">
                  <h4>{item?.title}</h4>
                  <CheckMark />
                </div>
                <h6 className=" mb-2">{item?.email}</h6>
                <div className=" between">
                  <div className="d-inline">
                    <h6>{item?.eth}</h6>
                    <TbCurrencyEthereum className=" bg-blue-300 text-white text-[14px]  p-[1px] rounded-full" />
                  </div>
                  <div className="d-inline">
                    <h6>{item?.items}</h6>
                    <IoDiamondSharp className=" bg-blue-300 text-white text-[14px]  p-[1px] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSeller;
