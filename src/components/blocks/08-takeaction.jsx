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
            Möglichkeit, euch über geplante Aktivitäten zu informieren und euch
            diesen anzuschließen.
            <ul className="list-disc pl-3 my-3">
              <li>
                Bestelle Material:{" "}
                <button className="my-1 mx-1 text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  jetzt bestellen
                </button>
              </li>
              <li>
                Nutze unsere digitalen Tools:{" "}
                <button className="my-1 mx-1 text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  Download
                </button>
              </li>
              <li>
                Werde aktiv in einer lokalen Gruppe in Deiner Nähe!
                <button className="my-1 mx-1 text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  jetzt bestellen
                </button>
              </li>
              <li>
                Erhalte unseren Kampagnen-Newsletter:{" "}
                <button className="my-1 mx-1 text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  jetzt Newsletter bestellen
                </button>
              </li>
            </ul>
            <strong>
              Organisationen, die dem Kampagnen-Bündnis beitreten wollen
            </strong>
            , schreiben bitte an: Kontaktadresse des Bündnisses:{" "}
            <a
              href="mailto:sozoekocorona-info@riseup.net"
              className="underline hover:no-underline"
            >
              sozoekocorona-info@riseup.net
            </a>
          </div>
        </div>
      </div>
      <EdgeLower fillColor={colors[bgColor]} />
    </>
  );
};
