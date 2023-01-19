import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=''>
      <div>
        {/* Description */}
        <div className='ml-56'>
          <h1 className='max-w-lg mt-32 text-6xl font-bold font-OpenSans'>Maximize skill, minimuze budget</h1>

          <p className='max-w-sm mt-8 text-base text-gray-500 dark:text-gray-400'>Our modern courses across range of in-demand skills will give you the knowledge you need to live <br></br>the life you want.</p>

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
          <div className='relative lg:-top-72'>
            <Image
              src="/images/e-learningDesktop2-min.png"
              width={750}
              height={750}
              alt="Hero Logo"
              className="absolute right-0 lg:-top-96"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero