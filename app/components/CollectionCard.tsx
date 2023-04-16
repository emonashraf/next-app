import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbHeartFilled } from "react-icons/tb";
import ButtonSm from "./btn/ButtonSm";

function CollectionCard({
  img,
  img2,
  img3,
  img4,
  circle,
  avatar,
  title,
  email,
  item,
  button1,
  button2,
  button3,
}: any) {
  return (
    <div className=" hover:scale-105 transition-lg hover:transition-sm">
      <div className=" mb-3">
        <Image src={img} alt="Explor Collections" className=" w-full" />
      </div>
      <div className=" between gap-5 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-3">
          <div>
            <Image src={avatar} alt="Avater" width={70} height={70} />
          </div>
          <div>
            <h4 className=" text-base font-bold sm:text-base lg:text-[1.125rem] xl:text-[1.25rem] 2xl:[1.375rem">
              <Link href="/">{title}</Link>
            </h4>
            <h6>
              Created by: <span className=" font-medium">{email}</span>
            </h6>
            <h6>{item}</h6>
          </div>
        </div>
        <div>
          <ButtonSm
            name="09.5k"
            icon={<TbHeartFilled color="#FF4450" size={14} />}
            href="/"
          />
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
