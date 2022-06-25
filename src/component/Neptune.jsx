import Pluone from "./assets/planet-neptune.svg";
import Plutwo from "./assets/planet-neptune-internal.svg";
import PluTre from "./assets/geology-neptune.png";
import { useState } from "react";
function Neptune() {
  const [Link, setLink] = useState("https://en.wikipedia.org/wiki/Neptune");
  const [Img, setImg] = useState(Pluone);
  const [Text, setText] = useState(
    "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus"
  );
  const Structure = () => {
    setLink("https://en.wikipedia.org/wiki/Neptune");
    setImg(Plutwo);
    setText(
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
    );
  };
  const Geology = () => {
    setLink("https://en.wikipedia.org/wiki/Neptune#Atmosphere");
    setImg(PluTre);
    setText(
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
    );
  };
  const Overview = () => {
    setLink("https://en.wikipedia.org/wiki/Neptune#Atmosphere");
    setImg(Pluone);
    setText(
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
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
              Neptune
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
          <p className="text-white text-2xl  font-semibold">16.08 Hours</p>
        </div>
        <div className="border-[1px] border-gray-500 rounded-sm py-3 pl-2 pr-6 w-full mx-auto  container justify-center items-center space-x-4 md:space-x-0  md:space-y-1 flex md:flex-col">
          <h3 className="text-gray-500 text-xs ">REVOLUTION TIME :</h3>
          <p className="text-white text-2xl  font-semibold">164.79 Years</p>
        </div>
        <div className="border-[1px] border-gray-500 rounded-sm py-3 pl-2 pr-6 w-full mx-auto  container justify-center items-center space-x-4 md:space-x-0  md:space-y-1 flex md:flex-col">
          <h3 className="text-gray-500 text-xs ">RADIUS :</h3>
          <p className="text-white text-2xl  font-semibold">24,622 KM</p>
        </div>
        <div className="border-[1px] border-gray-500 rounded-sm py-3 pl-2 pr-6 w-full mx-auto  container justify-center items-center space-x-4 md:space-x-0  md:space-y-1 flex md:flex-col">
          <h3 className="text-gray-500 text-xs ">AVERAGE TEMP :</h3>
          <p className="text-white text-2xl  font-semibold">-201°c</p>
        </div>
      </div>
    </section>
  );
}
export default Neptune;
