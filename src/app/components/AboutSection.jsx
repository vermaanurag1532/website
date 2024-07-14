"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Development: Reactjs, NextJs, Django, Nodejs, Socket.io</li>
                <li>Cloud: MongoDB, AWS, GCP, AZURE</li>
                <li>Graphics: Figma, Canva, Blunder</li>
                <li>Python: OpenCV, Numpy, Pandas, yolo, TensorFlow</li>
                <li>Microprocessor/Controllers: Resberry Pi, Aurdino, ESP 32</li>
                <li>DSA: Pupil at codeforces , 280+ Leetcode Problems</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className='list-disc pl-2'>
                <li>I.E.T. Lucknow - B.Tech (2021-2025)</li>
                <li>G.H.A - Intermediate (2020)</li>
             
            </ul>
        )
    },
    {
        title: "Achievements",
        id: "Achievements",
        content: (
            <ul className='list-disc pl-2'>
                <li>Founded a Startup</li>
                <li>Smart India Hackathon 2023 WINNERS</li>
                <li>FlipKart Grid 5 semi Finalist</li>
                <li>Pupil at Codeforces</li>
                <li>280+ DSA problem at Leetcode</li>

            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section id='about' className='text-white'>
            <div  className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/4.png" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I'm Anurag Verma, a third-year Electronics and Communication Engineering student at IET Lucknow and the founder of WHILE. Supported by a government grant, WHILE is a social media platform designed to enhance mental growth and productivity by providing essential services in one place. Our mission is to revolutionize social media to boost youth productivity and contribute to national development. With notable achievements like winning the Smart India Hackathon 2023 and ranking 21st in the Microsoft Imagine Cup 2024, we're passionate about using technology for positive change. Let's inspire and innovate together!</p>
                    <div className='flex flex-row justify-start mt-8 '>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {" "} Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}> {" "} Education {" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("Achievements")} active={tab === "Achievements"}> {" "} Achievements{" "}</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection