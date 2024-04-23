"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState , useEffect} from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { NavBar } from "./NavBarRes";
import Image from 'next/image';

import { useMediaQuery } from 'react-responsive';

export function HeroSection() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div >
    
    {!isMobile && isClient && (<AuroraBackground className="dark:bg-black relative ">

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
      
      <div className="flex w-full min-h-[90vh] bg-black flex-col justify-center items-center gap-x-10 gap-y-10 py-16 md:px-10 md:flex-row">
        <div className="flex-1 w-full mt-10  px-7 space-y-3">
          <p className="wave text-6xl">👋</p>

          <p className="text-sm  font-semibold dark:text-slate-100 md:text-base">Hi, I&apos;m</p>
          <a className="text-7xl md:text-7xl font-bold dark:text-white text-left fadeInUp-animation">
            Yash Golani.
          </a>
          {/* <p className="text-lg text-slate-200 md:text-lg fadeInUp-animation">
            Experienced&nbsp
            <span id="typewriter" data-array=""></span>
            <span className="cursor"></span>
          </p> */}
          <div className="flex mt-10 gap-x-5 items-center">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Let&apos;s work together!! 
            </span>
        </button>
            <a href="https://www.linkedin.com/in/yash-g-144210106/" target="_blank"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-1 md:mt-o mt-10 items-center justify-center w-full">
        
          <Image
      src="/images/yash.jpg" // Route of the image file
      className="rounded-full my-10 w-[70%] z-[500]"
      width={
        100
      } // Desired size with correct aspect ratio
      height={100} // Desired size with correct aspect ratio
      sizes="(max-width: 300px) 50vw, (max-width: 300px) 40vw, 28vw"
      alt="Your Name"
    />



        </div>
      </div>
      {/* </div> */}


    </AuroraBackground>)}


    {isMobile && isClient && (
        <div>
        <NavBar /> 
        <div className="flex w-full min-h-[100vh] bg-black flex-col justify-center items-center gap-x-10 gap-y-10 py-16 md:px-10 md:flex-row">
        <div className="flex-1 w-full mt-10  px-7 space-y-3">
          <p className="wave text-6xl">👋</p>

          <p className="text-sm  font-semibold dark:text-slate-100 md:text-base">Hi, I&apos;m</p>
          <a className="text-7xl md:text-7xl font-bold dark:text-white text-left fadeInUp-animation">
            Yash Golani.
          </a>
          {/* <p className="text-lg text-slate-200 md:text-lg fadeInUp-animation">
            Experienced&nbsp
            <span id="typewriter" data-array=""></span>
            <span className="cursor"></span>
          </p> */}
          <div className="flex mt-10 gap-x-5 items-center">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Let&apos;s work together!! 
            </span>
        </button>
            <a href="https://www.linkedin.com/in/yash-g-144210106/" target="_blank"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-1 md:mt-o mt-10 items-center justify-center w-full">
        
          <Image
      src="/images/yash.jpg" // Route of the image file
      className="rounded-full my-10 w-[70%] z-[500]"
      width={
        100
      } // Desired size with correct aspect ratio
      height={100} // Desired size with correct aspect ratio
      sizes="(max-width: 300px) 50vw, (max-width: 300px) 40vw, 28vw"
      alt="Your Name"
    />



        </div>
        </div>
        </div>
      )}
   

    {/* <ProjectSection /> */}
    

    </div>
  );
}
