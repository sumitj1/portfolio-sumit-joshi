"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          title="ibrahim logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/Logo.svg"
            alt="Ibrahim Memon - Developer"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto"
          /> */}
        </a>

        <div className="flex flex-row gap-2">
          <div
            onClick={() => scrollToSection("tech-stack")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] hover:text-[#fed524] rounded-xl  text-white  py-2 px-5"
          >
            Tech Stack
          </div>
          <div
            onClick={() => scrollToSection("experience")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] hover:text-[#fed524] rounded-xl text-white  py-2 px-5"
          >
            Experience
          </div>

          <div
            onClick={() => scrollToSection("projects")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] hover:text-[#fed524] rounded-xl  text-white  py-2 px-5"
          >
            Projects
          </div>
          <div className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] hover:text-[#fed524] rounded-xl  text-white  py-2 px-5">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
