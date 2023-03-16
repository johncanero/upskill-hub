/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
// Framer-Motion
import { motion } from "framer-motion"

const index = () => {
    return (
        <div className='mx-8 mb-24 md:mx-28 lg:mx-64'>
            <h1 className="mt-6 text-2xl font-bold text-center font-OpenSans">
                Explore
            </h1>

            <div className='justify-center lg:flex'>

                {/* Column 1 */}
                <div>
                    <div className='max-w-3xl mx-auto mt-6 text-justify dark:text-gray-400 '>
                        <p>
                            <span className='font-bold text-black dark:text-white'>Upskill Hub</span> is where users can discover a wide variety of online courses, mentors, and sponsors. The page is designed to be user-friendly and easy to navigate, making it easy for users to find the courses and mentors that are right for them.
                        </p>
                        <br></br>
                        <p>
                            <span className='font-bold text-black dark:text-white'>Mentors</span> at the Upskill Hub are experienced professionals in their field who have been hand-picked by the Upskill Hub team to provide guidance and support to students throughout their course. They are available to answer questions, provide feedback, and offer advice to help students succeed.
                        </p>
                        <br></br>
                        <p>
                            <span className='font-bold text-black dark:text-white'>Sponsors</span> provided are organizations that have partnered with Upskill Hub to provide resources and support to students. They may offer scholarships, internships, or other opportunities to help students further their education and career goals.
                        </p>
                        <br></br>
                        <p>
                            <span className='font-bold text-black dark:text-white'>Online Courses</span> featured cover a wide range of topics, from business and technology to design and the arts. Each course is designed to be interactive and engaging, and includes a variety of learning materials such as videos, quizzes, and assignments to help students learn and retain the material.
                        </p>
                        <br></br>
                        <p>
                            Overall, Upskill Hub is a one-stop-shop for students looking to expand their knowledge and skills, and for professionals looking to advance their careers. With a wide variety of courses, mentors, and sponsors to choose from, <span className='italic font-semibold text-black dark:text-white'>it's a great resource for anyone looking to upskill in a specific field.</span>
                        </p>
                    </div>

                    {/* Chat GPT */}
                    <div>
                        <p className="mt-6 text-xs text-center md:text-sm dark:text-gray-400">
                            From ChatGPT: Optimizing Language Model for Dialogue
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.4,
                        }}
                    >
                        {/* Mobile and Tablet */}
                        <Image
                            src="/images/pages/exploreLandscape-min.jpg"
                            width={550}
                            height={300}
                            alt="Explore Landscape"
                            className="mx-auto mt-6 lg:hidden rounded-xl"
                        />
                        {/* Desktop */}
                        <Image
                            src="/images/pages/explorePortrait-min.jpg"
                            width={300}
                            height={300}
                            alt="Explore Portrait"
                            className="hidden ml-20 mt-6 rounded-xl lg:block"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default index