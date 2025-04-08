import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { navlinks } from "../data/data";
import MobileNavButton from "./MobileNavButton";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-2xl md:text-4xl text-shadow-sm text-shadow-gray-500">
            Noiré
          </h2>
        </div>
        <div className="hidden md:flex items-center justify-center gap-12 font-medium text-gray-400">
          {navlinks.map((link) => {
            return (
              <a href="" key={link.id} className="hover:text-gray-800">
                {link.title}
              </a>
            );
          })}
          <MdOutlineShoppingBag
            className="cursor-pointer hover:text-gray-800"
            size="20"
          />
        </div>
        <MobileNavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <MobileNav isOpen={isOpen} links={navlinks} />
    </>
  );
};

export default Nav;
