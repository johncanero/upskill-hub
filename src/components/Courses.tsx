import React from 'react'
import CoursesCard from './CoursesCard'
import { BiRun } from "@react-icons/all-files/bi/BiRun"
import { IoMdCreate } from "@react-icons/all-files/io/IoMdCreate"
import { HiCamera } from "@react-icons/all-files/hi/HiCamera"
import { GrBitcoin } from "@react-icons/all-files/gr/GrBitcoin"
import { FaBusinessTime } from "@react-icons/all-files/fa/FaBusinessTime"

const Courses = () => {
  return (
    <div>

      <div className='flex flex-wrap justify-center gap-10 mt-12 md:mt-24 lg:mx-48 lg:mt-52 mb-36'>

        {/* Card */}
        <div>
          <div className="pt-10 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
            <div className="px-6 py-4">
              <h2 className="mb-2 text-3xl font-bold w-60 font-OpenSans">Check out our most popular courses!</h2>
            </div>
          </div>
        </div>


        <CoursesCard
          icon={<BiRun size={54} className='p-3 text-white bg-blue-500 rounded-full ' />}
          title="Animation"
          paragraph="Learn the latest animation techniques to create stunning motion design and captivate your audience."
          getstarted="Get Started"
          path="/"
        />


        <CoursesCard
          icon={<IoMdCreate size={54} className='p-3 text-white bg-blue-500 rounded-full ' />}
          title="Design"
          paragraph="Create beautiful, usable products and development to help shape the future of how the world works in digital and physical world."
          getstarted="Get Started"
          path="/"
        />

        <CoursesCard
          icon={<HiCamera size={54} className='p-3 text-white bg-blue-500 rounded-full ' />}
          title="Photography"
          paragraph="Explore critical fundamentals like lighting, composition, and focus to capture exceptional and worthwhile photos."
          getstarted="Get Started"
          path="/"
        />

        <CoursesCard
          icon={<GrBitcoin size={54} className='p-3 text-white bg-blue-500 rounded-full ' />}
          title="Crypto"
          paragraph="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
          getstarted="Get Started"
          path="/"
        />

        <CoursesCard
          icon={<FaBusinessTime size={54} className='p-3 text-white bg-blue-500 rounded-full ' />}
          title="Business"
          paragraph="A step-by-step playbook to help you start, scale, and sustain your business without ourside environment."
          getstarted="Get Started"
          path="/"
        />

      </div>


    </div>
  )
}

export default Courses