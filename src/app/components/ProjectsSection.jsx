"use client"
import React, { useState , useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {animate, motion , useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Start Up website",
        description: "Ed tech Social media with scalable backend",
        image: "/images/projects/p2.jpg",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/vermaanurag1532/social",
        previewUrl: "https://www.while.co.in/",
    },
    {
        id: 2,
        title: "Visionary",
        description: "AI/ML Project: Eye for BLind Person",
        image: "/images/projects/ai.jpeg",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/vermaanurag1532/ImagineCup",
        previewUrl: "https://imagine-cup-ten.vercel.app/",
    },
    // {
    //     id: 3,
    //     title: "Crime-Detection Web Application",
    //     description: "A collaborative project developed to view the crime rate in a particular area.",
    //     image: "/images/projects/crime.jpg",
    //     tag: ["All", "Web"],
    //     gitUrl: "https://github.com/Paridhi-28/sheHacks-7.O.git",
    //     previewUrl: "https://crimevue.vercel.app/",
    // },
    {
        id: 4,
        title: "E-commerce Web Application",
        description: "GenAi Fashion Recommandation with Ai chatBot.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/vermaanurag1532/fashion-recommendation-system-",
        previewUrl: "https://fashion-website-evqjorrm8-paridhis-projects.vercel.app/",
    },
    {
        id: 5,
        title: "Medical Platform",
        description: "bio starup webite",
        image: "/images/projects/2.jpeg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/vermaanurag1532/biotox",
        previewUrl: "https://biotox.vercel.app/",
    },
    {
        id: 6,
        title: "GDSC Website",
        description: "This website is developed by using Django",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/vermaanurag1532/gdsc_django",
        previewUrl: "",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

const cardVariants = {
    initial : {y:50, opacity:0},
    animate : {y:0, opacity:1}
}

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
              
              <ProjectTag onClick={handleTagChange} name="All" isSelected = {tag === "All"} />
              <ProjectTag onClick={handleTagChange} name="Web" isSelected = {tag === "Web"} />
                </div>
                <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) =>(
                    <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial"
                    transition={{duration: 0.3, delay: index * 0.4}}
                     animate= {isInView ? "animate" : "initial"}>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                    </motion.li>
                    ))}
            </ul>
        </section>
    )
}

export default ProjectsSection