"use client";

import React from "react";
import Accordian, { AccordianItem } from "./ui/accordion";

export function EducationSection({className , data}:{className?:string,data:any}) {
  const accordionData = data;
  return (
    <>
    <div className={`${className} mt-5`}>
      <div className="w-full md:w-[90%] mx-auto">
      {accordionData.map(({ title, timeline, content }: { title: string, timeline: string, content: string }) => (
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

