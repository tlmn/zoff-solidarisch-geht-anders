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
          <div className="col-span-12 sm:col-span-9 sm:col-start-3 text-med sm:text-sm text-white">
            <p>
              &Uuml;ber unsere Kampagnenwebseite und die sozialen Medien habt
              ihr die M&ouml;glichkeit, euch&nbsp;
              <strong>
                &uuml;ber geplante Aktivit&auml;ten zu informieren und euch
                diesen anzuschlie&szlig;en
              </strong>
              .
            </p>
            <ul className="list-disc pl-3 my-3">
              <li>
                Bestelle Material:{" "}
                <button className="my-1 mx-1 text-med sm:text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  jetzt Material bestellen
                </button>
              </li>
              <li>
                Druckvorlagen:{" "}
                <button className="my-1 mx-1 text-med sm:text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  jetzt downloaden
                </button>
              </li>
              <li>
                Nutze unsere digitalen Tools:{" "}
                <button className="my-1 mx-1 text-med sm:text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  jetzt downloaden
                </button>
              </li>
              <li>
                Werde aktiv in einer lokalen Gruppe:
                <button className="my-1 mx-1 text-med sm:text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  finde deine lokale Gruppe
                </button>
              </li>
              <li>
                Erhalte unseren Kampagnen-Newsletter:{" "}
                <button className="my-1 mx-1 text-med sm:text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block">
                  jetzt Newsletter bestellen
                </button>
              </li>
            </ul>
            <p>
              <strong>
                Organisationen, die dem Kampagnen-B&uuml;ndnis beitreten wollen
              </strong>
              , schreiben bitte an die Kontaktadresse des B&uuml;ndnisses:
            </p>
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
