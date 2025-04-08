import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const Template = () => {
  return (
    <div className="min-h-screen overflow-hidden px-8 pt-8">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Template;
