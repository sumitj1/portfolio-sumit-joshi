"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10 hidden md:block">
        <div className="w-full h-full flex flex-row items-center justify-end m-auto px-[10px]">


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

      <nav className="backdrop-blur-sm md:hidden relative  backdrop-blur-sm z-50 bg-['#111']">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg focus:outline-none focus:ring-0"
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

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full w-37 rounded-lg bg-[#111]  shadow-md shadow-white/30 z-[10] transition-all duration-300 ease-in-out transform ${isOpen
              ? "opacity-100 scale-100 translate-y-0 visible"
              : "opacity-0 scale-95 -translate-y-2 invisible"
              }`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium">
              <li>
                <div
                  onClick={() => scrollToSection("tech-stack")}
                  className="block py-2 px-3 text-white rounded-sm cursor-pointer  z-[2]"
                >
                  Tech Stack
                </div>
              </li>
              <li>
                <div
                  onClick={() => scrollToSection("experience")}
                  className="block py-2 px-3 text-white rounded-sm cursor-pointer  z-[2]"
                >
                  Experience
                </div>
              </li>
              <li>
                <div
                  onClick={() => scrollToSection("projects")}
                  className="block py-2 px-3 text-white rounded-sm cursor-pointer  z-[2]"
                >
                  Projects
                </div>
              </li>

            </ul>
          </div>

        </div>
      </nav>

    </>
  );
};

export default Navbar;
