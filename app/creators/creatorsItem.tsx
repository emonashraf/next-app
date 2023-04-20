"use client";
import React from "react";
import Creators from "../components/Creators";
import Data from "../data/db";
import PaginationCard from "../components/PaginationCard";

function CreatorsItem() {
  const cardData = Data?.creators;
  return (
    <div className="ptb">
      <div className="container mx-auto px-4">
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10">
          {cardData.map((item: any) => (
            <div key={item?.id}>
              <Creators
                href={item?.href}
                img={item?.img}
                text={item?.text}
                title={item?.title}
                nfts={item?.nfts}
                level={item?.level}
                button={item?.button}
                buttonIcon={item?.buttonIcon}
              />
            </div>
          ))}
        </div>
        <div className="center mt-[3.75rem]">
          <PaginationCard />
        </div>
      </div>
    </div>
  );
}

export default CreatorsItem;
