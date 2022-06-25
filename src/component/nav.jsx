import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Nav() {
  const [Open, setOpen] = useState(true);
  const handleClick = () => setOpen(!Open);

  return (
    <section className="">
      <div className="flex lg:flex-row flex-col space-y-2 lg:space-y-0 justify-between sm:items-center p-2 border-b-[1px]">
        <span className="text-gray-50 text-2xl font-semibold">THE PLANETS</span>
        <ul
          className={
            !Open
              ? "res  sm:flex flex-row text-xs sm:space-y-0 pl-8 sm:pl-0 space-y-8 sm:space-x-3 "
              : "sm:flex flex-row text-xs hidden sm:space-y-0 pl-8 sm:pl-0 space-y-8 sm:space-x-3"
          }
        >
          <li className="text-gray-300 hover:text-gray-50">
            <a href="/" className="focus:outline-none">
              MERCURY
            </a>
          </li>
          <li className="text-gray-300 hover:text-gray-50">
            <a href="/Venus" className="focus:outline-none">
              VENUS
            </a>
          </li>
          <li className="text-gray-300 hover:text-gray-50">
            <a href="/Earth" className="focus:outline-none">
              EARTH
            </a>
          </li>
          <li className="text-gray-300 hover:text-gray-50">
            <a href="/Mars" className="focus:outline-none">
              MARS
            </a>
          </li>
          <li className="text-gray-300 hover:text-gray-50">
            <a href="/Jupiter" className="focus:outline-none">
              JUPITER
            </a>
          </li>
          <li className="text-gray-300 hover:text-gray-50">
            <a href="/Saturn" className="focus:outline-none">
              SATURN
            </a>
          </li>
          <li className="text-gray-300 hover:text-gray-50">
            <a href="/Uranus" className="focus:outline-none">
              URANUS
            </a>
          </li>
          <li className="text-gray-300 hover:text-gray-50">
            <a href="/Neptune" className="focus:outline-none">
              NEPTUNE
            </a>
          </li>
        </ul>
        <button
          onClick={handleClick}
          className="bg-orange sm:hidden focus:outline-none hover:text-gray-300 text-white  hover:tex absolute top-2 right-3 z-[999]"
        >
          <span className="w-8 h-8   ">
            {/* {setOpen  <Menu /> : <Close />} */}
            {Open ? <FaBars /> : <FaTimes />}
          </span>
        </button>
      </div>
    </section>
  );
}
export default Nav;
// {
//     !Open
//       ? "res  sm:flex flex-row text-xs sm:space-y-0 pl-8 sm:pl-0 space-y-8 sm:space-x-3 "
//       : "hidden"
//   }

// import { useContext, useState } from "react";
// import Datacontext from "../context/DataContext";
// // import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// function Nav() {
//   const [Open, setOpen] = useState(false);
//   const handleClick = () => setOpen(!Open);
//   const { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune } =
//     useContext(Datacontext);
//   const mer = () => {
//     mercury();
//   };
//   const ven = () => {
//     venus();
//   };
//   const ear = () => {
//     earth();
//   };
//   const mar = () => {
//     mars();
//   };
//   const jup = () => {
//     jupiter();
//   };
//   const sat = () => {
//     saturn();
//   };
//   const ura = () => {
//     uranus();
//   };
//   const nep = () => {
//     neptune();
//   };

//   return (
//     <section className="">
//       <div className="flex lg:flex-row flex-col space-y-2 lg:space-y-0 justify-between sm:items-center p-2 border-b-[1px]">
//         <span className="text-gray-50 text-2xl font-semibold">THE PLANETS</span>
//         <ul
//           className={
//             !Open
//               ? "res  sm:flex flex-row text-xs sm:space-y-0 pl-8 sm:pl-0 space-y-8 sm:space-x-3 "
//               : "sm:flex flex-row text-xs hidden sm:space-y-0 pl-8 sm:pl-0 space-y-8 sm:space-x-3"
//           }
//         >
//           <li className="text-gray-300 hover:text-gray-50">
//             <button onClick={mer} className="focus:outline-none">
//               MERCURY
//             </button>
//           </li>
//           <li className="text-gray-300 hover:text-gray-50">
//             <button onClick={ven} className="focus:outline-none">
//               VENUS
//             </button>
//           </li>
//           <li className="text-gray-300 hover:text-gray-50">
//             <button onClick={ear} className="focus:outline-none">
//               EARTH
//             </button>
//           </li>
//           <li className="text-gray-300 hover:text-gray-50">
//             <button onClick={mar} className="focus:outline-none">
//               MARS
//             </button>
//           </li>
//           <li className="text-gray-300 hover:text-gray-50">
//             <button onClick={jup} className="focus:outline-none">
//               JUPITER
//             </button>
//           </li>
//           <li className="text-gray-300 hover:text-gray-50">
//             <button onClick={sat} className="focus:outline-none">
//               SATURN
//             </button>
//           </li>
//           <li className="text-gray-300 hover:text-gray-50">
//             <button onClick={ura} className="focus:outline-none">
//               URANUS
//             </button>
//           </li>
//           <li className="text-gray-300 hover:text-gray-50">
//             <button onClick={nep} className="focus:outline-none">
//               NEPTUNE
//             </button>
//           </li>
//         </ul>
//         <button
//           onClick={handleClick}
//           className="bg-orange sm:hidden focus:outline-none hover:text-gray-300 text-white  hover:tex absolute top-2 right-3 z-[999]"
//         >
//           <span className="w-8 h-8   ">
//             {/* {setOpen  <Menu /> : <Close />} */}
//             {Open ? <FaBars /> : <FaTimes />}
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// }
// export default Nav;
// // {
// //     !Open
// //       ? "res  sm:flex flex-row text-xs sm:space-y-0 pl-8 sm:pl-0 space-y-8 sm:space-x-3 "
// //       : "hidden"
// //   }
