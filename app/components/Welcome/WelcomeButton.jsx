"use client";
import React from "react";
import { scroll } from "../../utils/scroll";

const WelcomeButton = () => {
  return (
    <button
      onClick={() => scroll({ id: "generator" })}
      className="bg-secondary_e text-white px-6 py-5 rounded-2xl shadow-md shadow-black transition-all hover:bg-secondary_d hover:cursor-pointer "
    >
      Create a new wallet
    </button>
  );
};

export default WelcomeButton;
