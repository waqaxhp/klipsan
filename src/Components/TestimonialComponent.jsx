import React from "react";

const TestimonialComponent = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-between bg-gradient-to-r from-yellow-500 via-yellow-300 to-gray-300 text-white">
      {/* Testimonial Section */}
      <div className="flex flex-col justify-center items-center text-center px-4 py-16 h-full my-2  ">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          KLIPSAN FITNESS WAS CENTRAL IN HELPING ME GAIN THE STAMINA FOR MY
          RECENT MARATHON.
        </p>
        <p className="mt-4 text-lg font-medium">- Alejandro Jimenez</p>
      </div>

      {/* Location Section */}
      <div className="bg-black text-white py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-20">
          <div className="text-center">
            <h3 className="text-xl font-bold">BROOKLYN</h3>
            <p className="mt-2 text-sm">
              12334 Fitness Ln.
              <br />
              Brooklyn, NY
              <br />
              11385
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">LOS ANGELES</h3>
            <p className="mt-2 text-sm">
              12334 Fitness Ln.
              <br />
              Los Angeles, LA
              <br />
              11385
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
