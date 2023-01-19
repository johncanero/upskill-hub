import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=''>
      <div>
        {/* Description */}
        <div className='ml-52'>
          <h1 className='max-w-lg text-5xl font-bold mt-44'>Maximize skill, minimuze budget</h1>

          <p className='max-w-xl'>Our modern courses across range of in-demand skills will give you the knowledge you need to live the life you want.</p>
        </div>

        {/* Image */}
        <div className='relative lg:-mt-44'>
          <Image
            src="/images/e-learningDesktop2-min.png"
            width={720}
            height={720}
            alt="Hero Logo"
            className="absolute right-0 lg:-mt-96"
          />
        </div>

      </div>
    </div>
  )
}

export default Hero