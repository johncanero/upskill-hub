import React from 'react'
import Link from 'next/link'
// Icon
import { CgProfile } from "@react-icons/all-files/cg/CgProfile"
import { BsChevronDown } from '@react-icons/all-files/bs/BsChevronDown'
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight'

const index = () => {
    return (
        <div>
            {/* <h1 className="mt-6 text-xl font-bold text-center md:text-2xl font-OpenSans">
                Profile
            </h1> */}
            <div>
                {/* Component: Rectangle Background: Grow with Upskill Hub */}
                <div className="md:px-12 px-6 lg:pl-64 h-44 md:h-48 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600 text-black dark:text-white font-OpenSans">
                    <h2 className='md:pt-12 md:text-3xl text-2xl pt-8 lg:text-4xl font-bold text-gray-900 dark:text-white'>Grow with Upskill Hub</h2>
                    <p className='lg:text-lg mt-1 text-gray-800 dark:text-white '>Learner help support: <Link
                        rel="noopener noreferrer"
                        href="https://upskillhub-by-johncanero.vercel.app/"
                        className='hover:text-gray-900'>
                        https://upskillhub-by-johncanero.vercel.app/
                    </Link>
                    </p>
                </div>

                {/* Browse Catalog - My Courses - How it Works */}
                <div className='md:px-12 px-6 lg:pl-64 h-16 shadow-lg pt-4 font-OpenSans dark:text-gray-400 md:text-base text-sm'>
                    <div className='flex justify-between'>
                        <div className='flex gap-5 md:gap-10'>
                            <Link
                                rel="noopener noreferrer"
                                href="/online-courses"
                                className='hover:text-gray-600 dark:hover:text-gray-200'>
                                <p>Browse Catalog</p>
                            </Link>

                            <Link rel="noopener noreferrer"
                                href="/profile"
                                className='hover:text-gray-600 dark:hover:text-gray-200'>
                                <p>My Courses</p>
                            </Link>
                        </div>
                        <div className='lg:mr-56 font-semibold text-gray-800 dark:text-white'>
                            <Link rel="noopener noreferrer"
                                href="/profile"
                                className='hover:text-gray-600 dark:hover:text-gray-200'>
                                <div className='flex gap-2'>
                                    <p>How it Works</p>
                                    <BsChevronDown className='mt-1' size={16} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* My Recent Activity and View my Courses*/}
                <div className='md:px-12 px-6 lg:pl-64 h-24 pt-12 md:pt-16 font-OpenSans'>
                    <div className='flex justify-between'>
                        <p className='text-md md:text-2xl font-semibold'>My Recent Activity</p>

                        {/* View my courses */}
                        <div className='lg:mr-56 font-semibold text-gray-800 dark:text-white text-xs md:text-base'>
                            <Link rel="noopener noreferrer"
                                href="/profile"
                                className='hover:text-gray-600 dark:hover:text-gray-200 flex gap-2'>
                                <p className='mt-2'>View My courses</p>
                                <AiOutlineArrowRight size={16} className='mt-3' />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index