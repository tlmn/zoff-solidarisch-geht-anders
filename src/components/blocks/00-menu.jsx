import React, { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import menuItems from "../../config/config";

export default () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopOver, setShowPopOver] = useState(true);

  return (
    <>
      <div
        className="fixed w-screen h-screen flex justify-center items-center"
        style={{
          display: showPopOver === true ? "block" : "none",
          zIndex: 2000,
          backdropFilter: "blur(3px)",
        }}
      >
        <div className="bg-blue border-white border-2 rounded-xl container m-4 p-3 flex justify-center flex-row items-center grid-12">
          <div className="col-span-12 sm:col-span-10 sm:col-start-2">
            <h3 className="leading-tight mb-2 uppercase font-bold text-md text-white">
              Disclaimer
            </h3>
            <div className="text-sm text-white">
              Nostrud mollit ad sint non mollit dolor laboris aliqua eiusmod
              ipsum officia nulla aute amet. Ex consectetur cillum minim
              adipisicing proident consequat esse elit qui. Amet dolor elit elit
              nostrud. Ea mollit tempor aute eu dolore deserunt anim. In qui
              deserunt duis enim et nulla pariatur.
            </div>
          </div>
          <div className="col-span-12 flex justify-center">
            <button
              onClick={() => setShowPopOver(false)}
              className="text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
      <div
        className="fixed w-full flex justify-center bottom-0 md:bg-red md:bottom-auto md:top-0"
        style={{ zIndex: 1000 }}
      >
        <ul className="my-2 hidden md:block">
          {menuItems.map((item) => (
            <li className="inline mx-1">
              <AnchorLink
                href={`#${item.slug}`}
                className="px-2 py-1 rounded-lg uppercase hover:text-white text-black font-bold transitions-all duration-200 ease-all"
              >
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <div className="">
          <div className="bg-blue rounded-full">
            <div className="hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
