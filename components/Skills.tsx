import Image from "next/image";
import React from "react";
import { Tooltip } from "@heroui/tooltip";
import TechStack from "./TechStack";
export default function Skills() {
  return (
    <section
      id="tech-stack"
      className="flex flex-col items-center justify-center h-full md:pt-[35px] scroll-mt-8"
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-4xl md:text-6xl">
          TECH STACK
        </h1>
        <p className="text-transparent font-light pb-5  mt-4 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 md:text-2xl">
          ⚡ What Fuels My Code
        </p>
      </div>

      <div className="flex overflow-hidden max-w-[90%] md:max-w-[1100px] mt-[20px] sm:mt-[50px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-10px),transparent_100%)]">
        <div className="flex space-x-16 animate-loop-scroll">
          <TechStack />

          <TechStack />
        </div>
      </div>
    </section>
  );
}
