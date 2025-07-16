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

        <div className="flex flex-col ml-7 z-10 mr-7 ">
          <button className="btn btn-primary text-background border-4 rounded-4xl font-bold px-16 py-4 mb-6 hover:cursor-pointer">
            Sign in
          </button>
          <button className="btn btn-accent rounded-4xl text-background font-bold px-16 py-4 hover:cursor-pointer duration-300 hover:shadow-[0_0_20px_3px_rgba(161,124,173,0.6)] ">
            Login
          </button>
        </div>
        <div className="relative w-[512px] h-[512px] overflow-hidden content-center" >
          <div className="w-[512px] max-h-[512px]">
             <DotLottieReact
                className="object-contain w-full h-full scale-[2]"
                src="https://lottie.host/6a0f760e-964c-4949-b99f-7860293536c3/qF1ejt4jjs.lottie"
                loop
                autoplay
                />
          </div>
            {/* <img src="../public/robot.gif" alt="" /> */}
        </div>
       
       
       
       
      </div>
    </>
  );
};

export default LandingPage;
