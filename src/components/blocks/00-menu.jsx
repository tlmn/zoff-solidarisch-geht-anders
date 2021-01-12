import React, { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import Stripe from "../stripe";
import menuItems from "../../config/config";

export default () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopOver, setShowPopOver] = useState(true);

  return (
    <>
      <div
        className="fixed w-screen h-screen flex justify-center items-center disclaimer"
        style={{
          display: showPopOver === true ? "block" : "none",
          zIndex: 3000,
          backdropFilter: "blur(3px)",
        }}
      >
        <div
          className="bg-white rounded-xl container m-4 p-3 flex justify-center flex-col items-center"
          style={{
            maxHeight: "80vh",
            maxWidth: "90vw",
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="overflow-y-scroll flex-1">
            <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
              <Stripe fillColor="blue" textColor="white" rotationDeg="-0.8">
                Wir machen einen Vorschlag –
              </Stripe>
              <br />
              <Stripe fillColor="blue" textColor="white" rotationDeg="0.6">
                bringt eure Pläne ein!
              </Stripe>
            </h3>
            <div className="text-base text-black">
              <p>
                Diese Homepage soll{" "}
                <strong>einen Kampagnen-Vorschlag veranschaulichen</strong>, um
                Organisationen und Netzwerke <strong>zum Mitmachen </strong>
                einzuladen.
              </p>
              <p>
                <strong>Die Page geht so nicht nach au&szlig;en</strong>,
                sondern ist ein Modell zur Illustration! Die hier genannten
                Ziele, Symbolik, Methoden und Tools kommen aus vielen
                Diskussionen, &uuml;ber die Konkretisierung entscheidet aber das
                Kampagnen-B&uuml;ndnis, wenn es startet.
              </p>
              <p>
                Die Kampagne bietet{" "}
                <strong>
                  ein Dach f&uuml;r sowieso geplante Demonstrationen und
                  Aktionen
                </strong>{" "}
                der B&uuml;ndnis-Organisationen.&nbsp;
              </p>
              <p>
                Gleichzeitig bietet sie interessierten Personen{" "}
                <strong>viele M&ouml;glichkeiten zum Mitmachen:</strong>{" "}
                Print-Material, Online-Tools und die Option,{" "}
                <strong>vor Ort aktiv zu werden.</strong>
              </p>
              <p>
                Der Vorschlag kommt{" "}
                <strong>aus der Plattform solidarische Transformation.</strong>{" "}
                Die Plattform trifft sich seit April 2020 in einem breiten
                Spektrum von Organisationen. Unser Thema in der Coronakrise: Wie
                k&ouml;nnen wir jetzt mit einer solidarischen,
                emanzipatorischen&nbsp;Position einen offensiven,
                anschlussf&auml;higen Gegenentwurf bieten sowohl zur
                herrschenden Politik des &bdquo;Zurück zur Normalität&ldquo; als
                auch zur&nbsp;rechten&nbsp;Mobilisierung?
              </p>
              <p>
                Wir schlagen vor, <strong>Sorge und Solidarität</strong> in den
                Mittelpunkt einer Kampagne zu stellen,{" "}
                <strong>
                  verstanden als soziale und ökologische Verantwortung.
                </strong>
                &nbsp;Wir sehen darin Potential für eine Erzählung, die die
                gerade in der Coronazeit Impulse unterschiedlicher Bewegungen
                und Organisationen verbindet und sie dadurch sichtbarer macht.
              </p>
              <p>
                Solidarität und Sorge m&uuml;ssen{" "}
                <strong>
                  an exemplarischen, konkreten Auseinandersetzungen festgemacht{" "}
                </strong>
                werden.&nbsp;Wir nennen hier einige Beispiele, andere sind
                vorstellbar. Wichtig scheint uns aber, nur wenige, besonders
                pr&auml;gnante politische Ziele zu nennen, um an ihnen die
                Erz&auml;hlung der Solidarit&auml;t zu konkretisieren.
              </p>
              <p>
                Damit&nbsp;positionieren wir uns{" "}
                <strong>
                  gegen jede ausgrenzende, unsolidarische, zerst&ouml;rerische
                  Politik.
                </strong>{" "}
                Wir sagen: <strong>Solidarisch geht anders! </strong>
              </p>
              <ul className="list-disc pl-3">
                <li>
                  <strong>eine Diskurs- und Dachkampagne</strong>, die soziale
                  und &ouml;kologische Bewegungen/ Organisationen&nbsp;in einer
                  Erz&auml;hlung verbindet.
                </li>
                <li>
                  <strong>
                    eine indirekte Intervention in den Bundestagswahlkampf
                  </strong>
                  , durch Betonung von Sorge und Solidarität als Aufgaben
                  staatlicher Politik, mit konkreten Forderungen/ Zielen.
                </li>
                <li>
                  <strong>
                    einen Beitrag zur Vernetzung und Organisierung
                  </strong>{" "}
                  interessierter Personen in&nbsp;Gruppen und Organisationen.
                </li>
              </ul>
              <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
                <Stripe fillColor="red" textColor="white" rotationDeg="0.2">
                  Seid Ihr dabei?
                </Stripe>
                <br />
                <Stripe fillColor="red" textColor="white" rotationDeg="-1">
                  Werdet Teil des Bündnisses!
                </Stripe>
              </h3>{" "}
              Kontakt zur Prozessgruppe der Plattform solidarische
              Transformation:
              <br />
              <Stripe fillColor="green" textColor="white" rotationDeg="-1">
                <a
                  href="mailto:sozoekocorona-info@riseup.net"
                  className="underline hover:no-underline"
                >
                  sozoekocorona-info@riseup.net
                </a>
              </Stripe>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setShowPopOver(false)}
              className="text-sm font-bold hover:bg-red hover:text-black transition-all ease-in-out duration-200 py-1 mt-2 px-1 bg-red uppercase rounded-lg text-white inline-block"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 ml-2 mb-2" style={{ zIndex: 2000 }}>
        <button
          onClick={() => setShowPopOver(true)}
          className="text-med sm:text-sm hover:bg-red hover:text-black transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block"
          style={{
            boxShadow:
              "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
          }}
        >
          Vorbemerkung anzeigen
        </button>
      </div>
      <div
        className="fixed w-full flex justify-center bottom-0 md:bg-red md:bottom-auto md:top-0"
        style={{ zIndex: 1000 }}
      >
        <ul className="my-2 hidden md:block">
          {menuItems.map((item) => (
            <li className="inline mx-1">
              <AnchorLink
                href={`#${item.slug}`}
                className="px-2 py-1 rounded-lg uppercase hover:text-white text-black font-bold transitions-all duration-200 ease-all"
              >
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <div
          className="fixed sm:hidden bottom-0 mb-2 mr-2 right-0 text-right flex items-end flex-col"
          style={{ zIndex: 4000 }}
        >
          <div
            className=""
            style={{ display: showMenu === true ? "block" : "none" }}
          >
            <ul className="text-right">
              {menuItems.map((item) => (
                <li className="mx-1 my-2">
                  <AnchorLink
                    href={`#${item.slug}`}
                    className="inline-block bg-blue hover:bg-red px-2 py-2 rounded-lg uppercase hover:text-white text-white font-bold transitions-all duration-200 ease-all"
                  >
                    {item.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="bg-blue rounded-full block right-0 mb-1 mr-1 "
            style={{ height: "60px", width: "60px" }}
          >
            <button onClick={() => setShowMenu(!showMenu)}>
              <div
                className={`hamburger hamburger--squeeze ${
                  showMenu === true ? `is-active` : ``
                }`}
              >
                <div className="hamburger-box" style={{ marginLeft: "-5px", marginTop: "3px" }}>
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
