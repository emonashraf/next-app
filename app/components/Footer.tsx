import React from "react";
import SocialIcons from "./microComponent/SocialIcons";
import Link from "next/link";
import { TbArrowNarrowRight, TbArrowUpRight } from "react-icons/tb";
function Footer({ V1, V2 }: any) {
  return (
    <div className="ptb h-full bg-footerBgV1 bg-cover">
      <div className="container mx-auto px-4">
        <div className=" between p-b">
          <h3>
            <Link href="/">Makinft</Link>
          </h3>
          <SocialIcons />
        </div>
        {V1 && <div className=" border-t border-[#26263C]"></div>}

        <div className="ptb flex justify-between flex-wrap gap-12">
          {/* Item 1 */}
          <div className=" basis-[200px] grow shrink">
            <div className="mb-24">
              <h4>Subscribe Newsletter</h4>
            </div>
            {V1 && (
              <div className="relative">
                <div>
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className=" w-full inline-block "
                  />
                </div>
                <Link
                  href="/"
                  className="bg-blue-300 px-3 py-[10px] rounded-lg text-white absolute right-0 top-[50%] translate-y-[-50%]"
                >
                  <TbArrowNarrowRight className=" text-white text-xl" />
                </Link>
              </div>
            )}
            <div className=" between border-b border-[#26263C]">
              <input
                type="text"
                placeholder="Enter email address"
                className=" w-full inline-block  bg-transparent"
              />
              <Link href="/">
                <TbArrowUpRight className=" text-blue-300 text-xl" />
              </Link>
            </div>
          </div>
          <div className="basis-[800px]  grow shrink">
            <div className=" between  flex-wrap gap-x-32 gap-10 ">
              {/* Quick links */}
              <div>
                <h5 className=" font-bold mb-5">Quick links</h5>
                <ul>
                  <li className="py-3">
                    <Link href="/">Services</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Testimonial</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Careers</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">About Us</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* My Account */}
              <div>
                <h5 className=" font-bold mb-5">Quick links</h5>
                <ul>
                  <li className="py-3">
                    <Link href="/">Author</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Collrction</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Author Prrofile</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Create Item</Link>
                  </li>
                </ul>
              </div>
              {/* Resources */}
              <div>
                <h5 className=" font-bold mb-5">Resources</h5>
                <ul>
                  <li className="py-3">
                    <Link href="/">Tutorials</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Product</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Author Prrofile</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/">Newsroom</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {V2 && <div className=" border-t border-[#26263C]"></div>}
        <div className=" flex justify-center sm:justify-between items-center flex-wrap gap-5 pt-10">
          <p> &copy; 2023 Makinft.All right reserved</p>
          <ul className=" flex justify-center sm:justify-between items-center gap-4 flex-wrap">
            <li>
              <Link href="/">Company</Link>
            </li>
            <li>
              <Link href="/">Privecy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
