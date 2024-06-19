"use client";
import { NavbarItem, items } from "../Navbar/Navbar";
import { Link } from "react-scroll";

const FooterItem = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link to="home" smooth={true} duration={600} offset={-90}>
        <button className="hover:text-neutral-500 select-none">Home</button>
      </Link>
      {items.map((item, index) => (
        <NavbarItem key={index} name={item.name} link={item.link} />
      ))}
    </div>
  );
};

export default FooterItem;
