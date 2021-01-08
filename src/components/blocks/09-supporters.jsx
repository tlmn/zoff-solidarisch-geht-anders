import Image from "../image";
import React from "react";
import Stripe from "../stripe";

export default ({ slug }) => {
  const supporters = [
    "Attac.jpg",
    "Campact.jpg",
    "DieOffeneGesellschaft.jpg",
    "EndeGelaende.jpg",
    "FridayForFuture.jpg",
    "MehrDemokratie.jpg",
    "NaturFreunde.jpg",
    "Seebruecke.jpg",
    "verdi.jpg",
  ];
  return (
    <div className="bg-white py-4" id={slug}>
      <div className="container grid-12">
        <div className="col-span-10 text-lg uppercase font-bold">
          <Stripe fillColor="green" textColor="white" rotationDeg="1.2">
            Das Kampagnen-Bündnis
          </Stripe>
          <div className="block">
            {supporters.map((supporter) => (
              <Image
                name={supporter}
                style={{ width: "12rem" }}
                className="inline-block mr-3"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
