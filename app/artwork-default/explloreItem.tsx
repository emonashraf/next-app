"use client";

import PaginationCard from "../components/PaginationCard";
import ProductCard from "../components/ProductCard";
import Data from "../data/db";

function ExplloreItem() {
  const cardData = Data?.ProductCard;

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="ptb">
          <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {cardData.slice(0, 12).map((item: any) => (
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
          <div className="center mt-[3.75rem]">
            <PaginationCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplloreItem;
