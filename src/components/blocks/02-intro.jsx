import EdgeUpper from "../../assets/svg/edge-upper";
import React from "react";
import Stripe from "../stripe";

export default ({ slug }) => (
  <>
    <EdgeUpper fillColor="#56E6A1" />
    <div className="bg-green py-4" id={slug}>
      <div className="container">
        <div className="grid-12">
          <div className="col-span-12 sm:col-span-10 sm:col-start-2 leading-larger text-med sm:text-sm text-black">
            <p>
              <strong>Corona wirkt wie </strong>
              <strong>
                wie ein Brandbeschleuniger f&uuml;r Ungerechtigkeiten
              </strong>
              : fehlende Krankenpfleger*innen, unbezahlbare Mieten und
              Arbeitslosigkeit hier, Hunger und t&ouml;dliche Fluchtrouten im
              S&uuml;den der Welt. Viele Menschen merken deutlich:
              Wirtschaftliche Konkurrenz regelt die wichtigen Fragen nicht.
            </p>
            <p>
              Jetzt ist <strong>oft von Solidarit&auml;t die Rede</strong>.
              Applaus reicht aber nicht, Milliarden f&uuml;r Industrien von
              gestern schaden nur. Und Solidarit&auml;t, die an Landesgrenzen
              Halt macht, ist keine.
            </p>
            <p>
              <strong>Stattdessen geht es um sorgendes Handeln.</strong>
              &nbsp;Corona zeigt:&nbsp;Wir sind verletzlich und brauchen
              einander<strong>.</strong>&nbsp;Und es bleibt kaum ein Jahrzehnt,
              die Klimakrise zu stoppen. Gemeinsam k&ouml;nnen wir unsichere
              Zeiten durchstehen.{" "}
              <strong>
                Gemeinsam protestieren wir gegen Ausgrenzung und
                Zerst&ouml;rung, streiten wir f&uuml;r wirkliche
                Solidarit&auml;t!
              </strong>
            </p>
            <p>
              <strong>Wir wollen</strong> ein solidarisches Gesundheitssystem,
              h&ouml;here Tarifl&ouml;hne und Arbeitszeitverk&uuml;rzung.{" "}
              <strong>Wir machen Druck</strong> f&uuml;r Umverteilung des
              Reichtums, gegen das Kaputtsparen der St&auml;dte.{" "}
              <strong>Wir treten ein</strong> f&uuml;r sichere Fluchtwege und
              den Schutz des Klimas.
            </p>
          </div>
          <div className="font-bold col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 text-sm sm:text-md">
            Wir zeigen gemeinsam:{" "}
            <Stripe fillColor="white" textColor="black" rotationDeg="-0.8">
              Solidarisch geht anders.
            </Stripe>
          </div>
        </div>
      </div>
    </div>
  </>
);
