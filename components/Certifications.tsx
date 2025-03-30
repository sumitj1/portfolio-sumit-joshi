import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certifications: React.FC<{}> = () => {
  return (
    <section id="certification" className="scroll-mt-8">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px] pb-5">
        CERTIFICATIONS
      </h2>

      <div className="container mx-auto 2xl">
        <div className="w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
              <a href="https://www.herofincorp.com/" target="_blank">
                <img
                  src="/herofincorp.png"
                  alt="image"
                  className="relative z-0 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                />
              </a>
              <div className="text-gray-300 p-2 text-center">
                <p className="text-white font-semibold text-l">Hero FinCorp</p>
                <p className="text-gray-500 text-sm">
                  Provide financial solution that match your needs and help you
                  build a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
