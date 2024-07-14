"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start' >
                    <h3 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#38d9c9] to-[#3b38d9]'>Hello, I am{" "}</span>
                        <br></br>

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Anurag Verma',
                                400, // wait 1s before replacing "Mice" with "Hamsters"
                                'Start Up Founder',
                                400,
                                'Web Developer',
                                400,
                                'Cloud Architect',
                                400,
                                'AI/ML Enthusiast',
                                400
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />


                    </h3>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>I'm Anurag Verma, a third-year ECE student at IET Lucknow and the founder of WHILE. Our government-backed startup is a social media platform designed to enhance mental growth and productivity. We're transforming social media to boost youth productivity and drive national development. I'm passionate about using technology for positive change and eager to connect with fellow innovators. Let's inspire and innovate together!</p>
                    <div>
                        <Link href="mailto:agarwalparidhi07@gmail.com" passHref>
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#38d9c9] to-[#3b38d9] hover:bg-slate-200 text-white'>
                                Hire Me
                            </button>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1cIU1YVxC96JIKTIJ-pVGGSqoGgfW2JCZ/view?usp=sharing" passHref>
                            <button className='px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-[#38d9c9] to-[#3b38d9] hover:bg-slate-800 text-white border mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span></button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3b38d9] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/4 -right-4 transform -translate-x-1/2 -translate-y-1/2'>..</div>
                    <div className="bg-[radial-gradient( to-transparent rounded-full h-80 w-80 z-0  absolute top-1/4 -right-4 transform -translate-x-1/2 -translate-y-1/2'">
                        <Image src='/images/Anurag.png'
                            alt='my-img'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={400}
                            height={500}
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default HeroSection
