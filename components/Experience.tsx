import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className="scroll-mt-8 px-5">
      <h2 className="text-white font-semibold text-center text-4xl md:text-6xl md:pt-[35px] ">
        EXPERIENCE
      </h2>

      <p className=" text-center text-transparent font-light md:pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 md:text-2xl ">
        Years of Dedication, Countless Achievements
      </p>
      <div className="container mx-auto 2xl">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <a
                href="https://www.dgliger.co.in/"
                className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500"
              >
                {" "}
                DGLiger{" "}
              </a>
              (Frontend Developer)
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            May 2024 - Present, Gurugram
          </p>
        </div>

        <p className="text-gray-300 pt-5 text-sm md:text-base">
          Currently, I am building and refining user interfaces by transforming
          UI/UX designs into responsive and high-performance web applications. I
          am optimizing applications for speed, enhancing SEO rankings, and
          ensuring a seamless user experience. I am also integrating the latest
          libraries and web APIs to keep the applications modern, secure, and
          scalable.
        </p>
        <div className=" flex flex-row flex-wrap mt-2 md:mt-5 gap-2 text-sm md:text-base">
          <div className="bg-transparent cursor-pointer  rounded-3xl text-white py-2 px-4  border border-[#2E2E2E] w-max">
            Next.js
          </div>
          <div className="bg-transparent  cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            Redux
          </div>
        </div>
      </div>
      <div className="container mx-auto 2xl pt-5">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <a
                href="https://otssolutions.com/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500"
              >
                {" "}
                OTS Solutions{" "}
              </a>
              (Full Stack Developer)
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            August 2021 - May 2024, Gurugram
          </p>
        </div>

        <p className="text-gray-300 pt-5 text-sm md:text-base">
          I designed and developed scalable, maintainable web applications using
          modern frontend frameworks like Angular, along with HTML, CSS, and
          JavaScript. I built RESTful APIs with Node.js and MongoDB, ensuring
          high performance, security, and reliability. I integrated third-party
          libraries and services, collaborated with cross-functional teams to
          deliver end-to-end solutions, and troubleshot issues across the entire
          technology stack to maintain smooth application operation.
        </p>
        <div className=" flex flex-row flex-wrap mt-2 md:mt-5 gap-2 text-sm md:text-base">
          <div className="bg-transparent cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            Angular
          </div>
          <div className="bg-transparent cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            Node.js
          </div>

          <div className="bg-transparent  cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            MongoDB
          </div>
        </div>
      </div>

      <div className="container mx-auto 2xl pt-5">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <a
                href="https://www.itechmission.org/"
                className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500"
              >
                {" "}
                iTech Mission{" "}
              </a>
              (Full Stack Developer)
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            July 2020 - July 2021, New Delhi
          </p>
        </div>

        <p className="text-gray-300 pt-5 text-sm md:text-base">
          I collaborated with senior engineers to design, develop, and maintain
          web applications using the MEAN stack (MongoDB, Express.js, Angular,
          React, Node.js). I assisted in building RESTful APIs with Node.js and
          Express.js to ensure scalability, security, and performance. I
          participated in developing responsive and intuitive user interfaces
          using Angular, HTML, and CSS. I contributed to integrating third-party
          libraries and services under the guidance of senior engineers and
          assisted in troubleshooting and debugging issues across the entire
          technology stack.
        </p>
        <div className=" flex flex-row flex-wrap mt-2 md:mt-5 gap-2 text-sm md:text-base">
          <div className="bg-transparent  cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            Angular
          </div>
          <div className="bg-transparent  cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent   cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            Node.js
          </div>
          <div className="bg-transparent   cursor-pointer  rounded-3xl  text-white py-2 px-4  border border-[#2E2E2E] w-max">
            MongoDB
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
