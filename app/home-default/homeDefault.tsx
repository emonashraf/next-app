import React from "react";
import Hero from "./hero";
import ExplloreItem from "./explloreItem";
import Catagories from "./catagories";
import LiveAction from "./liveAction";
import Collections from "./collections";
import TopSeller from "./topSeller";
import Footer from "../components/Footer";

function HomeDefault() {
  return (
    <div>
      <Hero />
      <ExplloreItem />
      <Catagories />
      <LiveAction />
      <Collections />
      <TopSeller />
      <Footer />
    </div>
  );
}

export default HomeDefault;
