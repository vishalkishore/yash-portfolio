// "use client";
// import { cn } from "@/utils/cn";
// import React, { useState } from 'react';

// export function Accordion (
//     { title, timeline ,content ,className }:
//     {title:string;timeline:string;content:string; className?:string;})  {

//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="  px-4 py-5 my-5 rounded-[5px] transition-all duration-500 ease-in border-slate-700" style={{
//         background:
//           "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
//       }}>
//       <div className="dark:text-white flex flex-col md:flex-row justify-between px-4" onClick={() => setIsActive(!isActive)}>
//         <span className="whitespace-pre-line text-1xl">{title}</span>
//         <span className="my-2 md:m-0">
//         <span className="text-right mx-0 md:mx-4">{timeline}</span>
//         <span className="text-right">{isActive ? '-' : '+'}</span>
//         </span>
//       </div>
//       {isActive && <div className="text-zinc-400 whitespace-pre-line tracking-wide leading-relaxed text-sm mt-5 ">{content}</div>}
//     </div>
//   );
// };

"use client";

import { createContext, useContext, useRef, useEffect, useState } from "react"
import { IconChevronDown } from '@tabler/icons-react';


const AccordianContext = createContext<any>({});

export default function Accordian({ children, value, onChange,className, ...props }:{children:any;value?:string;onChange?:Function;className?:string;}) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected, onChange])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export function AccordianItem({ children, value, title,timeline, className, ...props }:{children:any;value:string;title:string;timeline:string;className?:string;}) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className="rounded-lg    mb-3 bg-[#1E293B]" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4"
      >
        <div>
        <span className="block dark:text-[#eee]">
        {title}
        </span>
        <span className="block text-sm text-zinc-400">
        {timeline}
        </span>
        </div>
        
        <IconChevronDown
          stroke={2}
          className={`w-[16px] dark:text-white transition-transform ${open ? "rotate-180" : ""}`}
        />
       
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}