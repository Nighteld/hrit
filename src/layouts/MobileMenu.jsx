import { useState } from "react";
import { Link } from "react-router";

import { academics, admission, components, downloads } from "./NavBarDemo";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-color rounded-sm ${
            isOpen ? "rotate-45 origin-left ease-in-out duration-500" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-color rounded-sm ${
            isOpen ? "opacity-0 ease-in-out duration-500" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-color rounded-sm ${
            isOpen ? "-rotate-45 origin-left ease-in-out duration-500" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="fixed top-20 left-0 w-full h-full bg-color text-white z-50 p-5 overflow-y-auto">
          <ul className="list-style-wrapper">
            <li className="">
              <div className="flex justify-between items-center">
                HRIT
                <label>
                  <input type="checkbox" hidden />
                  {/* <Plus /> */}
                </label>
              </div>
              <ul className="ml-5 ease-in-out transition-all duration-500">
                {components.map((component) => (
                  <Link to={component.href} key={component.title} onClick={handleClose}>
                    <li>{component.title}</li>
                  </Link>
                ))}
              </ul>
            </li>

            <li className="">
              {" "}
              <div className="flex justify-between items-center">
                Academics
                <label>
                  <input type="checkbox" hidden />
                  {/* <Plus /> */}
                </label>
              </div>
              <ul className="ml-5">
                {academics.map((component) => (
                  <Link to={component.href} key={component.title} onClick={handleClose}>
                    <li>{component.title}</li>
                  </Link>
                ))}
              </ul>
            </li>
            <li>
              <div className="flex justify-between items-center">
                Admission
                <label>
                  <input type="checkbox" hidden />
                  {/* <Plus /> */}
                </label>
              </div>
              <ul className="ml-5 ease-in-out duration-500">
                {admission.map((component) => (
                  <Link to={component.href} key={component.title} onClick={handleClose}>
                    <li>{component.title}</li>
                  </Link>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/alumni-committee" onClick={handleClose}>Alumni committee</Link>
            </li>
            <li>
              <Link to="/notices" onClick={handleClose}>Notices </Link>
            </li>
            <li>News</li>
            <li>Gallery</li>

            <li>
              {" "}
              <div className="flex justify-between items-center">
                Downloads
                <label>
                  <input type="checkbox" hidden />
                  {/* <Plus /> */}
                </label>
              </div>
              <ul className="ml-5 ease-in-out duration-500">
                {downloads.map((component) => (
                  <Link to={component.href} key={component.title} onClick={handleClose}>
                    <li>{component.title}</li>
                  </Link>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleClose}> Contact Us </Link>
            </li>
          </ul>

          {/* <Link to="/">Friends</Link>
          <Link to="/">Groups</Link>
          <Link to="/">Stories</Link>
          <Link to="/">Login</Link> */}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
