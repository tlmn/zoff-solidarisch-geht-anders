import React from "react";
import Stripe from "../stripe";

export default ({ slug }) => (
  <div className="bg-white py-4" id={slug}>
    <div className="container grid-12">
      <div className="col-span-10 text-lg uppercase font-bold">
        <Stripe fillColor="purple" textColor="white" rotationDeg="1.5">
          Wir brauchen uns jetzt
        </Stripe>
      </div>
      <div className="col-span-10 col-start-2 leading-larger text-sm text-black">
        Klimakrise, Mietenwahnsinn oder Flucht: Die Corona-Pandemie wirkt wie
        ein Brandbeschleuniger für Ungerechtigkeiten und Probleme. Doch
        gemeinsam können wir Krisen überwinden und statt gegeneinander,
        miteinander Lösungen finden und neue Wege gehen. <br />
        <br />
        Viele Menschen setzen sich schon jetzt für eine gerechtere und
        solidarische Gesellschaft ein. Dieser Beitrag ist wichtig, aber wir
        brauchen langfristige politische Antworten, die das Gegeneinander
        beenden und Raum für Solidarität schaffen. <br />
        <Stripe fillColor="purple" textColor="white" rotationDeg="-1">
          Wie geht solidarisch?
        </Stripe>
      </div>
    </div>
  </div>
);
