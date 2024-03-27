import React from "react";
import {HeroSection}  from "./HeroSection";
import { ProjectSection } from "./ProjectSection";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";

export  function LandingSection() {

    return (
        <>
            <HeroSection></HeroSection>

            <div className="max-w-5xl mx-auto mt-10 p-4 flex flex-col gap-3 md:flex-row justify-center items-center">
                <div className="flex-1 w-full bg-slate-200">
                    <h1 className="text-3xl text-center">Education</h1>
                </div>
                <div className="flex-1 w-full bg-slate-500">
                <h1 className="text-3xl text-center">Experience</h1>
                </div>
            </div>

            <ProjectSection id={"projects"}></ProjectSection> 

            <div className="h-96 relative w-[90%] mx-auto mt-8 overflow-hidden  flex flex-col items-center justify-center rounded-lg">
            <div className="absolute rounded-lg inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-semibold italic")}>
                Get in Touch
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                Framer motion is the best animation library ngl
            </p>
            </div>

            <div className="w-full flex items-center justify-center text-white bg-[#111] mt-5 py-5">
                <h1>Copyright @ 2024</h1>
            </div>
        
        </>
    )


}



