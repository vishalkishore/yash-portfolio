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
        <div className="dark:bg-black">
            <HeroSection></HeroSection>

            <div className="w-full dark:bg-[#0a0b0d]">
            <div id="about-section" className="max-w-7xl mx-auto p-10 flex flex-col gap-3 md:flex-row ">
                <div className="flex-1 w-full ">
                    <h1 className="text-3xl md:text-3xl text-black dark:text-white  text-center font-semibold">Education</h1>
                    <EducationSection data={educationData}></EducationSection>
                </div>
                <div className="flex-1 w-full">
                <h1 className="text-3xl md:text-3xl text-black dark:text-white  text-center font-semibold">Experience</h1>
                <ExperienceSection data={expData}></ExperienceSection>
                </div>
            </div>
            </div>



            <ProjectSection id={"projects"}></ProjectSection> 
            
            <SkillsSection className="bg-[#0a0b0d]">
            </SkillsSection>

            <div className="w-full dark:bg-[#0a0b0d]">
            <div id="about-section" className="max-w-7xl mx-auto p-10 flex flex-col gap-3 md:flex-row ">
                <div className="flex-1 w-full ">
                    <h1 className="text-3xl md:text-3xl text-black dark:text-white  text-center font-semibold">Position of Responsiblity</h1>
                    <EducationSection data={porData}></EducationSection>
                </div>
                <div className="flex-1 w-full">
                <h1 className="text-3xl md:text-3xl text-black dark:text-white  text-center font-semibold">Experience</h1>
                <ExperienceSection data={achieveData}></ExperienceSection>
                </div>
            </div>
            </div>

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
        
        </div>
    )


}

const educationData = [
    {
      title: 'Indian Institite of Technology Jodhpur',
      timeline: '2022-Present',
      content: `B.Tech Mechanical Engineering | CGPA - 9.10`
    },
    {
      title: 'HSC Maharsahtra State Board',
      timeline: '2022',
      content: `Senior Secondary | 95.0% `
    },
    {
      title: 'IGCSE Board',
      timeline: '2020',
      content: `Secondary |92.0%`
    },
   
  ];

const porData = [
{
    title: 'Overall Coordinator, Robotics Society IIT Jodhpur',
    timeline: 'Present',
    content: ``
},
{
    title: 'Head: Events, E-cell IIT Jodhpur',
    timeline: 'Present',
    content: `Coordinated E-Conclave, Inicio events, managed speakers, students, and office communications.`
},
{
    title: 'Subsystem Head, Automobile Society',
    timeline: 'Present',
    content: `Being head of Rollcage vertical, worked on dynamics of the rollcage (chassis) of the ATV vehicle that we planned
    to build for the SAE eBAJA competition.`
},

];

const achieveData = [
    {
        title: 'Department Rank 1,(CGPA) Mechanical Deparment',
        timeline: 'Present',
        content: ``
    },
    {
        title: 'Finalist,Techfest, Rowboatics IIT Bombay',
        timeline: 'December 2023',
        content: `Designed and 3D printed the Boat structure, including hull cover and other basic components keeping in mind the
        streamlining of the boat. Electronics: Futuba 6-Channel Receiver and Transmitter, ESC, BLDC, Servo.
        `
    },
    {
        title: 'Subsystem Head, Automobile Society',
        timeline: 'Present',
        content: `Being head of Rollcage vertical, worked on dynamics of the rollcage (chassis) of the ATV vehicle that we planned
        to build for the SAE eBAJA competition.`
    },
    
    ];
    

const expData = [
    {
      title: 'ISRO Robotics Challenge\nIRoC URSC 2024',
      timeline: 'Jan. 2024 - Present',
      content: `• Tools and Technologies: CAD Modelling, Fusion 360, Rocker-Bogie Mechanism Design, Finite Element Analysis\n
      • As Mechanical Subsystem Head, researched greatly over mechanics of Space Rovers, Wheel Design, Load Analysis
      and Team Management.
      `
    },
    {
      title: 'Student Research Assistant',
      timeline: 'Nov 2023 - Jan. 2024',
      content: `• Tools and Technologies: Ansys Workbench, Finite Element Analysis/ Method (FEA/FEM), Acoustic Analysis,
      Ansys Mechanical, Ansys Electrical\n
      • Worked under Professor Amrita Puri to learn Ansys software simulations for mechanical and electrical subsystems.\n
      • Researched alongside various students on the functioning and mathematics of Brushless DC motors and DC motors
      used in loudspeakers and how efficiecy of loudpseakers can be altered by variation in deifferent parameters.
      `
    },
   
  ];



