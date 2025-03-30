import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certifications: React.FC<{}> = () => {
  return (
    <section id="certification" className="scroll-mt-8 px-5">
      <h2 className="text-white font-semibold text-center text-4xl md:text-6xl md:pt-[35px]">
        CERTIFICATIONS
      </h2>
      <p className="text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 md:text-2xl ">
        Validating Knowledge, Building Trust
      </p>
      <div className="container mx-auto 2xl">
        <div className="w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="relative mx-auto h-auto overflow-hidden rounded-lg z-[1]">
              <a
                href="https://udemy-certificate.s3.amazonaws.com/image/UC-67e61a1f-0b4f-4cf8-83eb-a575563f14ff.jpg?v=1680785959000"
                target="_blank"
              >
                <img
                  src="/certifications/nextjs-developer.jpg"
                  alt="image"
                  className="relative z-0 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer w-[300px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
