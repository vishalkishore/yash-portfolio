"use client";

import React from "react";
import Accordian, { AccordianItem } from "./ui/accordion";

export function ExperienceSection({className,data}:{className?:string,data:any}) {
  const accordionData = data;
  return (
    <>
    <div className={`${className} mt-5`}>
      <div className="w-full md:w-[90%] mx-auto">
        <Accordian className="w-full" >
          {accordionData.map(({  title,timeline,content }:{
            title:string,
            timeline:string,
            content:string
          }) => (
            <AccordianItem className="text-[#eee]" value={title} key={title} title={title} timeline={timeline} content={content}>
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

