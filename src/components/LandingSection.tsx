import React from "react";
import {HeroSection}  from "./HeroSection";

import { SkillsSection } from "./SkillsSection";
import { ProjectSection } from "./ProjectSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";

export  function LandingSection() {

    return (
        <>
            <HeroSection></HeroSection>

            <div id="about-section" className="max-w-7xl mx-auto p-10 flex flex-col gap-3 md:flex-row  dark:bg-black">
                <div className="flex-1 w-full ">
                    <h1 className="text-3xl md:text-3xl text-black dark:text-white  text-center font-semibold">Education</h1>
                    <EducationSection></EducationSection>
                </div>
                <div className="flex-1 w-full">
                <h1 className="text-3xl md:text-3xl text-black dark:text-white  text-center font-semibold">Experience</h1>
                <ExperienceSection></ExperienceSection>
                </div>
            </div>

            <SkillsSection className="bg-[#0a0b0d]">
               
            </SkillsSection>

            <ProjectSection id={"projects"}></ProjectSection> 
            
            <div className="dark:bg-black p-10">
            <div id="contact-section" className="dark:bg-black h-96 relative w-[90%] mx-auto overflow-hidden  flex flex-col items-center justify-center rounded-lg">
            <div className="absolute rounded-lg inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-4xl text-xl dark:text-white relative z-20 font-semibold italic")}>
                Get in Touch
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                Contact Me at -----
            </p>
            </div>
            </div>
            <div className="w-full flex items-center justify-center dark:text-white dark:bg-[#0a0b0d] py-5">
                <h1>Copyright @ 2024</h1>
            </div>
        
        </>
    )


}



