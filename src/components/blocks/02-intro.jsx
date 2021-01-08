import EdgeUpper from "../../assets/svg/edge-upper";
import React from "react";
import Stripe from "../stripe";

export default ({ slug }) => (
  <>
    <EdgeUpper fillColor="#56E6A1" />
    <div className="bg-green py-4" id={slug}>
      <div className="container grid-12">
        <div className="col-span-10 col-start-2 leading-larger text-sm text-black">
          Klimakrise, Weltfinanzkrise oder Corona zeigen uns: wir{" "}
          <strong>Menschen sind verletzlich und brauchen einander</strong>.
          Einzeln sind wir schwach, gemeinsam können wir unsichere Zeiten
          durchstehen.{" "}
          <strong>So starten wir in eine gerechtere Zukunft!</strong> Das gilt
          es zu beweisen in und trotz einer Gesellschaft des Wettbewerbs, die
          Wirtschaft vor Menschen stellt.
        </div>
        <div className="font-bold col-span-10 col-start-2 text-md">
          Gestalte mit uns ein neues Zusammenleben:{" "}
          <Stripe fillColor="white" textColor="black" rotationDeg="-0.8">
            gerecht, solidarisch und stark!
          </Stripe>
        </div>
      </div>
    </div>
  </>
);
