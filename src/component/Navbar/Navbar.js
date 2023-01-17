import React from "react";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import "../../style/style.css";
import logo from "../../Asset/pngwing.com.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const closeMenu = () => setClick(false);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbars">
        <a href="/" className=" w-14 h-8">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff", }} />
          )}
        </div>
        <div className="flex justify-center items-center">
          <div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a className="text-lg" href="/" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="text-lg" href="#about" onClick={closeMenu}>
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="text-lg" href="#testimonials" onClick={closeMenu}>
                  Industries
                </a>
              </li>
              <li className="nav-item">
                <a className="text-lg" href="#demo" onClick={closeMenu}>
                  News & Media
                </a>
              </li>
              <li className="nav-item">
                <a className="text-lg" href="#demo" onClick={closeMenu}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="flex justify-center items-center gap-2 bg-[#FF7607] text-lg text-white py-2 px-3 hover:bg-[white] hover:text-black">
              Request a quote<FaArrowRight></FaArrowRight>
            </button>
          </div>
          <div className=" flex justify-center items-center ml-7 ">
            <FaPhone className="text-white"></FaPhone>
            <div className=" flex flex-col justify-center items-start ml-5 ">
              <p className="text-[#d6cfcf]">Call us:</p>
              <p className="text-white">+880133087006</p>
            </div>
          </div>
        </div>
      </nav>
      <hr className="text-white w-full" />
    </div>
  );
};

export default Navbar;
