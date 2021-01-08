import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import menuItems from "../../config/config";

export default () => (
  <div
    className="fixed w-full flex justify-center sm:bg-red sm:top-0"
    style={{ zIndex: 1000 }}
  >
    <ul className="my-2">
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
  </div>
);
