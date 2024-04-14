import React from "react";
import { IconDiamond } from '@tabler/icons-react';

const skills : {[category:string] : string[]} = {
    "Programming":["C","Python","ROS","SQL"],
    "Software":["SolidWorks","Fusion 360","Ansys"],
    "Tools & OS":["Git","Jupyter Notebook","Google Colab", "Linux"],
    "Libraries":["Scikit-Learn","Matplotlib","Pandas","Numpy"]
}

export function SkillsSection({className}:{className?:string}) {
    return (
    <div className={`${className}`}>
    <div className={` max-w-7xl  mx-auto p-8`}>
         <h1 className="text-3xl md:text-3xl text-black dark:text-[#eee]  text-center font-semibold">Skills</h1>
         <div className="flex flex-col p-4 justify-around">
        {Object.entries(skills).map(([category, skills]) => (
            <div className="flex-auto  p-5" key={category}>
                <h2 className="text-2xl md:text-2xl text-black text-center dark:text-[#eee]">{category}</h2>
                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                    {skills.map((skill, index) => (
                        <div key={index} className="rounded-full px-3 py-[6px] border-t-white border-2 transition-all ease-in hover:bg-[#1e2631] flex justify-around
                        space-x-2">
                            <IconDiamond className="dark:text-white" stroke={1.25} />
                            <h1 className="text-black dark:text-white">{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        ))}
        </div>
    </div>
    </div>
    )
}