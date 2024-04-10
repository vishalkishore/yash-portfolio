"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function ProjectSection({id}: {id: string}) {
  return (
    <div id={id} className="dark:bg-black w-full mx-auto p-8">
      <h1 className="text-3xl md:text-3xl text-black dark:text-white  text-center font-semibold">Projects</h1>
      {/* <HoverEffect items={projects} /> */}
      <InfiniteMovingCards
      className="py-5"
        items={projects}
        direction="left"
        speed="slow"
      />
    </div>
  );
}
export const projects = [
  {
    title: "Aerial Robotics - Computer Vision Drone",
    timeline: "Sept. 2023 - IIT Jodhpur",
    description:
      "YOLOV7, SSH, ArduPilot, Electronics, BLDC Motors and Electronic Speed Controllers.\n\n•Core Team Member in the development of an Image Detecting drone controlled by Pixhawk, Raspberry Pi and operated by CNN to stream video data, under Prof. Binod Sharma as a part of Robotics Society.•\nElectronics: Pixhawk V2.4.8 Flight board, NEO-M8N GPS Module, BLDC, 30A ESC",
    link: "https://stripe.com",
  },
  {
    title: "SOLINAS - Inter IIT Tech Contingent 12.0 ",
    timeline: "Dec. 2023 - IIT Madras",
    description: 
      "Solidworks (Product Design, Animation), Fusion360, Material Analysis, Mechanism Design\n\n•To design a mechanical shaft with the objective of homogenizing solid waste mixtures with liquid materials such as wastewater with features such as retractability, mounting convenience and user-friendly operation.\n•Focused on Mechanical Design and retractability mechanism of shaft along with solvent delivery using SOLIDWORKS Animations.",
    link: "https://netflix.com",
  },
  {
    title: "Groundwater Quality Detection (Course Project):",
    timeline: "Oct. 2023 - IIT Jodhpur",
    description:
      "KNN, Random Forests, Decision Trees, Logistic regression, numpy, pandas, matplotlib, sci-kitlearn, sklearn.\n\n• A machine learning model to detect and classify groundwater, based on numerous features provided in the TELANGANA state Water Quality Dataset\n• The sub-problem that I focused on revolved mainly around Decision trees and to evaluate its performance",
    link: "https://google.com",
  },
  {
    title: "Sales Forecasting: ",
    timeline: "Nov. 2023 - IIT Jodhpur",
    description:
      "RNN, LSTM, Numpy, pandas, matplotlib Google Colab\n\n• A machine learning model to forecast sales for the tens of thousands of product families sold at stores. Data included dates, store and product details, whether that item was marketed, sales numbers, and other data.",
    link: "https://google.com",
  },
  {
    title: "Mohr’s Circle Calculator:",
    timeline: "Aug. 2023 - IIT Jodhpur",
    description:
      "HTML, CSS, JavaScript.\n\n• Developed an online Mohr’s Circle Calculator as a part of my course ’Mechanics of Solids’ to evaluate stress strain characteristics of various 2-Dimensional Systems. ",
    link: "https://google.com",
  },
  
];
