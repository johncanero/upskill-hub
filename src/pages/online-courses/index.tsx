import React from 'react'
import Image from 'next/image'
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
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/animation-min.jpg"
                                width={300}
                                height={300}
                                alt="Animation"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">Animation</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/woodwork2-min.jpg"
                                width={300}
                                height={300}
                                alt="Woodwork"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">Woodworking Basics</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/music-production.jpg"
                                width={300}
                                height={300}
                                alt="Music Production"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">Music Production</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* Card 4 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/pottery3-min.jpg"
                                width={300}
                                height={300}
                                alt="Pottery"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">Pottery</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 5 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/ux-design.jpg"
                                width={300}
                                height={300}
                                alt="UX Design"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">UX Design</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 6 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/film-production.jpg"
                                width={300}
                                height={300}
                                alt="Film Production"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">Film Production</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 7 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/programming-min.jpg"
                                width={300}
                                height={300}
                                alt="Programming"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">Programming</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 8 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/dance-min.jpg"
                                width={300}
                                height={300}
                                alt="Dancing"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">Dancing</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 9 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div className="w-full overflow-hidden text-white shadow-xl rounded-xl h-72 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        <div>
                            {/* Image */}
                            <Image
                                src="/images/courses/painting-min.jpg"
                                width={300}
                                height={300}
                                alt="Painting"
                                className="lg:block"
                            />
                            <div className='flex justify-center mt-2'>
                                <h2 className="mt-2 mb-2 font-bold text-gray-900 text-md font-OpenSans">Painting</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>



            </div>
        </div>
    )
}

export default index