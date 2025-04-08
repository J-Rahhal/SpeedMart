import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { navlinks } from "../data/data";
import MobileNavButton from "./MobileNavButton";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.id}
                to={link.to}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full ${
                  isActive ? "text-gray-800" : "text-gray-500"
                }`}
              >
                {link.title}
              </Link>
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
