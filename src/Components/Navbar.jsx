// import React, { useState, useEffect } from "react";
// import {
//   FaInstagram,
//   FaYoutube,
//   FaFacebook,
//   FaShoppingCart,
// } from "react-icons/fa";

// const Navbar = () => {
//   const [menuData, setMenuData] = useState({ menuItems: [], socialLinks: [] });
//   const [cartItems, setCartItems] = useState(5); // Example static cart number

//   // Social icons mapping
//   const iconMap = {
//     FaInstagram: <FaInstagram />,
//     FaYoutube: <FaYoutube />,
//     FaFacebook: <FaFacebook />,
//   };

//   useEffect(() => {
//     // Fetch data from JSON file
//     fetch("/Data/Data.json")
//       .then((response) => response.json())
//       .then((data) => setMenuData(data))
//       .catch((error) => console.error("Error loading data:", error));
//   }, []);

//   return (
//     <nav className="fixed w-full bg-black backdrop-blur-lg shadow-md z-50">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
//           KLIPSAN
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex align-items: end; space-x-10 font-bold text-white text-sm">
//           {menuData.menuItems.map((item) => (
//             <a
//               key={item.id}
//               href={item.href}
//               className="hover:text-green-500 transition tracking-wide"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Social Links */}
//         <div className="flex items-center space-x-8 text-white">
//           {menuData.socialLinks.map((link) => (
//             <a
//               key={link.id}
//               href={link.href}
//               className="hover:text-green-500 transition"
//             >
//               {iconMap[link.icon]} {/* Dynamically render the correct icon */}
//             </a>
//           ))}
//         </div>

//         {/* Login Button */}
//         <div className="hidden md:flex items-center">
//           <a
//             href={
//               menuData.menuItems.find((item) => item.name === "Login")?.href
//             }
//             className="hover:text-green-500 transition tracking-wide font-bold text-white text-sm"
//           >
//             Login
//           </a>
//         </div>

//         {/* Cart with Number */}
//         <div className="flex items-center space-x-2 text-white">
//           {/* Cart Icon */}
//           <a href="#cart" className="flex items-center">
//             <FaShoppingCart size={24} />
//           </a>

//           {/* Cart Number */}
//           {cartItems > 0 && (
//             <div className="flex items-center justify-center w-6 h-6 bg-yellow-700 text-white rounded-full text-xs font-bold">
//               {cartItems}
//             </div>
//           )}
//         </div>

//         {/* Mobile Toggle Button */}
//         <div className="md:hidden text-white cursor-pointer">
//           {/* Hamburger icon logic */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  const [menuData, setMenuData] = useState({ menuItems: [], socialLinks: [] });
  const [cartItems, setCartItems] = useState(5); // Example static cart number

  // Social icons mapping
  const iconMap = {
    FaInstagram: <FaInstagram />,
    FaYoutube: <FaYoutube />,
    FaFacebook: <FaFacebook />,
  };

  useEffect(() => {
    // Fetch data from JSON file
    fetch("/Data/Data.json")
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <nav className="fixed w-full bg-black backdrop-blur-lg shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
          KLIPSAN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex align-items: end; space-x-10 font-bold text-white text-sm">
          {menuData.menuItems
            .filter((item) => item.name !== "Login") // Exclude Login from the menu
            .map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-green-500 transition tracking-wide"
              >
                {item.name}
              </a>
            ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-white">
          {menuData.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-green-500 transition"
            >
              {iconMap[link.icon]} {/* Dynamically render the correct icon */}
            </a>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex items-center">
          <a
            href={
              menuData.menuItems.find((item) => item.name === "Login")?.href
            }
            className="hover:text-green-500 transition tracking-wide font-bold text-white text-sm"
          >
            Login
          </a>
        </div>

        {/* Cart with Number */}
        <div className="flex items-center space-x-2 text-white">
          {/* Cart Icon */}
          <a href="#cart" className="flex items-center">
            <FaShoppingCart size={24} />
          </a>

          {/* Cart Number */}
          {cartItems > 0 && (
            <div className="flex items-center justify-center w-6 h-6 bg-yellow-700 text-white rounded-full text-xs font-bold">
              {cartItems}
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white cursor-pointer">
          {/* Hamburger icon logic */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
