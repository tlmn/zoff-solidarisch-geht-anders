import EdgeUpper from "../../assets/svg/edge-upper";
import React from "react";
import Stripe from "../stripe";

export default ({ slug }) => (
  <>
    <EdgeUpper fillColor="#56E6A1" />
    <div className="bg-green py-4" id={slug}>
      <div className="container grid-12">
        <div className="col-span-10 col-start-2 leading-larger text-sm text-black">
          Fehlende Krankenpfleger*innen, unbezahlbare Mieten und
          Arbeitslosigkeit hier, Hunger und tödliche Fluchtrouten im Süden der
          Welt: Corona wirkt wie wie ein Brandbeschleuniger für
          Ungerechtigkeiten. Viele Menschen merken deutlich: Wirtschaftliche
          Konkurrenz regelt die wichtigen Fragen nicht.
          <br />
          <br />
          Jetzt ist oft von Solidarität die Rede. Applaus reicht aber nicht,
          Milliarden für Industrien von gestern schaden nur. Und Solidarität,
          die an Landesgrenzen Halt macht, ist keine.
          <br />
          <br />
          Stattdessen geht es um sorgendes Handeln. Corona zeigt: Wir sind
          verletzlich und brauchen einander. Und es bleibt kaum ein Jahrzehnt,
          die Klimakrise zu stoppen. Gemeinsam können wir unsichere Zeiten
          durchstehen. Gemeinsam protestieren wir gegen Ausgrenzung und
          Zerstörung, streiten wir für wirkliche Solidarität!
          <br />
          <br />
          Wir wollen ein solidarisches Gesundheitssystem, höhere Tariflöhne und
          Arbeitszeitverkürzung. Wir machen Druck für Umverteilung des
          Reichtums, gegen das Kaputtsparen der Städte. Wir treten ein für
          sichere Fluchtwege und den Schutz des Klimas.
        </div>
        <div className="font-bold col-span-10 col-start-2 text-md">
          Wir zeigen gemeinsam:{" "}
          <Stripe fillColor="white" textColor="black" rotationDeg="-0.8">
            Solidarität geht anders.
          </Stripe>
        </div>
      </div>
    </div>
  </>
);
