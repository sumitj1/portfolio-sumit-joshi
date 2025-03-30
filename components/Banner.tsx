"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/user.png"
            height={250}
            width={250}
            alt="Sumit Joshi"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-pulse tracking-tighter text-7xl font-semibold max-w-[600px] w-auto h-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Sumit Joshi
        </div>
        <div className="text-white"></div>
        <div className="flex justify-center">
          <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-2xl text-white ">
            I&apos;m a Full Stack Developer...
          </div>
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate Full Stack Developer with a focus on Next.js development,
          dedicated to crafting elegant and user-friendly Web applications.
        </p>
      </div>
    </div>
  );
};

export default Banner;
