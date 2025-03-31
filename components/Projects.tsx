import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Projects_List } from "@/constant/index";

type projectPropTypes = {
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  class: string;
};
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-8 px-5">
      <h2 className="text-white font-semibold text-center text-4xl md:text-6xl md:pt-[35px]">
        PROJECTS
      </h2>
      <p className=" text-center text-transparent font-light md:pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 md:text-2xl ">
        Where Vision Meets Execution
      </p>
      <div className=" max-w-[900px] mx-auto 2xl mt-4">
        <div className="w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects_List?.map((project: projectPropTypes, index: number) => (
              <div
                className="w-full relative mx-auto h-auto overflow-hidden rounded-lg z-[1]"
                key={index}
              >
                <Link href={project?.link} target="_blank">
                  <Image
                    src={project?.image}
                    alt="image"
                    className="relative rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer "
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="text-gray-300 p-2 text-center">
                  <p
                    className={`font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r ${project?.class}`}
                  >
                    {project?.title}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {project?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
