"use client";

import React from "react";
import Accordian, { AccordianItem } from "./ui/accordion";

export function EducationSection({className}:{className?:string}) {
  return (
    <>
    <div className={`${className} mt-5`}>
      <div className="w-full md:w-[90%] mx-auto">
      {accordionData.map(({  title,timeline,content }) => (
            <div key={title} className="antialiased rounded-lg w-full p-4  mb-3 bg-[#1E293B]">
            <div className="flex justify-between text-[#eee]">
                <span className=""> 
                    {title}
                </span>
                <span className="">
                  {timeline}
                </span>
            </div>
            <div className="text-zinc-400 text-sm">
              {content}
            </div>
          </div>
          ))}
      

        {/* <Accordian className="w-full" >
          {accordionData.map(({  title,timeline,content }) => (
            <AccordianItem className="text-[#dddddd]" value={title} key={title} title={title} timeline={timeline}>
              <p className="text-zinc-400 whitespace-pre-line tracking-wide leading-relaxed text-sm ">
              {content}
              </p>
            </AccordianItem>
          ))}
        </Accordian> */}
      </div>
    </div>
    </>
  );

}

const accordionData = [
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