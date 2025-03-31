import { Experience_List } from "@/constant";
import Image from "next/image";
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
  return (
    <section id="experience" className="scroll-mt-8 px-5">
      <h2 className="text-white font-semibold text-center text-4xl md:text-6xl md:pt-[35px] ">
        EXPERIENCE
      </h2>

      <p className=" text-center text-transparent font-light md:pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 md:text-2xl ">
        Mastering Skills Across Diverse Technologies
      </p>
      <div className="container mx-auto 2xl">
        {Experience_List?.map((experience: experienceTypes, index: number) => (
          <div key={index}>
            <div className="md:flex md:flex-row md:justify-between pt-[20px]">
              <div className="flex items-center gap-3">
                <p className="text-gray-300">
                  <Link
                    href={experience?.link}
                    target="_blank"
                    className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500"
                  >
                    {experience?.companyName}
                  </Link>
                  ({experience?.designation})
                </p>
              </div>
              <p className="text-gray-300 md:pt-0 pt-3">
                {experience?.date}, {experience?.location}
              </p>
            </div>

            <p className="text-gray-300 pt-5 text-sm md:text-base">
              {experience?.description}
            </p>
            <div className=" flex flex-row flex-wrap mt-2 md:mt-5 gap-2 text-sm md:text-base">
              {experience?.technologies?.map((technology: string, index) => (
                <div
                  key={index}
                  className="bg-transparent cursor-pointer  rounded-3xl text-white py-2 px-4  border border-[#2E2E2E] w-max"
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
