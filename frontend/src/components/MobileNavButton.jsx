import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const MobileNavButton = ({ isOpen, setIsOpen }) => {
  return (
    <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <IoClose className="text-xl cursor-pointer" />
      ) : (
        <AiOutlineMenu className="text-xl cursor-pointer" />
      )}
    </button>
  );
};

export default MobileNavButton;
