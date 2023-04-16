import React from "react";
import Data from "../data/db";
import ProductCardV2 from "../components/ProductCardV2";

function RecentlyAdded() {
  const cardData = Data?.ProductCard;
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="center p-b">
          <h2>Explore Collections</h2>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {cardData.slice(0, 4).map((item: any) => (
            <div key={item?.id}>
              <ProductCardV2
                img={item?.img}
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
      </div>
    </div>
  );
}

export default RecentlyAdded;
