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
              <div>
                <Tab.Group>
                  <Tab.Panels>
                    <Tab.Panel>
                      <Image
                        src={item?.img}
                        alt="Explor Collections"
                        className=" w-full"
                      />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Image
                        src={item?.img2}
                        alt="Explor Collections"
                        className=" w-full"
                      />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Image
                        src={item?.img3}
                        alt="Explor Collections"
                        className=" w-full"
                      />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Image
                        src={item?.img4}
                        alt="Explor Collections"
                        className=" w-full"
                      />
                    </Tab.Panel>
                  </Tab.Panels>
                  <Tab.List className="flex gap-5 my-4">
                    <Tab className=" relative group focus:border-none">
                      <Image
                        src={item?.img}
                        alt="Explor Collections"
                        className="relative  group-hover:bg-shadow group-focus:bg-shadow transition-lg"
                      />
                      <h6 className=" text-lg font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-focus:block">
                        {item?.item}
                        <span className=" block font-normal leading-3">
                          Items
                        </span>
                      </h6>
                    </Tab>
                    <Tab className=" relative group focus:border-none">
                      <Image
                        src={item?.img2}
                        alt="Explor Collections"
                        className="relative  group-hover:bg-shadow group-focus:bg-shadow transition-lg"
                      />
                      <h6 className=" text-lg font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-focus:block">
                        {item?.item}
                        <span className=" block font-normal leading-3">
                          Items
                        </span>
                      </h6>
                    </Tab>
                    <Tab className="relative group focus:border-none">
                      <Image
                        src={item?.img3}
                        alt="Explor Collections"
                        className="relative  group-hover:bg-shadow group-focus:bg-shadow transition-lg"
                      />
                      <h6 className=" text-lg font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-focus:block">
                        {item?.item}
                        <span className=" block font-normal leading-3">
                          Items
                        </span>
                      </h6>
                    </Tab>
                    <Tab className=" relative group focus:border-none">
                      <Image
                        src={item?.img4}
                        alt="Explor Collections"
                        className="relative  group-hover:bg-shadow group-focus:bg-shadow transition-lg"
                      />
                      <h6 className=" text-lg font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-focus:block">
                        {item?.item}
                        <span className=" block font-normal leading-3">
                          Items
                        </span>
                      </h6>
                    </Tab>
                  </Tab.List>
                </Tab.Group>

                <div className=" between gap-5 flex-wrap sm:flex-nowrap">
                  <div className="flex items-center gap-3">
                    <div className=" relative">
                      <Image
                        src={item?.avatar}
                        alt="Avater"
                        width={70}
                        height={70}
                      />
                      <div className=" position-right-center">
                        <CheckMark />
                      </div>
                    </div>
                    <div>
                      <h4 className=" text-base font-bold  sm:text-base lg:text-[1.125rem] xl:text-[1.25rem] 2xl:[1.375rem">
                        <Link href="/">{item?.title}</Link>
                      </h4>
                      <h6>Created by: {item?.email}</h6>
                    </div>
                  </div>
                  <div>
                    <ButtonSm
                      name="09.5k"
                      icon={<TbHeartFilled color="#FF4450" size={14} />}
                      href="/"
                    />
                  </div>
                </div>
              </div>
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
