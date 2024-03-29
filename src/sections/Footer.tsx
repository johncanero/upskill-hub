import React from "react";
import Link from "next/link";
// React Icons
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter"
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram"
// Framer-Motion
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="hidden px-10 py-6 bg-gray-100 md:block dark:bg-gray-900 md:px-12 lg:px-64">

      {/* Upskill and Get Started */}
      <div className="flex justify-center md:justify-between">
        {/* Title */}
        <div>
          <Link rel="noopener noreferrer" href="/">
            <h1 className="mt-3 mr-5 text-lg font-bold text-gray-800 dark:text-white md:text-2xl md:block font-OpenSans">
              upskillHub
            </h1>
          </Link>
        </div>

        {/* Get Started */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://upskillhub-by-johncanero.vercel.app/"
          >
            <button className="w-40 h-12 font-bold text-white rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 font-OpenSans">
              Get Started
            </button>
          </Link>
        </div>
      </div>


      <div className="justify-center md:flex md:justify-between">
        {/* Icons */}
        <div className="flex justify-center gap-6 pt-5">
          <AiFillFacebook size={28} />
          <AiOutlineTwitter size={28} />
          <FiInstagram size={28} />
        </div>


        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
          className="pt-4 text-sm text-center text-gray-600 md:text-base md:mt-1 font-OpenSans">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://johncanero.com/"
          >
            <span className="mr-2 font-bold text-gray-800 dark:text-gray-300">
              John Cañero
            </span>
          </Link>
          &copy; {new Date().getFullYear()} All Rights Reserved
        </motion.div>
      </div>




    </footer>
  );
};

export default Footer;