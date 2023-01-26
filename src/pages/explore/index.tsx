import React from 'react'
import Image from 'next/image'

const index = () => {
    return (
        <div>
            {/* <h1 className="mt-6 text-2xl font-bold text-center font-OpenSans">
                Explore
            </h1> */}

            <div className='flex justify-center'>
                <Image src="/images/pages/explorePage.jpg"
                    width={1200}
                    height={1000}
                    alt="Explore Unsplash"
                    className=" max-h-fit" />
            </div>

        </div>
    )
}

export default index