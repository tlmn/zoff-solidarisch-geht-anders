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
        <p>
          Viele Menschen setzen sich schon jetzt{" "}
          <strong>
            gemeinsam f&uuml;r eine gerechtere und solidarische Gesellschaft
          </strong>{" "}
          ein. In Sozialverb&auml;nden, Gewerkschaften und Initiativen, in
          feministischen und antirassistischen Organisationen, in Klimabewegung
          und Umweltverb&auml;nden und an ihren&nbsp;Arbeitspl&auml;tzen zeigen
          sie Gesicht, protestieren gemeinsam und leben bessere Alternativen.
        </p>
        <p>
          Wir wollen in dieser Kampagne dazu beitragen,{" "}
          <strong>
            ihre Stimmen h&ouml;rbar zu machen in einer gemeinsamen
            Erz&auml;hlung der Solidarit&auml;t
          </strong>
          , der sozialen und &ouml;kologischen Verantwortung.
        </p>
        <p>
          <strong>
            Wof&uuml;r treten wir ein &shy;&ndash; und wogegen streiten wir?
          </strong>
        </p>
        <Stripe fillColor="purple" textColor="white" rotationDeg="-1">
          Wie geht solidarisch?
        </Stripe>
      </div>
    </div>
  </div>
);
