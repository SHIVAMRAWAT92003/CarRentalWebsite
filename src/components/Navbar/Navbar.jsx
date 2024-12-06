

// import React, { useState } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";

// export const Navlinks = [
//   {
//     id: 1,
//     name: "HOME",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "CARS",
//     link: "/#cars",
//   },
//   {
//     id: 3,
//     name: "ABOUT",
//     link: "/#about",
//   },
//   {
//     id: 4,
//     name: "BOOKING",
//     link: "/#booking",
//   },
// ];

// const Navbar = ({ theme, setTheme }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div
//       className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300"
//     >
//       <div className="container py-2 md:py-0">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div>
//             <span className="text-3xl font-bold font-serif">Car Rental</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             <ul className="flex items-center gap-8">
//               {Navlinks.map(({ id, name, link }) => (
//                 <li key={id} className="py-4">
//                   <a
//                     href={link}
//                     className=" text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
//                   >
//                     {name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             {/* Dark Mode Toggle */}
//             {theme === "dark" ? (
//               <BiSolidSun
//                 onClick={() => setTheme("light")}
//                 className="text-2xl cursor-pointer"
//               />
//             ) : (
//               <BiSolidMoon
//                 onClick={() => setTheme("dark")}
//                 className="text-2xl cursor-pointer"
//               />
//             )}
//             {/* Sign Up & Login Buttons */}
//             <div className="flex items-center gap-4">
//               <a
//                 href="/signup"
//                 className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary-dark duration-300"
//               >
//                 Sign Up
//               </a>
//               <a
//                 href="/login"
//                 className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-white duration-300"
//               >
//                 Log In
//               </a>
//             </div>
//           </nav>

//           {/* Mobile Navigation */}
//           <div className="flex items-center gap-4 md:hidden">
//             {/* Dark Mode Toggle */}
//             {theme === "dark" ? (
//               <BiSolidSun
//                 onClick={() => setTheme("light")}
//                 className="text-2xl cursor-pointer"
//               />
//             ) : (
//               <BiSolidMoon
//                 onClick={() => setTheme("dark")}
//                 className="text-2xl cursor-pointer"
//               />
//             )}
//             {/* Hamburger Menu */}
//             {showMenu ? (
//               <HiMenuAlt1
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             ) : (
//               <HiMenuAlt3
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Responsive Menu for Mobile */}
//       <ResponsiveMenu showMenu={showMenu} />

//       {/* Sign Up & Login Buttons in Mobile */}
//       {showMenu && (
//         <div className="flex flex-col items-center gap-4 p-4 md:hidden">
//           <a
//             href="/signup"
//             className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary-dark duration-300 w-full text-center"
//           >
//             Sign Up
//           </a>
//           <a
//             href="/login"
//             className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-white duration-300 w-full text-center"
//           >
//             Log In
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;








import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "BOOKING",
    link: "/#booking",
  },
 
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300"
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <span className="text-3xl font-bold font-serif">Car Rental</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Dark Mode Toggle */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {/* Sign Up & Login Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="/signup"
                className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary-dark duration-300"
                style={{ backgroundColor: "#E5D4FF" }}
              >
                Sign Up
              </a>
              <a
                href="/login"
                className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-white duration-300"
                style={{
                  color: "#E5D4FF",
                  borderColor: "#E5D4FF",
                  hover: { backgroundColor: "#E5D4FF", color: "white" },
                }}
              >
                Log In
              </a>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark Mode Toggle */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {/* Hamburger Menu */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Responsive Menu for Mobile */}
      <ResponsiveMenu showMenu={showMenu} />

      {/* Sign Up & Login Buttons in Mobile */}
      {showMenu && (
        <div className="flex flex-col items-center gap-4 p-4 md:hidden">
          <a
            href="/signup"
            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary-dark duration-300 w-full text-center"
            style={{ backgroundColor: "#E5D4FF" }}
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-md hover:bg-primary hover:text-white duration-300 w-full text-center"
            style={{
              color: "#E5D4FF",
              borderColor: "#E5D4FF",
              hover: { backgroundColor: "#E5D4FF", color: "white" },
            }}
          >
            Log In
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;




























