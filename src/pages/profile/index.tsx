import React from 'react'
// Icon
import { CgProfile } from "@react-icons/all-files/cg/CgProfile"

const index = () => {
    return (
        <div>
            {/* <h1 className="mt-6 text-xl font-bold text-center md:text-2xl font-OpenSans">
                Profile
            </h1> */}

            <div className='flex justify-center mt-10'>
                <CgProfile size={80} />
            </div>
        </div>
    )
}

export default index