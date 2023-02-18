import React from "react";
import Link from "next/link";
// Icons
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { GoLightBulb } from "@react-icons/all-files/go/GoLightBulb";
import { GiNetworkBars } from "@react-icons/all-files/gi/GiNetworkBars"
import { VscDebugStart } from "@react-icons/all-files/vsc/VscDebugStart"

const MobileFooter = () => {
    return (
        <footer>
            <div className="fixed bottom-0 left-0 flex justify-center w-full py-2 ml-1 text-center bg-gray-100 dark:bg-gray-900 border gap-6 dark:bg-black50 md:hidden ">
                {/* Home */}
                <Link href="/" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <FaHome className="ml-1" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Home</p>
                    </button>
                </Link>

                {/* Explore */}
                <Link href="/explore" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <BiSearchAlt className="ml-2" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Explore</p>
                    </button>
                </Link>

                {/* Get Started */}
                <Link href="https://www.linkedin.com/company/upskill-hub/" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <VscDebugStart className="ml-5" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Get Started</p>
                    </button>
                </Link>

                {/* Find Your New Career*/}
                <Link href="/find-your-new-career" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <GiNetworkBars className="ml-3" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Careers</p>
                    </button>
                </Link>


                {/* Online Courses */}
                <Link href="/online-courses" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <GoLightBulb className="ml-2" size={23} />
                        <p className="mt-1 text-xs text-center font-Poppins">Courses</p>
                    </button>
                </Link>

            </div>
        </footer>
    );
};

export default MobileFooter;