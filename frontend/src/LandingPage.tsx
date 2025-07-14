import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LandingPage = () => {
  return (
    <>
      <div className="font-ubuntu relative flex items-center w-full h-screen justify-center ">
        {/* <img className="absolute z-0" src='../public/svg/blob-1-opacity-36.gif'/>  */}

        <div className="flex items-center justify-center z-10">
          <div className="mr-9 ">
            <p className="text-7xl  text-primary font-bold">Brainstormer</p>
            <p className="text-text">
              Igniting Sci-Fi Insights: Collaborate with AI, Envision Tomorrow
            </p>
          </div>
        </div>

        <div className="flex flex-col ml-5 z-10 ">
          <button className="border-secondary text-accent border-4 rounded-4xl font-bold px-16 py-4 mb-6 hover:cursor-pointer hover:bg-secondary hover:text-text transition-all duration-200">
            Sign in
          </button>
          <button className="bg-primary rounded-4xl text-background font-bold px-16 py-4 hover:cursor-pointer ease-in-out transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(161,124,173,0.6)]">
            Login
          </button>
        </div>
        <div className="bg-white">
             {/* <DotLottieReact
                src="https://lottie.host/6a0f760e-964c-4949-b99f-7860293536c3/qF1ejt4jjs.lottie"
                loop
                autoplay
                /> */}
        </div>
       
      </div>
    </>
  );
};

export default LandingPage;
