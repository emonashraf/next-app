"use client";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArro from "../components/microComponent/NextArro";
import PrevArrow from "../components/microComponent/PrevArrow";
import Data from "../data/db";
import Image from "next/image";
import CheckMark from "../components/microComponent/CheckMark";
import Creators from "../components/Creators";

declare module "react-slick" {
  interface Settings {
    customSetting?: string;
  }
}

const TopSeller = () => {
  const cardData = Data?.creators;
  const settings: Settings = {
    arrows: true,

    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    nextArrow: <NextArro />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <div className="ptb">
        <div className="between p-b">
          <div>
            <h6 className=" text-blue-300 relative  after-shape px-1">
              AUCTION
            </h6>
            <h2>Top Seller</h2>
          </div>
        </div>
        <Slider {...settings}>
          {cardData.map((item: any) => (
            <div key={item?.id}>
              <Creators
                href={item?.href}
                img={item?.img}
                text={item?.text}
                title={item?.title}
                nfts={item?.nfts}
                level={item?.level}
                button={item?.button}
                buttonIcon={item?.buttonIcon}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopSeller;
