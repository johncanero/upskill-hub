import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=''>
      <div>
        {/* Description */}
        <div className='ml-12 lg:ml-64'>
          <h1 className='mt-32 font-bold md:max-w-sm lg:max-w-2xl md:text-4xl lg:text-7xl font-OpenSans'>Maximize skill, minimize budget</h1>

          <p className='mt-8 text-base text-gray-500 md:max-w-xs lg:max-w-sm dark:text-gray-400 font-OpenSans'>Our modern courses across range of in-demand skills will give you the knowledge you need to live the life you want.</p>

          <div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/upskill-hub/"
            >
              <button className="w-40 h-12 mt-12 mr-6 font-bold text-white rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 font-OpenSans">
                Get Started
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className='relative md:-top-40 lg:-top-80'>
            <Image
              src="/images/e-learningDesktop6.png"
              width={800}
              height={800}
              alt="Hero Logo"
              className="absolute right-0 lg:max-w-4xl md:max-w-xl md:-right-16 lg:-right-0 md:-top-96 lg:-top-96"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero