"use client";
import Image from "next/image";
import React from "react";
import { Tooltip } from "@heroui/tooltip";
import TechStack from "./TechStack";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

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
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={6} // effect="fade"  // Keep the fade effect for smooth transitions
        autoplay={{
          delay: 0, // Set the auto transition delay to 3 seconds (adjust as needed)
          disableOnInteraction: false, // Keep autoplay even after interaction
          pauseOnMouseEnter: false, // Pause autoplay when the user hovers
        }}
        loop={true}
        speed={1500} // Set transition speed to 800ms for smoother sliding // Enable looping to create a continuous smooth transition effect
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 },
          480: { slidesPerView: 4, spaceBetween: 10 },
          640: { slidesPerView: 5, spaceBetween: 10 },
          1024: { slidesPerView: 7, spaceBetween: 10 },
        }}
        className="w-4/5 mt-4"
      >
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/html.svg"} width={80} height={80} alt="html" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500">
              HTML
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/css.svg"} width={80} height={80} alt="css" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500">
              CSS
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/tailwind.svg"}
              width={80}
              height={80}
              alt="tailwind"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Tailwind
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/sass.svg"} width={80} height={80} alt="sass" />
            {/* <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                  Sass
                </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/npm.svg"} width={80} height={80} alt="npm" />
            {/* <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                   NPM
                 </p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/yarn.svg"} width={70} height={70} alt="yarn" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Yarn
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/vite.svg"} width={70} height={70} alt="vite" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500">
              Vite
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/mui.svg"} width={70} height={70} alt="mui" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-100">
              MUI
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/primeng.svg"}
              width={70}
              height={70}
              alt="primeng"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              PrimeNG
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/primereact.svg"}
              width={70}
              height={70}
              alt="primereact"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
              PrimeReact
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/shadcn-ui.svg"}
              width={70}
              height={70}
              alt="shadcn-ui"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">
              Shadcn UI
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/chartjs.svg"}
              width={70}
              height={70}
              alt="chartjs"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 to-red-700">
              Chart.js
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/mongoose.svg"}
              width={70}
              height={70}
              alt="mongoose"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Mongoose
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/vscode.svg"}
              width={70}
              height={70}
              alt="vscode"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              Vs Code
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/typescript.svg"}
              width={70}
              height={70}
              alt="typescript"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              TypeScript
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/twilio.svg"}
              width={70}
              height={70}
              alt="twilio"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Twilio
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/stripe.svg"}
              width={70}
              height={70}
              alt="stripe"
            />
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/strapi-2.svg"}
              width={70}
              height={70}
              alt="strapi"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              Strapi
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/redux.svg"} width={70} height={70} alt="redux" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Redux
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/reactrouter.svg"}
              width={90}
              height={90}
              alt="reactrouter"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Router
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/postgresql.svg"}
              width={70}
              height={70}
              alt="postgresql"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              PostgreSQL
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/pm2.svg"} width={70} height={70} alt="pm2" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-violet-500 to-violet-700">
              PM2
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/nodejs.svg"}
              width={70}
              height={70}
              alt="nodejs"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
              Node.js
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/mysql.svg"} width={70} height={70} alt="mysql" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              MySQL
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/mongodb.svg"}
              width={30}
              height={30}
              alt="mongodb"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              MongoDB
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/jwt.svg"} width={70} height={70} alt="jwt" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              JWT
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/json.svg"} width={70} height={70} alt="json" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              JSON
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/highcharts.svg"}
              width={70}
              height={70}
              alt="highcharts"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Highcharts
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/gitlab.svg"}
              width={70}
              height={70}
              alt="gitlab"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              GitLab
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/github.svg"}
              width={70}
              height={70}
              alt="github"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">
              GitHub
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/git.svg"} width={70} height={70} alt="git" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Git
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/expressjs.svg"}
              width={70}
              height={70}
              alt="expressjs"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
              ExpressJS
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/dotenv.svg"}
              width={70}
              height={70}
              alt="dotenv"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Dotenv
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/docker.svg"}
              width={70}
              height={70}
              alt="docker"
            />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Docker
            </p>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image
              src={"/logo/axios.svg"}
              width={100}
              height={100}
              alt="axios"
            />
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide className="SlideTrack">
          <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
            <Image src={"/logo/amp.svg"} width={70} height={70} alt="amp" />
            <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              AMP
            </p>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
      {/* <div className="flex overflow-hidden max-w-[90%] md:max-w-[1100px] mt-[20px] sm:mt-[50px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-10px),transparent_100%)]">
        <div className="flex space-x-16 animate-loop-scroll">
          <TechStack />

          <TechStack />
        </div>

        
      </div> */}
    </section>
  );
}
