import React from "react";
import Stripe from "../stripe";

export default ({ slug }) => (
  <div className="bg-white py-4" id={slug}>
    <div className="container grid-12">
      <div className="col-span-10 text-lg uppercase font-bold leading-tight sm:leading-normal">
        <Stripe fillColor="purple" textColor="white" rotationDeg="1.5">
          Was wir wollen
        </Stripe>
      </div>
      <div className="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 leading-larger text-med sm:text-sm text-black">
        Viele Menschen setzen sich schon jetzt gemeinsam für eine gerechtere und
        solidarische Gesellschaft ein. In Sozialverbänden, Gewerkschaften und
        Initiativen, in feministischen und antirassistischen Organisationen, in
        Klimabewegung und Umweltverbänden und an ihren Arbeitsplätzen zeigen sie
        Gesicht, protestieren gemeinsam und leben bessere Alternativen.
        <br />
        <br />
        Wir wollen in dieser Kampagne dazu beitragen, ihre Stimmen hörbar zu
        machen in einer gemeinsamen Erzählung der Solidarität, der sozialen und
        ökologischen Verantwortung.
        <br />
        <br />
        Wofür treten wir ein – und wogegen streiten wir?
        <br />
        <br />
        <Stripe fillColor="purple" textColor="white" rotationDeg="-1">
          Wie geht solidarisch?
        </Stripe>
      </div>
    </div>
  </div>
);
