"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          <div className="flex flex-row gap-2 items-center">
            <div
              onClick={() => scrollToSection("tech-stack")}
              className={`z-[1] bg-transparent cursor-pointer rounded-3xl ${
                theme === "dark" ? "text-white " : "text-dark"
              } py-2 px-4   transition-all duration-500 w-max hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500`}
            >
              Tech Stack
            </div>
            <div
              onClick={() => scrollToSection("experience")}
              className={`z-[1] bg-transparent cursor-pointer rounded-3xl ${
                theme === "dark" ? "text-white " : "text-dark"
              } py-2 px-4   transition-all duration-500 w-max hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500`}
            >
              Experience
            </div>

            <div
              onClick={() => scrollToSection("projects")}
              className={`z-[1] bg-transparent cursor-pointer rounded-3xl ${
                theme === "dark" ? "text-white " : "text-dark"
              } py-2 px-4   transition-all duration-500 w-max hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500`}
            >
              Projects
            </div>
            <div
              className={`z-[1] bg-transparent cursor-pointer rounded-3xl ${
                theme === "dark" ? "text-white " : "text-dark"
              } py-2 px-4   transition-all duration-500 w-max hover:bg-gradient-to-r hover:from-purple-700 hover:to-orange-500`}
            >
              <a href="mailto:sumitjoshi181@gmail.com">Contact</a>
            </div>
            <div className="z-[1] bg-transparent bg-black py-2 pl-5">
              <span className="cursor-pointer" onClick={toggleTheme}>
                {theme === "light" ? (
                  <Image
                    src="/logo/stars.svg"
                    width={40}
                    height={40}
                    alt="moon"
                  />
                ) : (
                  <Image src="/logo/sun.svg" width={40} height={40} alt="sun" />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* mobile screen dropdown */}
      <nav
        className={`md:hidden backdrop-blur-none z-50 ${
          theme === "dark" ? "bg-['#111']" : "bg-['#5b9cb0a6']"
        } fixed w-full`}
        id="navbar"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto px-2 pt-2">
          <div className="z-[1] bg-transparent py-2 px-5">
            <span className="cursor-pointer" onClick={toggleTheme}>
              {theme === "light" ? (
                <Image
                  src="/logo/stars.svg"
                  width={30}
                  height={30}
                  alt="moon"
                />
              ) : (
                <Image src="/logo/sun.svg" width={30} height={30} alt="sun" />
              )}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className={`inline-flex items-center justify-center p-2 w-10 h-10 text-sm ${
              theme === "dark" ? "text-white" : "text-dark"
            } rounded-lg focus:outline-none focus:ring-0`}
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
            className={`absolute top-full w-37 rounded-lg ${
              theme === "dark"
                ? "bg-['#111']  shadow-white/30"
                : "bg-['#5b9cb0a6']  shadow-dark/50"
            } shadow-md z-[10] transition-all duration-300 ease-in-out transform mt-2 ${
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
                  className={`lock py-1 px-3 ${
                    theme === "dark" ? "text-white" : "text-dark"
                  } rounded-sm cursor-pointer z-[2] `}
                >
                  Tech Stack
                </div>
              </li>
              <li>
                <div
                  onClick={() => scrollToSection("experience")}
                  className={`lock py-1 px-3 ${
                    theme === "dark" ? "text-white" : "text-dark"
                  } rounded-sm cursor-pointer z-[2] `}
                >
                  Experience
                </div>
              </li>
              <li>
                <div
                  onClick={() => scrollToSection("projects")}
                  className={`lock py-1 px-3 ${
                    theme === "dark" ? "text-white" : "text-dark"
                  } rounded-sm cursor-pointer z-[2] `}
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
