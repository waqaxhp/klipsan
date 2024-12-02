// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [homeData, setHomeData] = useState({});

//   useEffect(() => {
//     // Fetch data from JSON file
//     fetch("/Data/Data.json")
//       .then((response) => response.json())
//       .then((data) => setHomeData(data.home))
//       .catch((error) => console.error("Error loading home data:", error));
//   }, []);

//   return (
//     <>
//       <div
//         className="relative h-screen bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${homeData.backgroundImage})`, // Use fetched background image path
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col justify-end items-start px-8 md:px-16 lg:px-32 pb-8">
//           {/* Flex row for heading and button */}
//           <div className="flex flex-row justify-between items-end w-full">
//             {/* Heading (Left) */}
//             <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-lg">
//               {homeData.title &&
//                 homeData.title.split("\n").map((line, index) => (
//                   <span key={index}>
//                     {line}
//                     <br />
//                   </span> // Handle multiline titles
//                 ))}
//             </h1>

//             {/* Button (Right) */}
//             <button className="mt-4 px-6 py-3 border-2 border-white text-white text-sm md:text-lg font-bold rounded-full hover:bg-white hover:text-black transition">
//               {homeData.buttonText}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between items-center py-20 px-10 bg-black text-white">
//         {/* Left Side Text */}
//         <div className="w-1/2 text-4xl font-bold leading-tight">
//           {homeData.title2}
//         </div>

//         {/* Right Side Description */}
//         <div className="w-1/2 text-lg">{homeData.description}</div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";

const Home = () => {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    // Fetch data from JSON file
    fetch("/Data/Data.json")
      .then((response) => response.json())
      .then((data) => setHomeData(data.home))
      .catch((error) => console.error("Error loading home data:", error));
  }, []);

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeData.backgroundImage})`, // Use fetched background image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 pb-8">
          {/* Flex row for heading and button */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full text-center md:text-left">
            {/* Heading (Left) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-lg">
              {homeData.title &&
                homeData.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span> // Handle multiline titles
                ))}
            </h1>

            {/* Button (Right) */}
            <button className="mt-4 md:mt-0 px-6 py-3 border-2 border-white text-white text-sm sm:text-base md:text-lg font-bold rounded-full hover:bg-white hover:text-black transition">
              {homeData.buttonText}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-20 px-10 bg-black text-white">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
          {homeData.title2}
        </div>

        {/* Right Side Description */}
        <div className="w-full md:w-1/2 text-lg text-center md:text-left">
          {homeData.description}
        </div>
      </div>
    </>
  );
};

export default Home;
