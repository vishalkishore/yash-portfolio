"use client";

import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

export function NavBar () {
    const [scrollChange, setScrollchange] = useState(false);
    const changeNavbarStyles = () => {
        if (window.scrollY >= 80) {
            setScrollchange(true);
        } else {
            setScrollchange(false);
        }
    };
    let Links =[
        {name:"home",link:"/"},
        {name:"about me",link:"/"},
        {name:"projects",link:"#projects"},
        {name:"get in touch",link:"/"},
      ];
      let [open, setOpen] =useState(false);
    window.addEventListener("scroll", changeNavbarStyles);

    return (
        <div className={`z-[501] bg-black transition-opacity bg-opacity-80 w-full fixed top-0 left-0 ${scrollChange ? 'bg-opacity-100' : 'bg-opacity-0'}`}>
           <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold dark:text-white text-2xl cursor-pointer flex items-center gap-1'>
                <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                <span>Yash.</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute text-white right-8 top-4 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-50 bg-black' : 'top-[-500px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.link}>
                        <a href={link.link} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent duration-500'>{link.name}</a>
                    </li>))
                }
                {/* <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Download CV</button> */}

        <button className="inline-flex md:ml-8 py-1 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Download CV
        </button>
  
         
            </ul>
            {/* button */}
           </div>
        </div>
    );
};