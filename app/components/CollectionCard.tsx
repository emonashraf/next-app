import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbHeartFilled } from "react-icons/tb";
import { Tab } from "@headlessui/react";
import ButtonSm from "../components/btn/ButtonSm";
import { BsHeartFill, BsPerson } from "react-icons/bs";
import { MdInsertChartOutlined } from "react-icons/md";
import CheckMark from "./microComponent/CheckMark";

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
  nfts,
  creator,
  like,
  V1,
  V3,
  className,
}: any) {
  return (
    <div className={className}>
      {V1 && (
        <div className=" mb-3">
          <Image src={img} alt="Explor Collections" className=" w-full" />
        </div>
      )}
      {!V1 && (
        <Tab.Group>
          <Tab.Panels className=" relative group transition-sm">
            <Tab.Panel>
              <Image src={img} alt="Explor Collections" className=" w-full" />
            </Tab.Panel>
            <Tab.Panel>
              <Image src={img2} alt="Explor Collections" className=" w-full" />
            </Tab.Panel>
            <Tab.Panel>
              <Image src={img3} alt="Explor Collections" className=" w-full" />
            </Tab.Panel>
            <Tab.Panel>
              <Image src={img4} alt="Explor Collections" className=" w-full" />
            </Tab.Panel>
            {V3 && (
              <div className=" absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] z-10 ">
                <Image
                  src={circle}
                  alt="Circle"
                  className=" group-hover:rotate-y-180 transition-lg"
                />
              </div>
            )}
          </Tab.Panels>
          <Tab.List className="flex gap-5 my-4">
            <Tab className=" relative group focus:border-none">
              <Image
                src={img}
                alt="Explor Collections"
                className="relative  group-hover:bg-shadow group-focus:bg-shadow transition-lg"
              />
              <h6 className=" text-lg font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-focus:block">
                {item}
                <span className=" block font-normal leading-3">Items</span>
              </h6>
            </Tab>
            <Tab className=" relative group focus:border-none">
              <Image
                src={img2}
                alt="Explor Collections"
                className="relative  group-hover:bg-shadow group-focus:bg-shadow transition-lg"
              />
              <h6 className=" text-lg font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-focus:block">
                {item}
                <span className=" block font-normal leading-3">Items</span>
              </h6>
            </Tab>
            <Tab className="relative group focus:border-none">
              <Image
                src={img3}
                alt="Explor Collections"
                className="relative  group-hover:bg-shadow group-focus:bg-shadow transition-lg"
              />
              <h6 className=" text-lg font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-focus:block">
                {item}
                <span className=" block font-normal leading-3">Items</span>
              </h6>
            </Tab>
            <Tab className=" relative group focus:border-none">
              <Image
                src={img4}
                alt="Explor Collections"
                className="relative  group-hover:bg-shadow group-focus:bg-shadow transition-lg"
              />
              <h6 className=" text-lg font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block group-focus:block">
                {item}
                <span className=" block font-normal leading-3">Items</span>
              </h6>
            </Tab>
          </Tab.List>
        </Tab.Group>
      )}
      {!V3 && (
        <div className=" between gap-5 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-3">
            <div className=" relative">
              <div>
                <Image src={avatar} alt="Avater" width={70} height={70} />
              </div>
              <div className="right-center">
                <CheckMark />
              </div>
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
      )}
      {V3 && (
        <div className=" pb-5">
          <div className=" center flex-col gap-1">
            <h4 className=" text-base font-bold  sm:text-base lg:text-[1.125rem] xl:text-[1.25rem] 2xl:[1.375rem">
              <Link href="/">{title}</Link>
            </h4>
            <h6>Created by: {email}</h6>
          </div>
          <div className=" between mt-4">
            <div className=" flex gap-1">
              <MdInsertChartOutlined color="#FF855F" />
              <h6>{nfts}</h6>
            </div>
            <div className=" flex gap-1">
              <BsPerson color="#625EFF" />
              <h6>{creator}</h6>
            </div>
            <div className=" flex gap-1">
              <BsHeartFill color="#FF4450" />
              <h6>{like}</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollectionCard;
