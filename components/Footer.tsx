"use client"
import React from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Tooltip } from "@heroui/tooltip";

const Footer: React.FC<{}> = () => {
  const { theme } = useTheme();
  return (
    <div className=" container mx-auto 2xl md:pt-[50px] pb-8 relative">
      <div className="pb-5 md:pb-10 justify-center flex ">
        {Social_Icons.map((social, index) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={index}
              className="z-[1]"
            >
              <Tooltip content={social.name} color={`${theme === 'dark' ? 'default' : 'foreground'}`}>
                <Image
                  src={social.image}
                  height={30}
                  width={30}
                  alt={social.alt}
                  sizes="100vw"
                  className={`mx-2 md:mx-5 ${theme === 'dark' ? '' : 'invert'} `}
                />
              </Tooltip>
            </Link>
          );
        })}
      </div>
      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-center text-sm`}>
        Created with ❤️ using Next.js
      </p>
    </div>
  );
};

export default Footer;
