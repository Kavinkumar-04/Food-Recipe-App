import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center">
        {/* Logo and Website Name */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <h1 className="text-xl md:text-2xl font-bold text-green-800">
           Green <i>F</i>oodiie..
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Dish</li>
          <li>Contact</li>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            SignUp
          </button>
        </ul>

        {/* Mobile Menu Icon */}
        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
