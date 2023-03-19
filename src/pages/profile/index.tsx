import React from 'react'
import Link from 'next/link'
// Icon
import { CgProfile } from "@react-icons/all-files/cg/CgProfile"

const index = () => {
    return (
        <div>
            {/* <h1 className="mt-6 text-xl font-bold text-center md:text-2xl font-OpenSans">
                Profile
            </h1> */}
            {/* Rectangle Background */}
            <div className="md:px-12 px-6 lg:pl-64 h-44 md:h-52 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600">
                <h2 className='md:pt-12 md:text-3xl text-2xl pt-8 lg:text-4xl font-semibold'>Grow with Upskill Hub</h2>
                <p className='lg:text-lg mt-1'>Learner help support: <Link target="_blank"
                        rel="noopener noreferrer"
                        href="https://upskillhub-by-johncanero.vercel.app/"
                        className='hover:text-gray-800'>
                        https://upskillhub-by-johncanero.vercel.app/
                    </Link>

                </p>
            </div>
            <div className='flex justify-center mt-10'>
                <CgProfile size={80} />
            </div>
        </div>
    )
}

export default index