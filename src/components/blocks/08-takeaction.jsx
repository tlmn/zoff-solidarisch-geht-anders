import EdgeLower from "../../assets/svg/edge-lower";
import EdgeUpper from "../../assets/svg/edge-upper";
import React from "react";
import { colors } from "../../config/config";

export default ({ slug }) => {
  const bgColor = "red";
  return (
    <>
      <EdgeUpper fillColor={colors[bgColor]} />
      <div className={`bg-${bgColor} py-4`} id={slug}>
        <div className="container grid-12">
          <div className="col-span-12 flex justify-center">
            <h2 className="uppercase text-white text-md font-bold">
              Kontakt und Info
            </h2>
          </div>
          <div className="col-span-10 col-start-2 leading-larger text-sm text-white">
            Über unsere Kampagnenwebseite und die sozialen Medien habt ihr die
            Möglichkeit, euh über geplante Aktivitäten zu informieren und euch
            diesen anzuschließen.
            <ul className="list-disc pl-3 my-3">
              <li>Bestelle Material</li>
              <li>Nutze unsere digitalen Tools</li>
              <li>Werde aktiv in einer lokalen Gruppe in Deiner Nähe!</li>
              <li>Erhalte unseren Kampagnen-Newsletter </li>
            </ul>
            Organisationen, die dem Kampagnen-Bündnis beitreten wollen,
            schreiben bitte an: Kontaktadresse des Bündnisses:{" "}
            <a href="mailto:sozoekocorona-info@riseup.net">
              sozoekocorona-info@riseup.net
            </a>
          </div>
        </div>
      </div>
      <EdgeLower fillColor={colors[bgColor]} />
    </>
  );
};
