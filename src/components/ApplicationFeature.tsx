/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
// Framer-Motion
import { motion } from "framer-motion"

const ApplicationFeature = () => {
    return (
        <div>
            <div className='justify-center mx-auto mt-10 md:mt-14 lg:mt-16 mb-36 lg:mx-56'>
                <div className="mb-4">
                    <h2 className="mx-6 mb-3 text-lg font-semibold text-center md:text-2xl lg:text-3xl md:mx-20 lg:mx-24">Welcome to Upskill Hub - where we help you enhance your skills and maximize your potential.</h2>
                    <p className="mx-8 text-base text-center lg:text-lg md:mx-32 lg:mx-44"> Our online courses and application provide access to a wide range of in-demand skills, from digital marketing and coding to graphic design and project management. </p>
                </div>

                {/* Application Feature */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}
                >
                    <Image
                        src="/images/upSkillHubSlider.png"
                        width={1000}
                        height={1000}
                        alt="Application Feature: Responsive (Mobile, Tablet, and Desktop)"
                        className="my-8 max-w-xs md:max-w-2xl mx-auto lg:max-w-5xl"
                    />
                </motion.div>

                <p className="mx-8 italic text-center text-sm md:text-base lg:text-lg md:mx-28 lg:mx-48">Our expert instructors guide you every step of the way, with flexible courses designed to fit your schedule and budget.</p>
                <p className="mx-8 mt-6 italic text-center text-sm md:text-base lg:text-lg md:mx-28 lg:mx-48">Whether you're looking to boost your career, pivot to a new industry, or simply enhance your skills, Upskill Hub has got you covered. <span className='font-semibold'>Join us today and start your journey towards success!</span></p>
            </div>
        </div>
    )
}

export default ApplicationFeature