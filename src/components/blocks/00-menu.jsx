import React, { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import menuItems from "../../config/config";

export default () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopOver, setShowPopOver] = useState(true);

  return (
    <>
      <div
        className="fixed w-screen h-screen flex justify-center items-center"
        style={{
          display: showPopOver === true ? "block" : "none",
          zIndex: 3000,
          backdropFilter: "blur(3px)",
        }}
      >
        <div
          className="bg-blue rounded-xl container m-4 p-3 flex justify-center flex-row items-center grid-12"
          style={{ maxHeight: "80vh" }}
        >
          <div
            className="col-span-12 sm:col-span-10 sm:col-start-2 overflow-y-scroll"
            style={{ maxHeight: "400px" }}
          >
            <h3 className="leading-tight mb-2 uppercase font-bold text-md text-white">
              Wir machen einen Vorschlag
              <br />
              bringt eure Pläne ein!
            </h3>
            <div className="text-base text-white">
              Diese Homepage soll einen Kampagnen-Vorschlag veranschaulichen, um
              Organisationen und Netzwerke zum Mitmachen einzuladen. <br />
              <br />
              Die Page geht so nicht nach außen, sondern ist ein Modell zur
              Illustration! Die hier genannten Ziele, Symbolik, Methoden und
              Tools kommen aus vielen Diskussionen, über die Konkretisierung
              entscheidet aber das Kampagnen-Bündnis, wenn es startet.
              <br />
              <br />
              Der Vorschlag kommt aus der Plattform solidarische Transformation.
              Die Plattform trifft sich seit April 2020 in einem breiten
              Spektrum von Organisationen. Unser Thema in der Coronakrise: Wie
              können wir jetzt mit einer solidarischen, emanzipatorischen
              Position einen offensiven, anschlussfähigen Gegenentwurf bieten
              sowohl zur herrschenden Politik des „Zurück zur Normalität“ als
              auch zur rechten Mobilisierung? <br />
              <br />
              Wir schlagen vor, Sorge und Solidarität in den Mittelpunkt einer
              Kampagne zu stellen, verstanden als soziale und ökologische
              Verantwortung. Wir sehen darin Potential für eine Erzählung, die
              die gerade in der Coronazeit Impulse unterschiedlicher Bewegungen
              und Organisationen verbindet und sie dadurch sichtbarer macht.
              <br />
              <br />
              Solidarität und Sorge müssen an exemplarischen, konkreten
              Auseinandersetzungen festgemacht werden. Wir nennen hier einige
              Beispiele, andere sind vorstellbar. Wichtig scheint uns aber, nur
              wenige, besonders prägnante politische Ziele zu nennen, um an
              ihnen die Erzählung der Solidarität zu konkretisieren. <br />
              <br />
              Damit positionieren wir uns gegen jede ausgrenzende,
              unsolidarische, zerstörerische Politik. Wir sagen: Solidarisch
              geht anders!
              <br />
              <br />
              Was können wir erreichen?
              <ul className="list-disc pl-3">
                <li>
                  eine Diskurs- und Dachkampagne, die soziale und ökologische
                  Bewegungen/ Organisationen in einer Erzählung verbindet
                </li>
                <li>
                  eine indirekte Intervention in den Bundestagswahlkampf, durch
                  Betonung von Sorge und Solidarität als Aufgaben staatlicher
                  Politik, mit konkreten Forderungen/ Zielen.
                </li>
                <li>
                  einen Beitrag zur Vernetzung und Organisierung interessierter
                  Personen in Gruppen und Organisationen.
                </li>
              </ul>
              Das Kampagne-Bündnis bietet dazu Material, Onlinetools und
              gemeinsame Aktivitäten an. Die Kampagne lebt besonders durch
              Regionalgruppen teilnehmender Organisationen. Und ist nicht als
              Alternative, sondern als „Dacherzählung“ sowieso geplanter
              Kampagnen gedacht.
              <br />
              <br />
              <h3 className="leading-tight mb-2 uppercase font-bold text-md text-white">
                Seid Ihr dabei? Werdet Teil des Bündnisses!
              </h3>{" "}
              Kontakt zur Prozessgruppe der Plattform solidarische
              Transformation:
              <br />
              <a
                href="mailto:sozoekocorona-info@riseup.net"
                className="underline hover:no-underline"
              >
                sozoekocorona-info@riseup.net
              </a>
            </div>
          </div>
          <div className="col-span-12 flex justify-center">
            <button
              onClick={() => setShowPopOver(false)}
              className="text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 ml-2 mb-2" style={{ zIndex: 2000 }}>
        <button
          onClick={() => setShowPopOver(true)}
          className="text-sm hover:bg-red hover:text-white transition-all ease-in-out duration-200 py-1 px-1 bg-white rounded-lg text-blue inline-block"
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

        <div className="">
          <div className="bg-blue rounded-full">
            <div className="hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
