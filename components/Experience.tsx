"use client"
import { Experience_List } from "@/constant";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React from "react";

type experienceTypes = {
  link: string;
  companyName: string;
  designation: string;
  location: string;
  date: string;
  description: string;
  technologies: string[];
};

const Experience: React.FC<{}> = () => {
  const {theme} = useTheme()
  return (
    <section id="experience" className="scroll-mt-8 px-2 relative">
      <h1 className={`${theme === 'dark' ? 'text-white' :'text-gray-700 z-[1]'} font-semibold text-center text-4xl md:text-6xl md:pt-[35px]`}>
        EXPERIENCE
      </h1>

      <p className={`text-center text-transparent font-light md:pb-5  bg-clip-text ${theme === 'dark' ? 'from-purple-700 to-orange-500' :'from-purple-800 to-orange-800 z-[1]'} bg-gradient-to-r md:text-2xl`}>
        Mastering Skills Across Diverse Technologies
      </p>
      <div className="container mx-auto 2xl">
        {Experience_List?.map((experience: experienceTypes, index: number) => (
          <div key={index} className={`${theme === 'dark' ? 'experience_card_dark'  : 'experience_card_light'}`}>
            <div className="md:flex md:flex-row md:justify-between pt-[20px] font-semibold">
              <div className="flex items-center gap-3">
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700 z-[1]'} `}>
                  <Link
                    href={experience?.link}
                    target="_blank"
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-purple-700 to-orange-500' : 'from-purple-800 to-orange-700'}`}
                  >
                    {experience?.companyName}{" "}
                  </Link>
                  ({experience?.designation})
                </p>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700 z-[1]'} md:pt-0 pt-3`}>
                {experience?.date}, {experience?.location}
              </p>
            </div>

            <p className={`pt-5 text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700 z-[1]'}`}>
              {experience?.description}
            </p>
            <div className=" flex flex-row flex-wrap mt-2 md:mt-5 gap-2 text-sm md:text-base ">
              {experience?.technologies?.map((technology: string, index) => (
                <div
                  key={index}
                  className={`bg-transparent cursor-pointer  rounded-3xl ${theme === 'dark' ? 'text-white' : "text-dark"} py-2 px-4 border border-[#2E2E2E] transition-all duration-500 w-max hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500 z-[1]`}
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
