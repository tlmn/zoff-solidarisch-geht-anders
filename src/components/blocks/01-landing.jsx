import Div100vh from "react-div-100vh";
import LogoText from "../../assets/svg/logo-text";
import React from "react";
import Spikes from "../../assets/svg/spikes";

export default ({ slug }) => (
  <Div100vh>
    <div className="bg-red h-full" id={slug}>
      <div className="container h-full flex items-center justify-center">
        <Spikes className="z-10" />
      </div>
    </div>
  </Div100vh>
);
