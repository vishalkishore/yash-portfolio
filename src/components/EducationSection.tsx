"use client";

import React from "react";
import Accordian, { AccordianItem } from "./ui/accordion";

export function EducationSection({className}:{className?:string}) {
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
      title: 'Indian Institite of Technology Johpur',
      timeline: 'B.Tech Mechanical Engineering | 2022-2026',
      content: `CGPA - 9.10
      `
    },
    {
      title: 'HSC Maharsahtra State Board',
      timeline: 'Senior Nov 2023 - Jan. 2024',
      content: `• Tools and Technologies: Ansys 
      `
    },
    {
      title: 'IGCSE Board',
      timeline: 'Secondary Nov 2023 - Jan. 2024',
      content: `• Tools and Technologies: Ansys 
      `
    },
   
  ];