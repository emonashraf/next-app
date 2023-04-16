import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeartButton from "../components/microComponent/HeartButton";
import EthButton from "../components/microComponent/EthButton";
import EmailAvatar from "../components/microComponent/EmailAvartar";
import Data from "../data/db";
import ShareButton from "../components/microComponent/ShareButton";
import StarButton from "../components/microComponent/StarButton";
import ButtonDefault from "../components/btn/ButtonDefault";

function ProductCard() {
  const cardData = Data?.ProductCard;
  return (
    <div className="container mx-auto px-4">
      <div className="ptb">
        <div className="center p-b">
          <h2>Explore Collections</h2>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {cardData.slice(0, 4).map((item: any) => (
            <div className=" rounded-lg group group-hover:transition-lg">
              <div>
                <Link href="/">
                  <Image
                    src={item?.img}
                    alt="Explore Items"
                    className=" w-full rounded-md"
                  />
                </Link>
                <div className=" mt-[1.375rem]">
                  <div className=" between">
                    <h4>
                      <Link href="/"> {item?.title}</Link>
                    </h4>
                    <div className=" between gap-2">
                      <HeartButton />
                      <ShareButton />
                      <StarButton />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3 justify-between items-center">
                    <div className=" between gap-3">
                      <EmailAvatar avatarImgV2={item?.avatarImgV2} />
                      <h6>{item?.email}</h6>
                    </div>
                    <div className="flex gap-1 items-center">
                      <EthButton />
                      <h6>{item?.newBid}</h6>
                    </div>
                  </div>
                  <div className="inline-block mt-7">
                    <Link href={item?.buttonHref} className=" card-btn">
                      {item?.buttonIcon}
                      {item?.button}
                    </Link>
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

export default ProductCard;
