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
      className="bg-secondary_e text-white px-6 py-5 rounded-2xl shadow-md shadow-black transition-all hover:bg-secondary_d hover:cursor-pointer "
    >
      Create a new wallet
    </Link>
  );
};

export default BoxButton;
