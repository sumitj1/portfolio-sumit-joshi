"use client";
import { useTheme } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down 100vh
  useEffect(() => {
    const handleScroll = () => {
      // 100vh equivalent
      const scrollThreshold = window.innerHeight;

      if (window.scrollY > scrollThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    console.log("clicke");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { theme } = useTheme();
  return (
    showButton && (
      <div
        className="z-[1] fixed bottom-6 right-3 md:bottom-10 md:right-10 text-white p-3 rounded-full cursor-pointer hover:text-[#fed524]"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-10 w-10 md:h-11 md:w-11"
        >
          <path
            fill={`${theme === 'dark' ? '#d1d5db' : '#374151'}`}
            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM151.2 217.4c-4.6 4.2-7.2 10.1-7.2 16.4c0 12.3 10 22.3 22.3 22.3l41.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 41.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.2-16.4l-91-84c-3.8-3.5-8.7-5.4-13.9-5.4s-10.1 1.9-13.9 5.4l-91 84z"
          />
        </svg>
      </div>
    )
  );
}
