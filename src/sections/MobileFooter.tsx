/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// Icons
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { GoLightBulb } from "@react-icons/all-files/go/GoLightBulb";
import { GiNetworkBars } from "@react-icons/all-files/gi/GiNetworkBars";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
// NextAuth
import { useSession, signIn, signOut } from "next-auth/react";

const MobileFooter = () => {
    const { data: session } = useSession();

    return (
        <footer>
            <div className="fixed bottom-0 left-0 flex justify-center w-full py-2 ml-1 text-center bg-gray-100 dark:bg-gray-900 gap-9 dark:bg-black50 md:hidden font-OpenSans">
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

                {/* Online Courses */}
                <Link href="/online-courses" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <GoLightBulb className="ml-2" size={23} />
                        <p className="mt-1 text-xs text-center font-Poppins">Courses</p>
                    </button>
                </Link>

                {/* Find Your New Career*/}
                <Link href="/find-your-new-career" rel="noopener noreferrer">
                    <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                        <GiNetworkBars className="ml-3" size={22} />
                        <p className="mt-1 text-xs text-center font-Poppins">Careers</p>
                    </button>
                </Link>

                {/* Get Started */}
                <Link href="/profile" rel="noopener noreferrer">
                    {session ? (
                        <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                            <img
                                src={session.user?.image!}
                                alt="user-avatar"
                                className="w-6 mx-auto rounded-full cursor-pointer lg:mt-2 lg:mb-2 lg:mr-3 2xl:h-12 2xl:w-12 hover:opacity-50"
                            />
                            <p className="mt-1 text-xs text-center font-Poppins">Profile</p>
                        </button>
                    ) : (
                        <button className="hover:text-neutral-700 dark:hover:text-gray-50">
                            <CgProfile className="ml-1" size={23} />
                            <p className="mt-1 text-xs text-center font-Poppins">Profile</p>
                        </button>
                    )}
                </Link>
            </div>
        </footer>
    );
};

export default MobileFooter;
