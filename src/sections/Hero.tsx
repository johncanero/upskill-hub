import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=''>
      <div>
        {/* Description */}
        <div className='ml-44'>
          <h1 className='max-w-lg text-5xl font-bold mt-44'>Maximize skill, minimuze budget</h1>
        </div>

        {/* Image */}
        <div className='relative lg:-mt-28'>
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