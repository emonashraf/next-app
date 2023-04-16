import React from "react";
import Data from "../data/db";
import Image from "next/image";
import ButtonUnstyle from "../components/btn/ButtonUnstyle";

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
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-7">
            {catagoriesdData.slice(0, 6).map((item: any) => (
              <div key={item?.id}>
                <div className=" relative group transition-all">
                  <Image
                    src={item?.img}
                    alt="Catagories Item"
                    className="w-full  group-hover:opacity-40 transition-lg hover:transition-sm"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 hidden group-hover:block opacity-100">
                    Creative Arts
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
