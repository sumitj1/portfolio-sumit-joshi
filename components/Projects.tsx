import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="scroll-mt-8 px-5">
      <h2 className="text-white font-semibold text-center text-4xl md:text-6xl md:pt-[35px]">
        PROJECTS
      </h2>
      <p className=" text-center text-transparent font-light md:pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 md:text-2xl ">
        Where Vision Meets Execution
      </p>
      <div className="container mx-auto 2xl mt-4">
        <div className="w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg z-[1]">
              <a href="https://www.herofincorp.com/" target="_blank">
                <img
                  src="/herofincorp.png"
                  alt="image"
                  className="relative rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer "
                />
              </a>
              <div className="text-gray-300 p-2 text-center">
                <p className="font-semibold text-l text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-300">
                  Hero FinCorp
                </p>
                <p className="text-gray-500 text-sm">
                  Provide financial solution that match your needs and help you
                  build a better future.
                </p>
              </div>
            </div>
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg z-[1]">
              <a href="https://www.herofincorp.com/" target="_blank">
                <img
                  src="/herofincorp.png"
                  alt="image"
                  className="relative rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer "
                />
              </a>
              <div className="text-gray-300 p-2 text-center">
                <p className="font-semibold text-l text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-300">
                  Hero FinCorp
                </p>
                <p className="text-gray-500 text-sm">
                  Provide financial solution that match your needs and help you
                  build a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
