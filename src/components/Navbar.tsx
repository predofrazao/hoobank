import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <nav className="w-full py-6 flex items-center justify-between navbar">
      <img src={logo} alt="HooBank logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden items-center justify-end flex-1">
        {navLinks.map(({ id, title }) => (
          <li
            key={id}
            className={`font-poppins font-normal cursor-pointer text-[1rem] text-white [&:not(:last-child)]:mr-10`}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 items-center justify-end">
        <button type="button" onClick={() => setToggle((prev) => !prev)}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } min-w-[140px] absolute top-20 right-0 mx-4 my-2 p-6 rounded-xl sidebar bg-black-gradient cursor-default`}
          >
            <ul className="list-none flex flex-col items-center justify-end flex-1">
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  className={`font-poppins font-normal cursor-pointer text-[1rem] text-white hover:text-secondary [&:not(:last-child)]:mb-4`}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
