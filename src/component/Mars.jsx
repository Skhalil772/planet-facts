import Pluone from "./assets/planet-mars.svg";
import Plutwo from "./assets/planet-mars-internal.svg";
import PluTre from "./assets/geology-mars.png";
import { useState } from "react";
function Mars() {
  const [Link, setLink] = useState("https://en.wikipedia.org/wiki/Mars");
  const [Img, setImg] = useState(Pluone);
  const [Text, setText] = useState(
    'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".'
  );
  const Structure = () => {
    setLink("https://en.wikipedia.org/wiki/Mars#Internal_structure");
    setImg(Plutwo);
    setText(
      "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
    );
  };
  const Geology = () => {
    setLink("https://en.wikipedia.org/wiki/Mars#Surface_geology");
    setImg(PluTre);
    setText(
      "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
    );
  };
  const Overview = () => {
    setLink("https://en.wikipedia.org/wiki/Mars");
    setImg(Pluone);
    setText(
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".'
    );
  };

  return (
    <section className="flex flex-col">
      <div className="flex lg:container   flex-col-reverse  lg:space-y-0 sm:space-y-12 justify-around items-center lg:flex-row">
        <div className="p-3 max-w-[50%] lg:max-w-[30%]">
          <img src={Img} alt="earth" />
        </div>
        <div className="p-3 max-w-[100%] lg:space-y-4 sm:space-x-8 lg:space-x-0 flex lg:flex-col  sm:flex-row flex-col-reverse  lg:max-w-[30%]">
          <div className="space-y-4  max-w-[90%] sm:max-w-[40%] lg:max-w-[100%] ">
            <h1 className="text-gray-50 text-4xl sm:text-left text-center">
              Mars
            </h1>

            <p className="text-gray-400">{Text}</p>
            <h4 className="flex flex-row text-gray-400 sm-pb-0 pb-4 sm:justify-start justify-center">
              Source :
              <a className="px-1" href={Link}>
                Wikipedia
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="self-center "
                width="12"
                height="12"
              >
                <path
                  fill="#EFF6FF"
                  d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                  opacity=".5"
                />
              </svg>
            </h4>
          </div>
          <ul className="flex sm:flex-col justify-around sm:justify-start text-xs sm:space-y-6 lg:space-y-3 wdi sm:pr-12 lg:pr-0 border-b-[1px] sm:border-b-0 rounded-sm border-slate-500 ">
            <button
              onClick={Overview}
              className="  text-gray-300 hover:text-gray-50  sm:border-[1px] rounded-sm sm:border-slate-500 sm:wdi flex  flex-row space-x-6 focus:outline-none"
            >
              <span className="hidden sm:block text-lg pl-6  font-normal">
                01
              </span>
              <span className=" font-semibold text-lg">OVERVIEW</span>
            </button>

            <button
              onClick={Structure}
              className=" text-gray-300  hover:text-gray-50  sm:border-[1px] rounded-sm sm:border-slate-500 sm:wdi flex  flex-row space-x-6 focus:outline-none"
            >
              <span className="hidden sm:block text-lg pl-6  font-normal">
                02
              </span>
              <span className=" font-semibold text-lg flex flex-row">
                <span className="sm:block pr-2 hidden">INTERNAL</span> STRUCTURE
              </span>
            </button>

            <button
              onClick={Geology}
              className="text-gray-300 hover:text-gray-50  sm:border-[1px] rounded-sm sm:border-slate-500 sm:wdi flex  flex-row space-x-6 focus:outline-none"
            >
              <span className="hidden sm:block text-lg pl-6  font-normal">
                03
              </span>
              <span className=" flex font-semibold text-lg">
                SURFACE <span className="pl-2 sm:block hidden">GEOLOGY</span>
              </span>
            </button>
          </ul>
        </div>
      </div>
      <div className="  grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-4 gap-1 py-2 ">
        <div className="border-[1px] border-gray-500 rounded-sm py-3 pl-2 pr-6 w-full mx-auto  container justify-center items-center space-x-4 md:space-x-0  md:space-y-1 flex md:flex-col">
          <h3 className="text-gray-500 text-xs ">ROTATION TIME :</h3>
          <p className="text-white text-2xl  font-semibold">1.03 Days</p>
        </div>
        <div className="border-[1px] border-gray-500 rounded-sm py-3 pl-2 pr-6 w-full mx-auto  container justify-center items-center space-x-4 md:space-x-0  md:space-y-1 flex md:flex-col">
          <h3 className="text-gray-500 text-xs ">REVOLUTION TIME :</h3>
          <p className="text-white text-2xl  font-semibold">1.88 Years</p>
        </div>
        <div className="border-[1px] border-gray-500 rounded-sm py-3 pl-2 pr-6 w-full mx-auto  container justify-center items-center space-x-4 md:space-x-0  md:space-y-1 flex md:flex-col">
          <h3 className="text-gray-500 text-xs ">RADIUS :</h3>
          <p className="text-white text-2xl  font-semibold">3,389.5 KM</p>
        </div>
        <div className="border-[1px] border-gray-500 rounded-sm py-3 pl-2 pr-6 w-full mx-auto  container justify-center items-center space-x-4 md:space-x-0  md:space-y-1 flex md:flex-col">
          <h3 className="text-gray-500 text-xs ">AVERAGE TEMP :</h3>
          <p className="text-white text-2xl  font-semibold">-28°c</p>
        </div>
      </div>
    </section>
  );
}
export default Mars;
