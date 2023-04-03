/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// Icon
import { CgProfile } from "@react-icons/all-files/cg/CgProfile"
import { BsChevronDown } from '@react-icons/all-files/bs/BsChevronDown'
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight'

const index = () => {
    return (
        <div className='mb-28'>
                  <Head>
                <title>Profile / Upskill Hub</title>
                <meta
                    name="description"
                    content="Profile: Upskill Hub"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Profile: Upskill Hub" />
                <meta property="og:description" content="Profile: Upskill Hub" />
                {/* Sitemap */}
            </Head>
            {/* <h1 className="mt-6 text-xl font-bold text-center md:text-2xl font-OpenSans">
                Profile
            </h1> */}
            <div>
                {/* Component: Rectangle Background: Grow with Upskill Hub */}
                <div className="px-6 text-black md:px-12 lg:pl-64 h-44 md:h-48 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600 dark:text-white font-OpenSans">
                    <h2 className='pt-8 text-2xl font-bold text-white md:pt-12 md:text-3xl lg:text-4xl dark:text-white'>Grow with Upskill Hub</h2>
                    <p className='mt-1 text-white lg:text-lg dark:text-white '>Learner help support: <Link
                        rel="noopener noreferrer"
                        href="https://upskillhub-by-johncanero.vercel.app/"
                        className='hover:text-gray-900'>
                        https://upskillhub-by-johncanero.vercel.app/
                    </Link>
                    </p>
                </div>

                {/* Browse Catalog - My Courses - How it Works */}
                <div className='h-16 px-6 pt-4 text-sm shadow-lg md:px-12 lg:pl-64 font-OpenSans dark:text-gray-400 md:text-base'>
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
                        <div className='font-semibold text-gray-800 lg:mr-56 dark:text-white'>
                            <Link rel="noopener noreferrer"
                                href="/profile"
                                className='dark:text-blue-500 hover:text-gray-600 dark:hover:text-gray-200'>
                                <div className='flex gap-2'>
                                    <p className=''>How it works</p>
                                    <BsChevronDown className='mt-1' size={16} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* My Recent Activity and View my Courses*/}
                <div className='h-20 px-6 pt-12 md:px-12 lg:pl-64 md:pt-14 font-OpenSans'>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-md md:text-2xl'>My Recent Activity</p>

                        {/* View my courses */}
                        <div className='text-xs font-semibold text-gray-800 lg:mr-56 md:text-base dark:text-blue-500'>
                            <Link rel="noopener noreferrer"
                                href="/profile"
                                className='flex gap-2 hover:text-gray-600 dark:hover:text-gray-200'>
                                <p className='mt-1 md:mt-2'>View my courses</p>
                                <AiOutlineArrowRight size={16} className='mt-1 md:mt-3' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Let's begin learning */}
                <div>
                    <div className="px-6 mx-6 mt-1 text-black border-2 border-gray-300 dark:border-gray-800 md:px-12 lg:ml-64 max-h- md:h-56 lg:h-44 md:mt-4 lg:mt-5 dark:text-white font-OpenSans dark:bg-gray-900 md:mx-12 lg:mx-64">
                        <div className='pt-7 pb-7 md:pt-8 lg:pt-7 md:flex'>
                            {/* Icon */}
                            <div className='mx-auto w-28 md:mx-0 md:w-80 lg:w-24 md:pt-2'>
                                <Image
                                    src="/images/pages/rocketIcon.png"
                                    width={300}
                                    height={300}
                                    alt="Rocket Icon"
                                    className=""
                                />
                            </div>

                            {/* Let's begin learning! */}
                            {/* Paragraph */}
                            <div className='text-center md:text-left pt-7 md:pt-0 lg:max-w-2xl'>
                                <p className='text-xl font-semibold md:ml-7'>Let's begin learning!</p>
                                <p className='mt-2 text-sm lg:mr-12 md:ml-7'>This section will show your course in progress, so you can easily pick up where you left off.</p>
                                <p className='mt-4 text-sm md:mt-2 lg:mr-12 md:ml-7'>You can start by browsing through the recommended collections, searching the entire course catalog, or selecting a category to find the course you're looking for.</p>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index