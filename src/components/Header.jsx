import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { MenuData } from "../data/MenuData";
import { Link } from "react-router-dom";

const Header = () => {
  //   const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="h-20 bg-white shadow-sm flex items-center justify-between px-16 md:px-10 z-20 fixed w-full">
      <div className="logo">
        <h3 className="italic">Logo</h3>
      </div>
      <MenuIcon className="menubars h-10 md:hidden"></MenuIcon>
      <div className="navMenu hidden md:flex items-center space-x-14">
        {MenuData.map((item, index) => (
          <Link
            className=" px-3 text-lg hover:text-orange-600 hover:font-semibold transition duration-150 easo"
            activeStyle={{ color: "black" }}
            to={item.link}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
