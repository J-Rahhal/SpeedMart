import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

const MobileNav = ({ isOpen, links }) => {
  const location = useLocation();
  return (
    <>
      {isOpen && (
        <div className="md:hidden fixed bg-white border-t border-gray-400 py-4 px-4">
          <div className="container mx-auto space-y-4">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <div className="py-4 text-sm font-medium">
                  <Link
                    to={link.to}
                    className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full ${
                      isActive ? "text-gray-800" : "text-gray-500"
                    }`}
                  >
                    {link.title}
                  </Link>
                </div>
              );
            })}
          </div>
          <MdOutlineShoppingBag
            className="cursor-pointer hover:text-gray-800"
            size="20"
          />
        </div>
      )}
    </>
  );
};

export default MobileNav;
