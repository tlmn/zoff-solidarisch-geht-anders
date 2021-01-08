import React, { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import menuItems from "../../config/config";

export default () => {
  const [menu, showMenu] = useState(false);

  return (
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
  );
};
