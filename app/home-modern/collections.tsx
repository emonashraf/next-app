"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbHeartFilled } from "react-icons/tb";
import { Tab } from "@headlessui/react";
import ButtonSm from "../components/btn/ButtonSm";
import Data from "../data/db";
import ButtonDefault from "../components/btn/ButtonDefault";
import CheckMark from "../components/microComponent/CheckMark";
import CollectionCard from "../components/CollectionCard";

function Collection() {
  const cardData = Data?.CollectionCard;
  return (
    <div className="ptb">
      <div className="container mx-auto px-4">
        <div className="center p-b">
          <h2>Explore Collections</h2>
        </div>
        <div className=" w-full grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7">
          {cardData.slice(0, 3).map((item: any) => (
            <div key={item?.id}>
              <CollectionCard
                img={item?.img}
                img2={item?.img2}
                img3={item?.img3}
                img4={item?.img4}
                avatar={item?.avatar}
                title={item?.title}
                email={item?.email}
              />
            </div>
          ))}
        </div>
        <div className="center mt-[3.75rem] ">
          <ButtonDefault name="Explore More" href="/" />
        </div>
      </div>
    </div>
  );
}

export default Collection;
