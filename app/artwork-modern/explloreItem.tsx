"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Data from "../data/db";
import ProductCardV3 from "../components/ProductCardV3";
import { BiAnalyse, BiCategory, BiCube, BiDollar } from "react-icons/bi";
import { CgSortAz } from "react-icons/cg";
import PaginationCard from "../components/PaginationCard";

function ExplloreItem() {
  const cardData = Data?.ProductCard;
  return (
    <div className="ptb">
      <div className="container mx-auto px-4">
        <Tab.Group>
          <Tab.List className="flex flex-wrap gap-4 pb-7">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button className={selected ? "bg-blue tab" : "tab"}>
                  <BiCategory size="16px" className=" inline-block" /> Category
                </button>
              )}
            </Tab>
            <Tab className="tab">
              <BiDollar size="16px" className=" inline-block" /> Price Range
            </Tab>
            <Tab className="tab">
              <BiAnalyse size="16px" className=" inline-block" /> Sale Type
            </Tab>
            <Tab className="tab">
              <BiCube size="16px" className=" inline-block" /> Blockchain
            </Tab>
            <Tab className="tab ml-0 lg:ml-auto">
              <CgSortAz size="16px" className=" inline-block" />
              Sort By: Recently Added
            </Tab>
          </Tab.List>
          <Tab.Panels>
            {/* Tab Panel 1 */}
            <Tab.Panel>
              <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {cardData.slice(0, 12).map((item: any) => (
                  <div key={item?.id}>
                    <ProductCardV3
                      img={item?.img}
                      icon={item?.icon}
                      text={item?.text}
                      title={item?.title}
                      avatarImgV2={item?.avatarImgV2}
                      email={item?.email}
                      newBid={item?.newBid}
                      buttonHref={item?.buttonHref}
                      buttonIcon={item?.buttonIcon}
                      button={item?.button}
                    />
                  </div>
                ))}
              </div>
              <div className="center mt-[3.75rem] ">
                <PaginationCard />
              </div>
            </Tab.Panel>
            {/* Tab Panel 2 */}
            <Tab.Panel>
              <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {cardData.slice(0, 4).map((item: any) => (
                  <div key={item?.id}>
                    <ProductCardV3
                      img={item?.img}
                      icon={item?.icon}
                      text={item?.text}
                      title={item?.title}
                      avatarImgV2={item?.avatarImgV2}
                      email={item?.email}
                      newBid={item?.newBid}
                      buttonHref={item?.buttonHref}
                      buttonIcon={item?.buttonIcon}
                      button={item?.button}
                    />
                  </div>
                ))}
              </div>
            </Tab.Panel>
            {/* Tab Panel 3 */}
            <Tab.Panel>
              <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {cardData.slice(2, 6).map((item: any) => (
                  <div key={item?.id}>
                    <ProductCardV3
                      img={item?.img}
                      icon={item?.icon}
                      text={item?.text}
                      title={item?.title}
                      avatarImgV2={item?.avatarImgV2}
                      email={item?.email}
                      newBid={item?.newBid}
                      buttonHref={item?.buttonHref}
                      buttonIcon={item?.buttonIcon}
                      button={item?.button}
                    />
                  </div>
                ))}
              </div>
            </Tab.Panel>
            {/* Tab Panel 4 */}
            <Tab.Panel>
              <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {cardData.slice(4, 10).map((item: any) => (
                  <div key={item?.id}>
                    <ProductCardV3
                      img={item?.img}
                      icon={item?.icon}
                      text={item?.text}
                      title={item?.title}
                      avatarImgV2={item?.avatarImgV2}
                      email={item?.email}
                      newBid={item?.newBid}
                      buttonHref={item?.buttonHref}
                      buttonIcon={item?.buttonIcon}
                      button={item?.button}
                    />
                  </div>
                ))}
              </div>
            </Tab.Panel>
            {/* Tab Panel 5 */}
            <Tab.Panel>
              <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {cardData.slice(3, 7).map((item: any) => (
                  <div key={item?.id}>
                    <ProductCardV3
                      img={item?.img}
                      icon={item?.icon}
                      text={item?.text}
                      title={item?.title}
                      avatarImgV2={item?.avatarImgV2}
                      email={item?.email}
                      newBid={item?.newBid}
                      buttonHref={item?.buttonHref}
                      buttonIcon={item?.buttonIcon}
                      button={item?.button}
                    />
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default ExplloreItem;
