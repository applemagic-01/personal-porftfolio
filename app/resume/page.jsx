"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6"

//about data
const about = {
    title: 'About me',
    description: 'Self-motivated problem solver',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Ankith"
        },
        {
            fieldName: "Phone",
            fieldValue: "+917899463238"
        },
        {
            fieldName: "Experience",
            fieldValue: "Fresher"
        },
        {
            fieldName: "Email",
            fieldValue: "ankithpoojary0309@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Kannada"
        },
    ]
};

const experience = {
    icon: "/public/assets/resume/icons/badge.svg",
    title: "My Experience",
    description: "Worked as an Software Developer-Intern",
    items: [
        {
            company: "TechCiti Software Consulting Private Limited",
            position: "Software Developer-Intern",
            duration: "Nov/2024 - Jan/2025"
        }
    ]
}

//education data
const education = {
    icon: "/public/assets/resume/icons/cap.svg",
    title: "My Education",
    description: "Currently pursuing my Master's degree in Computer Applications",
    items: [
        {
            institution: "MITE, Moodbidri",
            degree: "MCA",
            duration: "2023-Present"

        },
        {
            institution: "Networker's Home",
            degree: "CCIE Security",
            duration: "2023"

        },
        {
            institution: "MPMC, Manipal",
            degree: "BCA",
            duration: "2019-2022"

        },
        {
            institution: "SDM PU College, Ujire",
            degree: "Pre University",
            duration: "2017-2019"

        },
    ]
}

//skills data
const skills = {
    title: "My Skills",
    description: "Skills I gained through my academic career and self learning",
    skillsList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <FaJava />,
            name: "java"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaFlutter />,
            name: "flutter"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
    ]
}

//components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";




function Resume() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
            className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] max-h-[600px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    { /*  Contents*/}
                    <div className="w-full">
                        { /*  Experience*/}
                        <TabsContent value="experience" className="w-full min-h-[550px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="min-h-[400px]">
                                    <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-start lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[350px] min-h-[60px]  lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot*/}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        })}</ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        { /*  Education*/}
                        <TabsContent value="education" className="w-full min-h-[550px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="min-h-[400px]">
                                    <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-start lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[350px] min-h-[60px]  lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot*/}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        })}</ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        { /*  Skills*/}
                        <TabsContent value="skills" className="w-full h-full min-h-[550px]">
                            <div className="flex felx-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                    <ul className="min-h-[400px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-[30px] gap-4">
                                        {skills.skillsList.map((skill, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full min-h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-5xl transition-all duration-300 group-hover:text-accent">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                        { /*  About*/}
                        <TabsContent value="about" className="w-full text-center xl:text-left min-h-[550px]">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center gap-4 py-2 xl:justify-start">
                                            <span className="w-40 text-white/60">{item.fieldName}</span>
                                            <span className="text-xl ">
                                                {item.fieldValue}
                                            </span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume