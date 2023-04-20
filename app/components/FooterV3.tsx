import React from "react";
import SocialIcons from "./microComponent/SocialIcons";
import Link from "next/link";
import { TbArrowNarrowRight, TbArrowUpRight } from "react-icons/tb";
function FooterV3({ V1, V2, V3 }: any) {
  return (
    <div className="ptb h-full bg-footerBgV1 bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="ptb flex justify-between flex-wrap gap-12">
          {/* Item 1 */}
          <div className=" basis-[200px] grow shrink">
            <h3 className=" mb-5">
              <Link href="/">Makinft</Link>
            </h3>
            <div className="mb-10">
              <h4 className=" text-xl">Subscribe Newsletter</h4>
            </div>

            <div className=" between border-b border-[#26263C]">
              <input
                type="text"
                placeholder="Enter email address"
                className=" px-0 w-full inline-block  bg-transparent"
              />
              <Link href="/">
                <TbArrowUpRight className=" text-blue-300 text-4xl" />
              </Link>
            </div>
            <div className=" inline-block mt-7">
              <SocialIcons />
            </div>
          </div>

          <div className="basis-[800px]  grow shrink">
            <div className=" between  flex-wrap gap-x-32 gap-10 ">
              {/* Quick links */}
              <div>
                <h5 className=" font-bold mb-5">My Account</h5>
                <ul>
                  <li className="py-3">
                    <Link href="/">Create Dashboard</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Wallet</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Create Team</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">My NFTs</Link>
                  </li>
                </ul>
              </div>
              {/* My Account */}
              <div>
                <h5 className=" font-bold mb-5">Useful Links</h5>
                <ul>
                  <li className="py-3">
                    <Link href="/">All NFTs</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">How It Works</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Create</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Explore</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Collection</Link>
                  </li>
                </ul>
              </div>
              {/* Resources */}
              <div>
                <h5 className=" font-bold mb-5">Contact Us</h5>
                <ul>
                  <li className="py-3 flex gap-1 flex-wrap">
                    <span>A: </span>

                    <Link href="/">
                      1245 Center avenew Makinft, <br /> House# 4, Los Angeles
                    </Link>
                  </li>

                  <li className="py-3 flex gap-1 flex-wrap">
                    <span>p:</span>

                    <Link href="/">+123 45 67 890</Link>
                  </li>
                  <li className="py-3 flex gap-1 flex-wrap">
                    <span>E:</span>

                    <Link href="/">Support@makinft.com</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {V2 && <div className=" border-t border-[#26263C]"></div>}
        <div className=" center">
          <div>
            <span> &copy; Copyright-2022 MakNFT. Design By- </span>

            <Link href="/"> Devscron</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterV3;
