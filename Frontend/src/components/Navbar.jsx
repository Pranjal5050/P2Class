// import { Menu, X } from "lucide-react";
// import React, { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { RiArrowRightLine } from "@remixicon/react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     if (open) {
//       gsap.fromTo(
//         menuRef.current,
//         {
//           height: 0,
//           opacity: 0,
//         },
//         {
//           height: "auto",
//           opacity: 1,
//           duration: 0.5,
//         }
//       );
//     } else {
//       gsap.to(menuRef.current, {
//         height: 0,
//         opacity: 0,
//         duration: 0.5,
//       });
//     }
//   }, [open]);

//   const navLinks = [
//     {
//       name: "Home",
//       href: "/",
//     },
//     {
//       name: "Courses",
//       href: "/courses",
//     },
//     {
//       name: "Test Series",
//       href: "/test-series",
//     },
//     {
//       name: "About Us",
//       href: "/about",
//     },
//     {
//       name: "Contact Us",
//       href: "/contact",
//     },
//   ];

//   return (
//     <nav className="bg-[#041d63] sticky top-0 z-50 shadow-lg">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="fixed bottom-5 right-5 bg-red-500 text-white p-2 z-50">
//           {window.innerWidth}px
//         </h1>
//         <div className="flex items-center justify-between h-20">

//           {/* Logo */}
//           <div className="flex items-center gap-2">

//             <div className="bg-white rounded-full p-1">
//               <img
//                 src="/logo.png"
//                 alt="P2 Classes"
//                 className="h-12 w-auto"
//               />
//             </div>

//             <h1 className="text-yellow-400 font-bold text-2xl">
//               P² CLASSES
//             </h1>

//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">

//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="relative text-white text-sm font-medium hover:text-yellow-400 transition duration-300 group"
//               >
//                 {link.name}

//                 <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}

//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center gap-4">

//             <button className="cursor-pointer px-5 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-[#041d63] transition duration-300">
//               Login
//             </button>

//             <button className="cursor-pointer px-5 py-2 bg-yellow-400 text-[#041d63] rounded-md font-semibold hover:bg-yellow-300 transition duration-300">
//               Register
//             </button>

//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-white"
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         ref={menuRef}
//         className="md:hidden overflow-hidden h-0 opacity-0 bg-[#041d63] border-t border-blue-800"
//       >
//         <div className="flex flex-col px-4 py-4 gap-4">

//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="
//       flex
//       items-center
//       justify-between
//       px-5
//       py-4
//       rounded-xl
//       bg-white/5
//       hover:bg-white/10
//       text-white
//       transition-all
//       duration-300
//       group
//     "
//             >
//               <span className="font-medium">
//                 {link.name}
//               </span>

//               <span className="text-yellow-400 group-hover:translate-x-1 transition">
//                 <RiArrowRightLine />
//               </span>
//             </a>
//           ))}

//           <button className="w-full py-2 border border-yellow-400 text-yellow-400 rounded-md">
//             Login
//           </button>

//           <button className="w-full py-2 bg-yellow-400 text-[#041d63] rounded-md font-semibold">
//             Register
//           </button>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Menu, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { RiArrowRightLine } from "@remixicon/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [open]);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "Test Series",
      href: "/test-series",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-[#041d63] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">

            <div className="bg-white rounded-full p-1">
              <img
                src="/logo.png"
                alt="P2 Classes"
                className="h-12 w-auto"
              />
            </div>

            <h1 className="text-yellow-400 font-bold text-2xl">
              P² CLASSES
            </h1>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-white text-sm font-medium hover:text-yellow-400 transition duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

              </Link>
            ))}

          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">

            <button className="cursor-pointer px-5 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-[#041d63] transition duration-300">
              Login
            </button>

            <button className="cursor-pointer px-5 py-2 bg-yellow-400 text-[#041d63] rounded-md font-semibold hover:bg-yellow-300 transition duration-300">
              Register
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden h-0 opacity-0 bg-[#041d63] border-t border-blue-800"
      >

        <div className="flex flex-col px-4 py-4 gap-4">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                justify-between
                px-5
                py-4
                rounded-xl
                bg-white/5
                hover:bg-white/10
                text-white
                transition-all
                duration-300
                group
              "
            >
              <span className="font-medium">
                {link.name}
              </span>

              <span className="text-yellow-400 group-hover:translate-x-1 transition">
                <RiArrowRightLine />
              </span>

            </Link>
          ))}

          <button className="w-full py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-[#041d63] transition duration-300">
            Login
          </button>

          <button className="w-full py-2 bg-yellow-400 text-[#041d63] rounded-md font-semibold hover:bg-yellow-300 transition duration-300">
            Register
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;