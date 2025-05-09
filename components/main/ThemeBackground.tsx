"use client"
import React from 'react';
import { useTheme } from "@/context/ThemeContext";
import DayBackground from './DayBackground';
import StarsBackground from './StarsBackground';


export default function ThemeBackground() {

  const { theme } = useTheme();


  return (
    <>
       <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-0'} z-0`}>
        <DayBackground />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'} z-0`}>
        <StarsBackground />
      </div>
   </>
  )
}
