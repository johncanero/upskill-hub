import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 bg-slate-900 md:px-36 font-Poppins">

      {/* Upskill and Get Started */}
      <div className="md:justify-between md:flex">
        {/* Title */}
        <div>
          <Link rel="noopener noreferrer" href="/">
            <h1 className="hidden text-3xl font-bold text-white md:block">
              upskillHub
            </h1>
          </Link>
        </div>

        <div className="">
          <button className="w-48 h-12 font-bold text-white rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 ">
            Get Started
          </button>
        </div>
      </div>


      {/* Copyright */}
      <div className="pt-4 text-right text-gray-600 md:mt-1">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/johncanero/"
        >
          <span className="mr-2 font-bold text-gray-300">
            John Cañero
          </span>
        </Link>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>



    </footer>
  );
};

export default Footer;