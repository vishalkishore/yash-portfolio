"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {ProjectSection} from "./ProjectSection";
import { NavBar } from "./NavBarRes";
import Image from 'next/image';

export function HeroSection() {
  return (
    <div >
    
    <AuroraBackground className="dark:bg-black relative ">

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {/* <div className="flex flex-col md:flex-row">
            <div className="w-full basis-1/2">
            <div className="w-full text-3xl dark:bg-black md:text-7xl font-bold dark:text-white text-left">
          Hi I'm Yash Golani.
        </div>
        
            </div>

            <div className="w-full basis-1/2">fdfd</div>
        </div> */}



        {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button> */}
      </motion.div>
      <NavBar /> 
      
      <div className="flex w-full bg-black flex-col justify-center items-center gap-x-10 gap-y-10 py-16 md:px-10 md:flex-row">
        <div className="flex-1 w-full mt-10  px-7 space-y-3">
          <p className="wave text-6xl">👋</p>

          <p className="text-sm  font-semibold dark:text-slate-100 md:text-base">Hi, I&apos;m</p>
          <p className="text-7xl md:text-7xl font-bold dark:text-white text-left fadeInUp-animation">
            Yash Golani.
          </p>
          <p className="text-lg text-slate-200 md:text-lg fadeInUp-animation">
            Experienced&nbsp
            <span id="typewriter" data-array=""></span>
            <span className="cursor"></span>
          </p>
          <div className="flex mt-10 gap-x-5 items-center">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Let&apos;s work together!! 
            </span>
        </button>
            <a href="https://www.linkedin.com/in/amrit-kumar-mallik-b7a06a272/" target="_blank"
              className="border-slate-400 rounded-full border-[1px] p-2 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-1 md:mt-o mt-10 items-center justify-center w-full">
        
          <Image
      src="/images/amrit3.png" // Route of the image file
      className="rounded-lg w-[90%] z-[500]"
      width={
        200
      } // Desired size with correct aspect ratio
      height={200} // Desired size with correct aspect ratio
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 28vw"
      alt="Your Name"
    />



        </div>
      </div>
      {/* </div> */}


    </AuroraBackground>

   

    {/* <ProjectSection /> */}
    

    </div>
  );
}
