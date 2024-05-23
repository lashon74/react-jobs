// we can pass along props or we can desructser props and pass them one by one
// we can also set default props but they will be overrided if we set props in compents similar to arguments
import React from "react";

const Hero = ({
  title = "Become React Dev",
  subtitle = "Find the React job that fits your skill set",
}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
