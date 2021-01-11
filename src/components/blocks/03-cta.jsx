import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

export default ({ slug }) => (
  <div className="bg-blue py-4" id={slug}>
    <div className="container grid-12">
      <div className="flex items-center col-span-12 flex-col">
        <span className="text-med sm:text-md text-white inline-block mb-2 text-center">
          Streitet mit uns für eine gerechte und ökologische Zukunft!
          <br />
          Stellt euch mit uns gegen Ausgrenzung und Zerstörung!
        </span>
        <AnchorLink
          href="#kampagne"
          className="text-med hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block"
        >
          Seid jetzt dabei!
        </AnchorLink>
      </div>
    </div>
  </div>
);
