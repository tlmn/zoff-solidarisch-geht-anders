import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import menuItems from "../../config/config";

export default () => (
  <div className="fixed z-50 w-full flex justify-center">
    <ul className="mt-2">
      {menuItems.map((item) => (
        <li className="inline mx-1">
          <AnchorLink
            href={`#${item.slug}`}
            className="px-2 py-1 rounded-lg uppercase bg-opacity-75 bg-white hover:text-red text-black font-bold transitions-all duration-200 ease-all"
          >
            {item.label}
          </AnchorLink>
        </li>
      ))}
    </ul>
  </div>
);
