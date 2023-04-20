import React from "react";
import Data from "../data/db";

function Description() {
  const descriptData = Data?.description;
  return (
    <div className=" ptb">
      <div className="container mx-auto px-4">
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {descriptData.map((item) => (
            <div className="secondary-gradient p-7 rounded-lg">
              <div className=" bg-navy-100 inline-block rounded-full p-5 shadow ">
                {item?.icon}
              </div>

              <h4 className=" my-2">{item?.title}</h4>
              <p>{item?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
