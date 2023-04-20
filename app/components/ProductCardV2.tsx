import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeartButton from "./microComponent/HeartButton";
import EthButton from "./microComponent/EthButton";
import EmailAvatar from "./microComponent/EmailAvartar";
import ShareButton from "./microComponent/ShareButton";
import StarButton from "./microComponent/StarButton";
import Timer from "./Timer";
import ClassNames from "embla-carousel-class-names/components";

function ProductCardV2({
  img,
  icon,
  text,
  title,
  email,
  avatarImgV2,
  newBid,
  button,
  buttonHref,
  buttonIcon,
  duration,
  className,
}: any) {
  return (
    <div className=" rounded-lg group group-hover:transition-lg">
      <div>
        <div className=" relative">
          <Link href="/">
            <Image
              src={img}
              alt="Explore Items"
              className=" w-full rounded-md"
            />
          </Link>
          <div className=" bg-white text-black  rounded-xl px-3 py-1 absolute bottom-5 left-5 hidden  group-hover:inline-block transition-lg hover:transition-sm">
            <Timer targetDate={duration} />
          </div>
        </div>
        <div className=" mt-[1.375rem]">
          <div className=" between">
            <h4>
              <Link href="/"> {title}</Link>
            </h4>
            <div className=" between gap-2">
              <HeartButton />
              <ShareButton />
              <StarButton />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 justify-between items-center">
            <div className=" between gap-3">
              <EmailAvatar avatarImgV2={avatarImgV2} />
              <h6>{email}</h6>
            </div>
            <div className="flex gap-1 items-center">
              <EthButton />
              <h6>{newBid}</h6>
            </div>
          </div>
          <div className="inline-block mt-7">
            <Link href={buttonHref} className=" card-btn">
              {buttonIcon}
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardV2;
