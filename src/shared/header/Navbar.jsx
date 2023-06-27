import React, { useState } from "react";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navOptions = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-primary">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div className="w-full bg-primary text-white">
      <div className="navbar w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content  mt-3 p-2 shadow bg-primary rounded-box w-52 text-gray-600 text-2xl ${
                isOpen || "hidden"
              }`}
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          <div onClick={() => setOpen(!isOpen)} className="md:hidden">
            <Hamburger hideOutline={false} />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
