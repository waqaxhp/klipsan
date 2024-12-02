import React from "react";

const ScheduleVisit = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl w-full gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SCHEDULE A VISIT
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Take a free 30-minute tour of either of our locations to help you
            decide if Klipsan is the right gym for you. You’ll have the
            opportunity to try equipment, observe classes, and get direct
            answers to all of your questions.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium">
                Name <span className="text-red-500">(required)</span>
              </label>
              <div className="flex gap-4 mt-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-3 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium">
                Email <span className="text-red-500">(required)</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            {/* Date Field */}
            <div>
              <label className="block text-sm font-medium">
                Date <span className="text-red-500">(required)</span>
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-black text-white font-bold rounded border-2 border-black hover:bg-white hover:text-black transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisit;
