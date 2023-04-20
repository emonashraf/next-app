"use client";
import { Tab } from "@headlessui/react";
import ProductCard from "../components/ProductCard";
import Data from "../data/db";
import { Fragment } from "react";
import ButtonDefault from "../components/btn/ButtonDefault";

function ExplloreItem() {
  const cardData = Data?.ProductCard;
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="ptb">
          <div>
            <Tab.Group>
              <div className=" between gap-7 flex-wrap p-b">
                <h2>Explore Items</h2>
                <Tab.List className="flex gap-4 ">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button className={selected ? "bg-blue tab" : "tab"}>
                        All
                      </button>
                    )}
                  </Tab>
                  <Tab className="tab">Popular</Tab>
                  <Tab className="tab">Newest</Tab>
                </Tab.List>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {cardData.slice(0, 8).map((item: any) => (
                      <div key={item?.id}>
                        <ProductCard
                          img={item?.img}
                          icon={item?.icon}
                          text={item?.text}
                          title={item?.title}
                          email={item?.email}
                          avatarImg={item?.avatarImg}
                          newBid={item?.newBid}
                          button={item?.button}
                          duration={item?.duration}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="center mt-[3.75rem] ">
                    <ButtonDefault name="Explore More" href="/" />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {cardData.slice(2, 6).map((item: any) => (
                      <div key={item?.id}>
                        <ProductCard
                          img={item?.img}
                          icon={item?.icon}
                          text={item?.text}
                          title={item?.title}
                          email={item?.email}
                          avatarImg={item?.avatarImg}
                          newBid={item?.newBid}
                          button={item?.button}
                        />
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {cardData.slice(8, 14).map((item: any) => (
                      <div key={item?.id}>
                        <ProductCard
                          img={item?.img}
                          icon={item?.icon}
                          text={item?.text}
                          title={item?.title}
                          email={item?.email}
                          avatarImg={item?.avatarImg}
                          newBid={item?.newBid}
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
      </div>
    </div>
  );
}

export default ExplloreItem;
