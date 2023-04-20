import Image from "next/image";
import React from "react";
import banner from "../../public/img/banner.png";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import ButtonPrimary from "../components/btn/ButtonGradient";
import ButtonDefault from "../components/btn/ButtonDefault";
import Counter from "./counter";
import { GiCheckMark } from "react-icons/gi";
import emailImage from "../../public/img/email-img.png";
import EthButton from "../components/microComponent/EthButton";
import HeartButton from "../components/microComponent/HeartButton";
import DarkModebtn from "../components/DarkModebtn";
import ButtonGradient from "../components/btn/ButtonGradient";
import ButtonTransparent from "../components/btn/ButtonTransparent";

function hero() {
  return (
    <div className=" bg-heroDefault bg-cover bg-center bg-no-repeat w-full h-full pt-40 lg:pt-0 py-20 ">
      <div className="container mx-auto px-4">
        <div className=" h-screen w-full grid gap-10 lg:grid-cols-2 justify-between  items-center">
          {/* Hero Left */}
          <div>
            <div className="flex flex-col justify-center lg:justify-normal">
              <DarkModebtn />
              <h5>Create & Sell NFT Item.</h5>
              <h1>NFT Marketplace Explore, Collect or Sell</h1>
            </div>
            <ul className="flex gap-2 items-center mt-5 justify-center md:justify-normal">
              <li className="flex gap-2 items-center">
                <h4 className="font-medium">
                  <Link href="/">Create</Link>
                </h4>
                <BsChevronRight />
              </li>
              <li className="flex gap-2 items-center">
                <h4 className="font-medium">
                  <Link href="/">Explore</Link>
                </h4>
                <BsChevronRight />
              </li>
              <li>
                <h4 className="font-medium">
                  <Link href="/">Sell&Earn</Link>
                </h4>
              </li>
            </ul>
            <div className="flex flex-wrap gap-5 justify-center md:justify-normal pt-5">
              <ButtonGradient name="Create Item" href="/" />
              <ButtonTransparent name="Add Wallet" href="/" />
            </div>
            <div className="pt-10 flex justify-center md:justify-normal">
              <Counter />
            </div>
          </div>
          {/* Hero Right */}
          <div className=" flex lg:justify-end items-center justify-center">
            <div className=" relative text-white">
              <Image
                src={banner}
                alt="hero-banner"
                className=" max-w-[18rem]   md:max-w-[20rem]  lg:max-w-sm xl:max-w-md 2xl:max-w-lg "
              />
              <div className=" absolute bottom-5 left-5 md:bottom-8  md:w-64 xl:w-80">
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-1 mb-1">
                      <GiCheckMark color="#5F5FFF" size={12} />
                      <h6>Available in Stock 4</h6>
                    </div>
                    <h4>
                      <Link href="/">Creative White Lady</Link>
                    </h4>
                  </div>
                  <HeartButton />
                </div>
                <div className="flex justify-between mt-2 gap-5 ">
                  <div className="flex items-center gap-1  ">
                    <Image src={emailImage} alt="email" className=" h-4 w-4" />
                    <h6>
                      <Link href="/" className=" hover:text-b">
                        @James_alex01
                      </Link>
                    </h6>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex items-center justify-center bg-black-100 w-4 h-4 rounded-full  text-white">
                      <EthButton />
                    </div>
                    <h6>New Bid: 0.16 ETH </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
