import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
// Framer-Motion
import { motion } from "framer-motion"

const index = () => {
    return (
        <div className='mx-8 mb-24 md:mx-28 lg:mx-64'>
            <Head>
                <title>Find Your New Career / Upskill Hub</title>
                <meta
                    name="description"
                    content="Find Your New Career: Upskill Hub"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Find Your New Career: Upskill Hub" />
                <meta property="og:description" content="Find Your New Career: Upskill Hub" />
                {/* Sitemap */}
            </Head>
            <h1 className="mt-6 text-2xl font-bold text-center font-OpenSans">
                Find Your New Career
            </h1>

            <div className='justify-center lg:flex'>
                {/* Column 1 */}
                <div className="flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.4,
                        }}
                    >
                        {/* Mobile and Tablet */}
                        <Image
                            src="/images/pages/findYourCareerLandscape-min.jpg"
                            width={550}
                            height={300}
                            alt="Explore Landscape"
                            className="mx-auto mt-4 lg:hidden rounded-xl"
                        />
                        {/* Desktop */}
                        <Image
                            src="/images/pages/findYourCareerPortrait-min.jpg"
                            width={300}
                            height={300}
                            alt="Find Your Career Portrait"
                            className="hidden mt-6 rounded-xl lg:block"
                        />
                    </motion.div>
                </div>
                {/* Column 2 */}
                <div className='max-w-3xl mx-auto mt-6 text-justify dark:text-gray-400 '>
                    <p>
                        <span className='font-bold text-black dark:text-white'> 1. Assess your skills and interests:</span> Take some time to reflect on your current skills, interests, and values, and how they align with different careers. You can use self-assessment tools and quizzes to help you identify potential career paths.
                    </p>
                    <br></br>
                    <p>
                        <span className='font-bold text-black dark:text-white'>2. Research potential careers: </span> Research different careers that align with your skills and interests. Look into the typical duties, required education, and job outlook for each career.
                    </p>
                    <br></br>
                    <p>
                        <span className='font-bold text-black dark:text-white'>3. Network:</span> Reach out to people in your desired field and ask them about their experiences. Attend networking events and job fairs to learn more about specific companies and job opportunities.
                    </p>
                    <br></br>
                    <p>
                        <span className='font-bold text-black dark:text-white'>4. Gain relevant experience:</span> Look for ways to gain experience in your desired field, whether through internships, volunteer work, or freelance projects.
                    </p>
                    <br></br>
                    <p>
                        <span className='font-bold text-black dark:text-white'>5. Consider additional education or training: </span>Consider if additional education or training is necessary for the career you desire. If yes, research different programs that align with your goals.
                    </p>
                    <br></br>
                    <p>
                        <span className='font-bold text-black dark:text-white'>6. Update your resume and apply for jobs:</span> Once you have a clear idea of the career path you want to pursue, start updating your resume and cover letter to reflect your qualifications and experience. Then start apply for jobs that align with your career goals.
                    </p>
                    <br></br>
                    <p>
                        <span className='font-bold text-black dark:text-white'>7. Keep an open mind and be flexible: </span>Finding a new career can take time and may require some trial and error. Keep an open mind and be willing to consider different options and opportunities as they come up.
                    </p>

                    {/* Chat GPT */}
                    {/* <div>
                        <p className="mt-6 text-xs text-center md:text-sm dark:text-gray-400">
                            From ChatGPT: Optimizing Language Model for Dialogue
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default index