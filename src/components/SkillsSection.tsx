import React from "react";
import { IconDiamond } from '@tabler/icons-react';

const programmingSkills:string[] = ["C","Python","ROS","SQL"]
const softwareSkills:string[] = ["SolidWorks","Fusion 360","Ansys"]
const toolsOsSkills:string[] = ["Git","Jupyter Notebook","Google Colab", "Linux"]
const librariesSkills:string[] = ["Scikit-Learn","Matplotlib","Pandas","Numpy"]

const skills : {[category:string] : string[]} = {
    "Programming":programmingSkills,
    "Software":softwareSkills,
    "Tools & OS":toolsOsSkills,
    "Libraries":librariesSkills
}

export function SkillsSection({className}:{className?:string}) {
    return (
    <div className={`${className}`}>
    <div className={` max-w-7xl  mx-auto p-8`}>
         <h1 className="text-3xl md:text-3xl text-black dark:text-[#eee]  text-center font-semibold">Skills</h1>
         <div className="flex flex-wrap p-4 justify-around">
        {Object.entries(skills).map(([category, skills]) => (
            <div className="flex-auto min-w-[200px] max-w-[400px] p-5" key={category}>
                <h2 className="text-2xl md:text-2xl text-black text-center dark:text-[#eee]">{category}</h2>
                <div className="flex gap-3 mt-4 flex-wrap">
                    {skills.map((skill, index) => (
                        <div key={index} className="rounded-full px-3 py-[6px] border-t-white border-2 transition-all ease-in hover:bg-[#1e2631] flex justify-around
                        space-x-2">
                            <IconDiamond stroke={1.25} />
                            <h1>{skill}</h1>
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