import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function PaginationCard() {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  function Next() {
    setNum(++num);
  }
  function Back() {
    num > 1 && setNum(--num);
  }

  return (
    <div className=" flex gap-3 ">
      <button
        onClick={Back}
        className="bg-navy-100 px-2 py-2 rounded-md hover:bg-blue"
      >
        <MdKeyboardArrowLeft size={25} />
      </button>
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => setCur(pg.page)}
          className={`px-4 py-2 rounded-md  hover:bg-blue ${
            cur === pg.page ? "bg-blue" : " bg-navy-100"
          }`}
        >
          {pg.page}
        </button>
      ))}
      <button
        onClick={Next}
        className="bg-navy-100 px-2 py-2 rounded-md hover:bg-blue"
      >
        <MdKeyboardArrowRight size={25} />
      </button>
    </div>
  );
}

export default PaginationCard;
