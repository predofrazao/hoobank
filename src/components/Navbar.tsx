import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full py-6 flex items-center justify-between navbar">
      <img src={logo} alt="HooBank logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden items-center justify-end flex-1">
        {navLinks.map(({ id, title }) => (
          <li key={id} className={`font-poppins font-normal cursor-pointer text-[1rem] text-white [&:not(:last-child)]:mr-10`}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
