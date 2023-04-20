import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbFiles } from "react-icons/tb";
import { ImParagraphLeft } from "react-icons/im";
import { RiContrastDrop2Line } from "react-icons/ri";
import CardButton from "./btn/CardButton";

function Creators({
  href,
  img,
  text,
  title,
  nfts,
  level,
  button,
  buttonIcon,
}: any) {
  return (
    <div className="secondary-gradient px-4 py-5 rounded-lg group transition-lg">
      <div className=" center flex-col">
        <div className=" mb-2">
          <Image src={img} alt="Creators" />
        </div>
        <div className="flex gap-1">
          <TbFiles size="18px" color="#625EFF" />
          <h6>{text}</h6>
        </div>
        <h5 className=" text-base font-bold">
          <Link href={href}>{title}</Link>
        </h5>
      </div>
      <div className=" between my-5">
        <div className=" flex items-center gap-1">
          <ImParagraphLeft size="12px" color="#625EFF" />
          <h6>{nfts}</h6>
        </div>
        <div className=" flex items-center gap-1">
          <RiContrastDrop2Line size="12px" color="#625EFF" />
          <h6>{level}</h6>
        </div>
      </div>
      <div className=" center">
        <button className="card-btn group-hover:primary-gradient transition-sm">
          {buttonIcon}
          {button}
        </button>
      </div>
    </div>
  );
}

export default Creators;
