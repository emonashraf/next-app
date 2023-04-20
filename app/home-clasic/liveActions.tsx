import React from "react";
import Data from "../data/db";
import ProductCardV3 from "../components/ProductCardV3";

function LiveActions() {
  const cardData = Data?.ProductCard;
  return (
    <div className="ptb">
      <div className="container mx-auto px-4">
        <div className="center flex-col gap-2 p-b">
          <h6 className=" text-blue-300 relative before-shape after-shape px-1">
            AUCTION
          </h6>
          <h2>Live Auctions</h2>
        </div>
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
                duration={item?.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveActions;
