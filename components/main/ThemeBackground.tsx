"use client"
import React from 'react';
import { useTheme } from "@/context/ThemeContext";
import DayBackground from './DayBackground';
import StarsBackground from './StarsBackground';


export default function ThemeBackground() {

  const { theme } = useTheme();


  return (
    theme === 'light' ? <DayBackground /> : <StarsBackground />
  )
}
