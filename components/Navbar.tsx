"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(true);

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
    <>
      <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10 hidden md:block">
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
              <a href="mailto:sumitjoshi181@gmail.com">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* mobile screen sidebar */}

      <nav className="backdrop-blur-sm z-[1] md:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg  focus:outline-none focus:ring-1 focus:ring-[#fed524] focus:text-[#fed524]"
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full mt-4 transition-all duration-300 ease-in-out`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
