"use client";
import { NavbarItem, items } from "../Navbar/Navbar";
import { scroll } from "@/app/utils/scroll";

const FooterItem = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <button
        onClick={() => {
          scroll({ id: "home" });
        }}
        className="hover:text-neutral-500 select-none text-start"
      >
        Home
      </button>
      {items.map((item, index) => (
        <NavbarItem key={index} name={item.name} link={item.link} />
      ))}
    </div>
  );
};

export default FooterItem;
