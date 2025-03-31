import { Certifications_List } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type certificationTypes = {
  link: string;
  image: string;
};

const Certifications: React.FC<{}> = () => {
  return (
    <section id="certification" className="scroll-mt-8 px-5">
      <h2 className="text-white font-semibold text-center text-4xl md:text-6xl md:pt-[35px]">
        CERTIFICATIONS
      </h2>
      <p className="text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 md:text-2xl ">
        Validating Knowledge, Building Trust
      </p>
      <div className="max-w-[900px]  mx-auto 2xl">
        <div className="w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {Certifications_List?.map(
              (certification: certificationTypes, index: number) => (
                <div className="relative mx-auto h-auto overflow-hidden rounded-lg z-[1]" key={index}>
                  <Link href={certification?.link} target="_blank">
                    <Image
                      src={certification?.image}
                      width={300}
                      height={300}
                      alt="image"
                      className="relative z-0 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer w-[300px]"
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
