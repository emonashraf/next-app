import React from "react";
import ButtonBlue from "../components/btn/ButtonBlue";
import ButtonGradient from "../components/btn/ButtonGradient";
import ButtonTransparent from "../components/btn/ButtonTransparent";

function Hero() {
  return (
    <div className="  h-full w-full bg-heroClasic  bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="h-screen center text-center">
          <div className=" w-[80%]">
            <h1>Largest Online marketplace to Sell and Buy NFTs.</h1>
            <p className=" pt-5">
              Lorem ipsum dolor sit amet, consectetu adipiscing elituctus
              ullamcorper more elite. Accor ding to more be elite.
            </p>
            <div className="center gap-3 pt-12">
              <ButtonGradient name="Explore Items" href="/" />
              <ButtonTransparent name="Create Items" href="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
