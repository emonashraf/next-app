import Image from "next/image";
import React from "react";
import Link from "next/link";
import HeartButton from "./microComponent/HeartButton";
import EthButton from "./microComponent/EthButton";
import EmailAvatar from "./microComponent/EmailAvartar";
import Timer from "./Timer";

function ProductCard({
  img,
  icon,
  text,
  title,
  email,
  avatarImg,
  newBid,
  button,
  className,
  duration,
}: any) {
  return (
    <div className={className}>
      <div className=" rounded-lg">
        <div className=" group transition-lg">
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
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                {icon}
                <h6>
                  <Link href="/">{text}</Link>
                </h6>
              </div>
              <HeartButton />
            </div>
            <h4 className=" leading-10">
              <Link href="/"> {title}</Link>
            </h4>
            <div className="flex flex-wrap gap-3 justify-between items-center">
              <div className="flex  gap-1 items-center">
                <Image
                  src={avatarImg}
                  alt="Explore Items"
                  className=" rounded-md"
                />
                <h6>{email}</h6>
              </div>
              <div className="flex gap-1 items-center">
                <EthButton />
                <h6>{newBid}</h6>
              </div>
            </div>
            <div className=" mt-7">
              <Link href="/">{button}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
