import React from "react";

const Amenities = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">AMENITIES</h1>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-xl mb-8 max-w-2xl">
        At Klipsan Fitness, we’re always expanding our amenities to meet the
        needs of our community. Something you’d like to see added to our list?
        Submit a request.
      </p>

      {/* Amenities List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center text-sm md:text-base">
        <div>
          <p>Modern Facilities</p>
          <span className="block">•</span>
          <p>Premium Classes</p>
          <span className="block">•</span>
          <p>Personal Trainers</p>
          <span className="block">•</span>
          <p>Rockwall</p>
          <span className="block">•</span>
          <p>Boxing Ring</p>
        </div>
        <div>
          <p>Juice Bar</p>
          <span className="block">•</span>
          <p>Personal Nutritionists</p>
          <span className="block">•</span>
          <p>Monthly Guest Passes</p>
          <span className="block">•</span>
          <p>Basketball Courts</p>
          <span className="block">•</span>
          <p>Lockers</p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
