import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      {/* Top Images */}
      <div className="grid grid-cols-6 gap-1">
        {[
          "/Content/Images/F1.jpg",
          "/Content/Images/F2.jpg",
          "/Content/Images/F3.jpg",
          "/Content/Images/F4.jpg",
          "/Content/Images/F5.jpg",
          "/Content/Images/F6.jpg",
        ].map((image, index) => (
          <img
            key={index}
            src={image} // Replace with actual image URLs
            alt={`Image ${index + 1}`}
            className="h-40 w-full object-cover"
          />
        ))}
      </div>

      {/* Stay Updated Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold uppercase mb-4">Stay Updated</h2>
          <p className="text-sm leading-relaxed">
            Sign up to be the first to find out when we add new classes,
            amenities, and more. We respect your privacy and will never share
            your information with any third-party vendors.
          </p>
        </div>

        {/* Right Side Input */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 w-62 text-black rounded-lg border border-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-bold uppercase rounded-lg hover:bg-gray-300 transition text-sm sm:text-base md:text-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-3 text-center md:text-left py-10 px-4 border-t border-gray-600">
        <div>
          <h3 className="font-bold uppercase mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Private Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>email@example.com</li>
            <li>+1 (555) 555-5555</li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-end">
          <h3 className="font-bold uppercase text-2xl">Klipsan</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
