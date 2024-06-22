"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { scroll } from "@/app/utils/scroll";

export const items = [
  { name: "About", link: "about" },
  { name: "Generator", link: "generator" },
  { name: "More Info", link: "moreInfo" },
  { name: "Contact", link: "contact" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setShow(!show);
      } else setShow(false);
    });
  }, []);

  return (
    <div>
      <NavbarBurger show={show} />
      <NavbarDesktop show={show} />
    </div>
  );
};

export default Navbar;

const NavbarBurger = ({ show }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const body = document.getElementById("body");
    if (open) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [open]);

  const classHeader = `w-full h-30 flex justify-between items-center p-4 fixed z-50 transition-colors duration-200 ${
    show ? "bg-[#ffffffc0] backdrop-blur-lg" : "bg-transparent"
  }`;
  return (
    <div className="flex  lg:hidden">
      <header className={classHeader}>
        <Logo />
        <button onClick={() => setOpen(!open)} className="w-12 h-12 relative">
          <Image src="/burger.svg" alt="menu" fill />
        </button>
        <div
          id="navOpen"
          className={`absolute w-dvw h-screen top-0 -right-full bg-white transition-opacity duration-300 ${
            open ? "opacity-100 right-0 left-0 z-50" : "opacity-0 "
          }`}
        >
          <div className="flex flex-col gap-5 p-5 text-xl">
            <div className="w-full flex justify-end p-3">
              <p
                onClick={() => {
                  setOpen(false);
                }}
                className="text-xl"
              >
                X
              </p>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                scroll({ id: "home" });
              }}
              className="text-start"
            >
              Home
            </button>
            {items.map((item, index) => (
              <NavbarItem
                key={index}
                name={item.name}
                link={item.link}
                setOpen={setOpen}
              />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};
const NavbarDesktop = ({ show }) => {
  return (
    <div className="hidden lg:flex">
      <header className="h-24 w-full max-w-[1380px] fixed z-50 flex justify-center items-center">
        <div
          className={`w-11/12 h-14 flex items-center justify-between rounded-full p-3 pr-6 transition-colors duration-200 ${
            show
              ? "bg-[#ffffffc0] backdrop-blur-lg shadow-xl"
              : "bg-transparent"
          }`}
        >
          <Logo />
          <div className="flex gap-5 font-medium text-medium">
            {items.map((item, index) => (
              <NavbarItem key={index} name={item.name} link={item.link} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};
export const NavbarItem = ({ name, link, setOpen }) => {
  return (
    <button
      onClick={() => {
        setOpen ? setOpen(false) : null;
        scroll({ id: link });
      }}
      className="hover:text-neutral-500 select-none text-start"
    >
      {name}
    </button>
  );
};

const Logo = () => {
  return (
    <button
      onClick={() => scroll({ id: "home" })}
      className="w-3/5 h-6 md:w-1/4 md:h-full relative hover:cursor-pointer hover:drop-shadow-sm"
    >
      <Image
        src="/title.svg"
        alt="Wallet creator"
        fill
        priority
        className="object-cover drop-shadow-lg "
      />
    </button>
  );
};
