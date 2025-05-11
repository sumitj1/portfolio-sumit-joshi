'use client'
import { Certifications_List, Projects_List } from "@/constant";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type certificationTypes = {
  link: string;
  image: string;
};

const Certifications: React.FC<{}> = () => {
  const {theme} = useTheme()
  return (
    <section id="certification" className="scroll-mt-8 px-2 relative">
      <h2 className={`font-semibold text-center text-4xl md:text-6xl md:pt-[35px] ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
        CERTIFICATIONS
      </h2>
      <p className={`text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-purple-700 to-orange-500' : 'from-purple-800 to-orange-700'} md:text-2xl `}>
        Validating Knowledge, Building Trust
      </p>

      <div className=" max-w-[900px] mx-auto 2xl mt-4">
        <div className="w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Certifications_List?.map(
              (certificate: certificationTypes, index: number) => (
                <div
                  className="w-full relative mx-auto h-auto overflow-hidden rounded-lg z-[1] md:max-w-[300px]"
                  key={index}
                >
                  <Link href={certificate?.link} target="_blank">
                    <Image
                      src={certificate?.image}
                      alt="image"
                      className="relative rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer mx-auto h-full"
                      width={300}
                      height={300}
                    />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
