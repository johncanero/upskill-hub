import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Button from "@/components/Button";

const Header = () => {
  // Dark Theme
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <Button className=" text-neutral-900" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="" onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    }
  };

  return (
    <div>
      <div className="hidden pt-3 lg:block lg:mx-52">
        <header className="flex items-center justify-between h-16 mt-1 md:mt-3">

          {/* Heading Title */}
          <div className="flex">
            <div className="flex">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/johncanero/">
                <Image
                  src="/images/upskillHubIcon.png"
                  width={35}
                  height={35}
                  alt="aLogo"
                  className="mt-1"
                />
              </Link>
              <Link rel="noopener noreferrer" href="/">
                <h1 className="ml-3 text-4xl font-extrabold text-gray-800 dark:text-white font-OpenSans">
                  upskillHub
                </h1>
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div className="z-10">
            <ul className="flex gap-12 mt-2 text-sm lg:text-base font-OpenSans">
              <Link
                rel="noopener noreferrer"
                href="/"
                className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Home
              </Link>
              <Link
                rel="noopener noreferrer"
                href="/explore"
                className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Explore
              </Link>


              <Link
                rel="noopener noreferrer"
                href="/online-courses"
                className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Online Careers
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/find-your-new-career"
                className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Find Your New Career
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/profile"
                className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Profile
              </Link>
            </ul>
          </div>


          <div className="z-10 flex">
            {/* Get Started */}
            <div>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/upskill-hub/"
              >
                <button className="w-40 h-12 mr-6 font-bold text-white rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 font-OpenSans">
                  Get Started
                </button>
              </Link>
            </div>
            {renderThemeChanger()}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;