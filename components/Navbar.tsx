"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // backdrop blur effect on scroll on mobile screen
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar?.classList.add("backdrop-blur-sm");
      } else {
        navbar?.classList.remove("backdrop-blur-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* mobile screen dropdown */}
      <nav
        className=" md:hidden backdrop-blur-none z-50 bg-['#111'] fixed w-full"
        id="navbar"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto px-2 pt-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-8 h-8 text-sm text-white rounded-lg focus:outline-none focus:ring-0"
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
            className={`absolute top-full w-37 rounded-lg bg-[#111]  shadow-md shadow-white/30 z-[10] transition-all duration-300 ease-in-out transform mt-2 ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0 visible"
                : "opacity-0 scale-95 -translate-y-2 invisible"
            }`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-normal text-sm">
              <li>
                <div
                  onClick={() => scrollToSection("tech-stack")}
                  className="block py-1 px-3 text-white rounded-sm cursor-pointer z-[2] "
                >
                  Tech Stack
                </div>
              </li>
              <li>
                <div
                  onClick={() => scrollToSection("experience")}
                  className="block py-1 px-3 text-white rounded-sm cursor-pointer  z-[2]"
                >
                  Experience
                </div>
              </li>
              <li>
                <div
                  onClick={() => scrollToSection("projects")}
                  className="block py-1 px-3 text-white rounded-sm cursor-pointer  z-[2]"
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
