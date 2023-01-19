import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-10 py-6 bg-gray-900 md:px-12 lg:px-52">

      {/* Upskill and Get Started */}
      <div className="flex justify-center md:justify-between">
        {/* Title */}
        <div>
          <Link rel="noopener noreferrer" href="/">
            <h1 className="mt-3 mr-5 text-lg font-bold text-white md:text-2xl md:block font-OpenSans">
              upskillHub
            </h1>
          </Link>
        </div>

        {/* Get Started */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/upskill-hub/"
          >
            <button className="w-40 h-12 font-bold text-white rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 font-OpenSans">
              Get Started
            </button>
          </Link>
        </div>
      </div>


      {/* Copyright */}
      <div className="pt-4 text-sm text-center text-gray-600 md:text-base md:text-right md:mt-1 font-OpenSans">
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