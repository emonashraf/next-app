import React from "react";
import Hero from "./hero";
import Catagories from "./categories";

import TopSeller from "./topSeller";
import Collection from "./collections";
import RecentlyAdded from "./recentlyAdded";
import LiveActions from "./liveActions";
import Footer from "../components/Footer";
import Timer from "../components/Timer";

function HomeModern() {
  return (
    <div>
      <Hero />
      <Catagories />
      <RecentlyAdded />
      <TopSeller />
      <Collection />
      <LiveActions />

      <Footer V2 />
    </div>
  );
}

export default HomeModern;
