"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const works = [
   {
        num: '01',
        category: 'Project Management',
        title: 'Project 1',
        description: 'fluxo- a project management appilcation',
        stack: [{ name: "ReactJS" }, { name: "NodeJS" }, { name: "ExpressJS" }, { name: "PostgreSQL" }],
        image: '/assets/work/thumb6.png',
        live: "https://fluxo-virid.vercel.app/",
        github: 'https://github.com/applemagic-01/fluxo'
    },
    {
        num: '02',
        category: 'Unsupervised feature learning for polymorphic malware',
        title: 'Project 2',
        description: 'Netmorph- Unsupervised feature learning for polymorphic malware using Autoencoder and Random Forest',
        stack: [{ name: "Python" }],
        image: '/assets/work/thumb4.png',
        live: "",
        github: 'https://github.com/applemagic-01/netmorph'
    },
    {
        num: '03',
        category: 'Login System',
        title: 'Project 3',
        description: 'Basic Login System',
        stack: [{ name: "ReactJS" }, { name: "NodeJS" }, { name: "ExpressJS" }, { name: "MongoDB" }],
        image: '/assets/work/thumb4.png',
        live: "https://mern-auth-frontend-0m3x.onrender.com/",
        github: 'https://github.com/applemagic-01/mern-auth-login'
    },
    {
        num: '04',
        category: 'fullstack',
        title: 'Project 4',
        description: 'Comprehensive online platform that connects users with local home service providers.',
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "GraphQL" }, { name: "HyGraph" },],
        image: '/assets/work/thumb1.png',
        live: "",
        github: 'https://github.com/applemagic-01/we-help'
    },
    {
        num: '05',
        category: 'mobile application',
        title: 'Project 5',
        description: 'API based Weather Application',
        stack: [{ name: "Flutter" }],
        image: '/assets/work/thumb2.png',
        live: "",
        github: 'https://github.com/applemagic-01/weather-app'
    },
    {
        num: '06',
        category: 'mobile application',
        title: 'Project 6',
        description: 'Mobile chat Application',
        stack: [{ name: "Flutter" }, { name: "Firebase" }],
        image: '/assets/work/thumb3.png',
        live: "",
        github: 'https://github.com/applemagic-01/chat-app'
    },

    {
        num: '07',
        category: 'mobile application',
        title: 'Project 7',
        description: 'Simple E-Commerce Application',
        stack: [{ name: "Flutter" }],
        image: '/assets/work/thumb_5.png',
        live: "",
        github: 'https://github.com/applemagic-01/shopping-app'
    },
]

const Projects = () => {
    const [work, setProjects] = useState(works[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update work state index based on current slide index
        setProjects(works[currentIndex])
    }


    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col py-12 justify-center xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="font-extrabold leading-none text-transparent text-8xl text-outline" style={{
                                WebkitTextStroke: '2px white', // Adjust thickness and color
                                textStroke: '2px white',
                                color: 'transparent'
                            }}>{work.num}</div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{work.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60 ">{work.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {work.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent ">{item.name}
                                        {/* remove the last comma */}
                                        {index !== work.stack.length - 1 && ","}</li>
                                })}
                            </ul>
                            { /* border*/}
                            <div className="border border-white/20"></div>

                            { /* buttons*/}
                            <div className="flex items-center gap-4">
                                { /* live project button*/}
                                {work.live?.trim() !== "" && (
    <Link href={work.live}>
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                    <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Live Project</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </Link>
)}

                                { /* Github project button*/}
                                <Link href={work.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                                                <BsGithub className="text-3xl text-white group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent >
                                                <p >Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {works.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group justify-center flex items-center">
                                        { /* overlay*/}
                                        <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                                        { /* image*/}
                                        <div className="relative w-full h-full ">
                                            <Image src={project.image} fill className="w-full h-auto object-contain " alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            { /* slider buttons*/}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none " btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects
