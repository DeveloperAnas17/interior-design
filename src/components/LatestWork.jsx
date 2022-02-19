import React from "react";
import { LatestworkData } from "../data/LatestworkData";
import { Link } from "react-router-dom";

const LatestWork = ({ latestData }) => {
  // console.log(LatestworkData);
  console.log(latestData);
  return (
    <div className="max-w-[1400px] mx-auto px-14">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-semibold text-2xl">Latest Work</h1>
        <Link to={"/our-work"}>
          <button className="h-12 w-32 font-semibold flex items-center justify-center bg-orange-400 text-white border-2 border-orange-400 hover:bg-white hover:text-orange-400 transition duration-150 ease-in-out">
            See All Work
          </button>
        </Link>
      </div>
      <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3">
        {LatestworkData.map((workData, index) => (
          <div
            key={index}
            className=" cursor-pointer hover:scale-105 transition transform duration-300 ease-out "
          >
            <div className=" h-72 w-72 relative">
              <img
                src={workData.image}
                alt=""
                className="rounded-lg h-full w-full object-cover overflow-hidden "
              />
            </div>
            <h3 className="absolute bottom-3 text-white text-xl ml-3 font-semibold">
              {workData.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
{
  /* <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80 ">
        <Image
          className="rounded-xl"
          src={image}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-gray-700 font-semibold">{title}</h3>
    </div> */
}
