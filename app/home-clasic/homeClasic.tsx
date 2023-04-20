import React from "react";
import Hero from "./hero";
import LiveActions from "./liveActions";
import Catagories from "./categories";
import TodayPicks from "./todayPicks";
import Collection from "./collections";
import Description from "./description";
import TopSeller from "./topSeller";
import FooterV3 from "../components/FooterV3";

function HomeClasic() {
  return (
    <div>
      <div>
        <Hero />
        <LiveActions />
        <Catagories />
        <TodayPicks />
        <Collection />
        <Description />
        <TopSeller />
        <FooterV3 />
      </div>
    </div>
  );
}

export default HomeClasic;
