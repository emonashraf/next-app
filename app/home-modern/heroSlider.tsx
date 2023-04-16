"use client";
import Slider from "react-slick";
import { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbBoxSeam, TbClock2 } from "react-icons/tb";
import Data from "../data/db";
import Image from "next/image";

declare module "react-slick" {
  interface Settings {
    customSetting?: string;
  }
}

const HeroSlider = () => {
  const heroData = Data?.heroV2;
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {heroData.map((item: any) => (
          <div key={item?.id}>
            <div className=" w-full">
              <div className="flex justify-center lg:justify-end lg:pr-20  ">
                {/* <div className="absolute top-0 bottom-0 left-[-50%] w-[400px] bg-navy-400 rounded-3xl z-[-1]"></div> */}
                <div className="relative before:content-['']  before:absolute before:left-[-20%] xs:before:left-[-28%] sm:before:left-[-50%] before:top-0  before:w-[90%] before:h-full before:bg-[#1A1B2B] before:inline-block before:rounded-3xl before:z-[-1]">
                  <Image
                    src={item?.img}
                    alt="hero img"
                    className=" w-full h-full  2xl:min-w-[400px]  py-12 z-90 "
                  />

                  {/* Box 1 */}
                  <div className="absolute top-[18%] left-0 translate-x-[-50%] p-2 md:p-3 bg-white text-black inline-block rounded-md">
                    <div className=" between gap-1 ">
                      <TbBoxSeam className=" text-5xl text-blue hidden xs:block" />
                      <div>
                        <h4>{item?.number1}</h4>
                        <h6>{item?.text1}</h6>
                      </div>
                    </div>
                  </div>
                  {/* Box 2 */}
                  <div className=" absolute bottom-[18%] right-0 translate-x-[50%] p-2 md:p-3 bg-white text-black inline-block rounded-md">
                    <div className=" between gap-1">
                      <TbClock2 className=" text-5xl text-blue  hidden xs:block" />
                      <div>
                        <h4>{item?.number2}</h4>
                        <h6>{item?.text2}</h6>
                      </div>
                    </div>
                  </div>
                  {/* Ring 1 */}
                  <div>
                    <div className=" h-[60px] w-[60px] absolute bottom-[20%] left-0 z-[-1] translate-x-[-50%] rounded-full border-[12px] border-[#7D8AFF]"></div>
                    <div className=" h-[60px] w-[60px] absolute bottom-[35%] translate-x-[50%] right-0 z-[-1]  rounded-full   border-[12px] border-[#FCA5A5]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
