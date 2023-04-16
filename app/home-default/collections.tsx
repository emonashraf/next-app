import React from "react";

import Data from "../data/db";
import CollectionCard from "../components/CollectionCard";
function Collections() {
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
                avatar={item?.avatar}
                title={item?.title}
                email={item?.email}
                item={item?.item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
