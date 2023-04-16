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

declare module "react-slick" {
  interface Settings {
    customSetting?: string;
  }
}

const TopSeller = () => {
  const cardData = Data?.topSellerCarousel;
  const settings: Settings = {
    arrows: true,

    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,

    nextArrow: <NextArro />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          <h2>Top Seller</h2>
        </div>
        <Slider {...settings}>
          {cardData.map((item: any) => (
            <div key={item?.id}>
              <div className="overflow-hidden relative inline-block">
                <Image
                  src={item?.img}
                  alt="top seller"
                  height={120}
                  width={120}
                  className=" group-hover:scale-110 transition-sm group-hover:opacity-40 rounded-lg"
                />
                <div className=" absolute right-0 bottom-0">
                  <CheckMark />
                </div>
              </div>
              <div className=" inline-block text-center">
                <h4 className=" text-xl">{item?.title}</h4>
                <h6>{item?.eth}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopSeller;
