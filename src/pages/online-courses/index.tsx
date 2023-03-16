import React from 'react'
import Image from 'next/image'
// React Icons
import { BiRun } from "@react-icons/all-files/bi/BiRun"
// Framer-Motion
import { motion } from "framer-motion"

const index = () => {
    return (
        <div className='mb-24'>
            <h1 className="mt-6 text-2xl font-bold text-center font-OpenSans">
                Online Courses
            </h1>

            <div className='flex flex-wrap justify-center gap-10 mt-8 lg:mx-56 mb-36'>


                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="overflow-hidden text-white shadow-xl rounded-xl h-72 w-full bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/animation-min.jpg"
                                width={300}
                                height={300}
                                alt="Explore Portrait"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                {/* <BiRun size={20} className='text-gray-900 mr-1 mt-1' /> */}
                                <h2 className="mb-2 text-md font-bold text-gray-900 mt-2 font-OpenSans">Animation</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default index