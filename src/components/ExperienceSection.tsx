"use client";

import React from "react";
import Accordian, { AccordianItem } from "./ui/accordion";

export function ExperienceSection({className}:{className?:string}) {
  return (
    <>
    <div className={`${className} mt-5`}>
      <div className="w-full md:w-[90%] mx-auto">
        <Accordian className="w-full" >
          {accordionData.map(({  title,timeline,content }) => (
            <AccordianItem className="text-[#dddddd]" value={title} key={title} title={title} timeline={timeline}>
              <p className="text-zinc-400 whitespace-pre-line tracking-wide leading-relaxed text-sm ">
              {content}
              </p>
            </AccordianItem>
          ))}
        </Accordian>
      </div>
    </div>
    </>
  );

}

const accordionData = [
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