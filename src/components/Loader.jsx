import React, { useState, useEffect } from "react";

const Loader = () => {
  const [animationState, setAnimationState] = useState("falling");

  useEffect(() => {
    // After a delay, change the animation state to 'growing'
    setTimeout(() => {
      setAnimationState("growing");
    }, 1500);

    // After another delay, change the animation state to 'full-screen'
    setTimeout(() => {
      setAnimationState("full-screen");
    }, 3000);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-800">
      <div className="animate-fall transform scale-200 w-full h-full flex justify-center items-center">
        <div
          className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full transition-all duration-500 ${
            animationState === "growing" ? "animate-bounce-initial w-32 h-16" : ""
          } ${
            animationState === "full-screen" ? "w-full h-full rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 " : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
