import Image from "next/image";
import React from "react";

export default function TechStack() {
  return (
    <div className="flex gap-[1rem] md:gap-[3rem]">
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/html.svg"} width={80} height={80} alt="html" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500">
          HTML
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/css.svg"} width={80} height={80} alt="css" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500">
          CSS
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image
          src={"/logo/javascript.svg"}
          width={80}
          height={80}
          alt="javascript"
        />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
          JavaScript
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/nextjs.svg"} width={80} height={80} alt="nextjs" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">
          Next.js
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/react.svg"} width={80} height={80} alt="react" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
          React
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/angular.svg"} width={75} height={75} alt="angular" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          Angular
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image
          src={"/logo/bootstrap.svg"}
          width={80}
          height={80}
          alt="bootstrap"
        />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          Bootstrap
        </p>
      </div>
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
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/sass.svg"} width={80} height={80} alt="sass" />
        {/* <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
          Sass
        </p> */}
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/npm.svg"} width={80} height={80} alt="npm" />
        {/* <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          NPM
        </p> */}
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/yarn.svg"} width={70} height={70} alt="yarn" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
          Yarn
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/vite.svg"} width={70} height={70} alt="vite" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500">
          Vite
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/mui.svg"} width={70} height={70} alt="mui" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-100">
          MUI
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/primeng.svg"} width={70} height={70} alt="primeng" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          PrimeNG
        </p>
      </div>

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
      </div>
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
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/chartjs.svg"} width={70} height={70} alt="chartjs" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 to-red-700">
          Chart.js
        </p>
      </div>

      {/* ddddddddddddddddddddd */}

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
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/vscode.svg"} width={70} height={70} alt="vscode" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
          Vs Code
        </p>
      </div>

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
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/twilio.svg"} width={70} height={70} alt="twilio" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          Twilio
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/stripe.svg"} width={70} height={70} alt="stripe" />
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/strapi-2.svg"} width={70} height={70} alt="strapi" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          Strapi
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/redux.svg"} width={70} height={70} alt="redux" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Redux
        </p>
      </div>

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
      </div>

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
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/pm2.svg"} width={70} height={70} alt="pm2" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-violet-500 to-violet-700">
          PM2
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/nodejs.svg"} width={70} height={70} alt="nodejs" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
          Node.js
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/mysql.svg"} width={70} height={70} alt="mysql" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
          MySQL
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/mongodb.svg"} width={30} height={30} alt="mongodb" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
          MongoDB
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/jwt.svg"} width={70} height={70} alt="jwt" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
          JWT
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/json.svg"} width={70} height={70} alt="json" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
          JSON
        </p>
      </div>

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
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/gitlab.svg"} width={70} height={70} alt="gitlab" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          GitLab
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/github.svg"} width={70} height={70} alt="github" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">
          GitHub
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/git.svg"} width={70} height={70} alt="git" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
          Git
        </p>
      </div>

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
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/dotenv.svg"} width={70} height={70} alt="dotenv" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
          Dotenv
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/docker.svg"} width={70} height={70} alt="docker" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Docker
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/axios.svg"} width={100} height={100} alt="axios" />
      </div>

      <div className="flex flex-col items-center justify-center min-w-100 min-h-100">
        <Image src={"/logo/amp.svg"} width={70} height={70} alt="amp" />
        <p className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
          AMP
        </p>
      </div>
    </div>
  );
}
