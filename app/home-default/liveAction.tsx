"use client";

import Data from "../data/db";
import ProductCard from "../components/ProductCard";
import SlickSlider from "../components/SlickSlider";
import ButtonDefault from "../components/btn/ButtonDefault";

const LiveAction = () => {
  const cardData = Data?.ProductCard;

  return (
    <div className="container mx-auto px-4">
      <div className="between p-b">
        <h2>Live Auctions</h2>
      </div>
      <SlickSlider
        slider={cardData.slice(0, 8).map((item: any) => (
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
      />
      <div className="center mt-[3.75rem] ">
        <ButtonDefault name="Explore More" href="/" />
      </div>
    </div>
  );
};

export default LiveAction;
