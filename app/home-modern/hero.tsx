import React from "react";
import ButtonBlue from "../components/btn/ButtonBlue";
import HeroSlider from "./heroSlider";

function Hero() {
  return (
    <div className="  h-full w-full bg-heroModarn  bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="h-screen grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
          {/* Hero Left */}
          <div>
            <h5 className="text-blue text-lg">Create & Sell NFT Item.</h5>
            <h1>Largest Online market to Sell & Buy NFT Collections.</h1>
            <p className=" pt-5">
              Lorem ipsum dolor sit amet, consectetu adipiscing elituctus nec
              ullamcorper.
            </p>
            <div className="flex pt-7">
              <ButtonBlue name="Explore Items" href="/" />
            </div>
          </div>
          {/* Hero Right */}
          <div>
            <HeroSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
