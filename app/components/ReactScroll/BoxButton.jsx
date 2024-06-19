"use client";
import React from "react";
import { Link } from "react-scroll";

const BoxButton = ({ section }) => {
  return (
    <Link
      to={section}
      smooth={true}
      duration={500}
      offset={-90}
      className="bg-[#534381] text-white px-6 py-5 rounded-2xl hover:bg-red-300 hover:cursor-pointer "
    >
      Create a new wallet
    </Link>
  );
};

export default BoxButton;
