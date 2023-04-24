import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Framer-Motion
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div>
      <div>
        <div className='mx-6 md:mx-12 lg:mx-0 lg:ml-64'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
            }}>
            <h1 className='mt-12 text-4xl font-extrabold text-gray-900 dark:text-gray-100 md:mt-32 md:max-w-sm lg:max-w-2xl md:text-4xl lg:text-7xl font-OpenSans'>Maximize skill, minimize budget</h1>
          </motion.div>

          <p className='mt-8 text-base text-gray-600 md:text-sm lg:text-base md:max-w-xs lg:max-w-sm dark:text-gray-400 font-OpenSans'>Our modern courses across range of in-demand skills will give you the knowledge you need to live the life you want.</p>

          <div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/upskill-hub/"
            >
              <button className="w-40 h-12 mr-6 font-bold text-white rounded-full mt-7 md:mt-12 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 font-OpenSans">
                Get Started
              </button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            {/* Mobile */}
            <div className='relative block md:hidden'>
              <Image
                src="/images/e-learningMobile4.png"
                width={1000}
                height={1000}
                alt="E-Learning Mobile Feature Image"
                className="mx-auto mt-6"
              />
            </div>



            {/* Desktop and Tablet */}
            <div className='relative hidden md:block md:-top-20 lg:-top-80'>
              <Image
                src="/images/e-learningDesktop6.png"
                width={800}
                height={800}
                alt="E-Learning Desktop Feature Image"
                className="absolute right-0 lg:max-w-4xl md:max-w-md md:-right-16 lg:-right-12 md:-top-96 lg:-top-96"
              />
            </div>
          </motion.div>


          {/* Sponsors */}
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className='justify-center mt-12 text-center md:flex md:flex-wrap md:justify-start md:mx-0'>
            {/* Udemy */}
            <Link
              // target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              <Image
                src="/images/udemyLogo.png"
                width={110}
                height={100}
                alt="Udemy Logo"
                className="mx-auto mt-3 md:mx-0 md:mr-4 lg:h-10 lg:w-28"
              />
            </Link>

            {/* Coursera */}
            <Link
              // target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              <Image
                src="/images/courseraLogo2.png"
                width={110}
                height={100}
                alt="Coursera Logo"
                className="w-32 mx-auto mt-10 md:mr-4 md:mt-6 lg:w-44 lg:h-5 md:mx-0"
              />
            </Link>

            {/* Edukasyon PH */}
            <Link
              // target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              <Image
                src="/images/edukasyonPH4.png"
                width={100}
                height={100}
                alt="Edukasyon PH Logo"
                className="w-32 mx-auto mt-10 lg:mt-1 md:mt-2 md:w-28 lg:w-44 lg:h-12 md:mx-0"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div >
  )
}

export default Hero