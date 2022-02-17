import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MenuData } from "../data/MenuData";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 text-white max-w-[1400px] fixed z-30 mx-auto top-0 right-0 left-0  flex items-center justify-between px-16 md:px-10 ">
      <div className="logo">
        <h3 className="italic">Logo</h3>
      </div>
      <MenuIcon className="menubars h-10 md:hidden"></MenuIcon>
      <div className="navMenu hidden md:flex items-center space-x-14">
        {MenuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <h3 className=" px-3 text-lg hover:text-orange-600 hover:font-semibold transition duration-150 ease-out">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
