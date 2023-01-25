import React from 'react'

const CoursesCard = (props: { icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; paragraph: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; getstarted: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
    return (
        <div>
            {/* Card */}
            <div>
                <div className="relative dark:border-white -top-6 -right-6">
                    <div className='absolute'>
                        {props.icon}
                    </div>
                </div>
                <div className="pt-10 overflow-hidden text-gray-800 shadow-xl font-OpenSans rounded-xl h-72 w-80 bg-slate-50 ">
                    <div className="px-6 py-4">
                        <h2 className="text-xl font-extrabold">{props.title}</h2>
                        <p className="mt-4 text-gray-500">{props.paragraph}</p>
                        <h4 className="mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{props.getstarted}</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoursesCard