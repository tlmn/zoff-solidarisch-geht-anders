import Image from "../image";
import React from "react";
import Stripe from "../stripe";
export default ({ slug }) => {
  return (
    <div className="bg-white py-4" id={slug}>
      <div className="container grid-12">
        <div className="col-span-10 text-lg uppercase font-bold leading-tight sm:leading-normal">
          <Stripe fillColor="red" textColor="white" rotationDeg="1.5">
            Die Kampagne
          </Stripe>
        </div>
        <div className="col-span-12 sm:col-span-9 sm:col-start-3 text-med sm:text-sm">
          <p>
            Unseren Protest tragen wir in die &Ouml;ffentlichkeit und auf die
            Stra&szlig;e.
          </p>
          <p>
            Die Kampagne bietet{" "}
            <strong>
              ein Dach f&uuml;r sowieso geplante Demonstrationen und Aktionen
              der B&uuml;ndnis-Organisationen.
            </strong>
          </p>
          <p>
            Gleichzeitig bietet sie interessierten Personen{" "}
            <strong>viele M&ouml;glichkeiten zum Mitmachen:</strong> neben
            Print-Material und Online-Tools die Option, sich auch vor Ort
            zusammenzuschlie&szlig;en und aktiv zu werden.
          </p>
        </div>

        {/* REGIONALE AKTIVITÄTEN */}
        <div className="col-span-10 text-lg uppercase font-bold leading-tight sm:leading-normal">
          <Stripe fillColor="green" textColor="white" rotationDeg="1.5">
            DIE KAMPAGNE ALS DACH FÜR EURE DEMOS UND AKTIONEN
          </Stripe>
        </div>

        <div className="col-span-9 col-start-3 text-sm">
          <div className="text-med sm:text-sm">
            <p>
              Das Kampagnen-Bündnis vereint verschiedener Organisationen,
              Bewegungen und Netzwerke. Wir beziehen unsere eigenen Kampagnen
              und Mobilisierungen auf eine <strong>gemeinsame Message</strong>,
              machen Solidarität konkret an gemeinsamen Zielen. Wir verabreden
              unser Timing und einen gemeinsamen Aktionsrahmen.
            </p>
          </div>
        </div>
        <div className="col-span-12">
          <Image name="Demo_02.jpg" />
        </div>

        <div className="col-span-10 text-lg uppercase font-bold leading-tight sm:leading-normal">
          <Stripe fillColor="green" textColor="white" rotationDeg="1.5">
            Mitmachen
          </Stripe>
        </div>

        {/* THEMEN SICHTBAR MACHEN */}

        <div className="col-span-12 sm:col-span-6">
          <Image name="Plakate_01.jpg" className="" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            PLAKATE, FLYER, STICKER &amp; CO
          </h3>
          <div className="text-med sm:text-sm">
            Was wollen wir konkret? Wie geht Solidarität? Wofür streiten wir -
            und wogegen? Das machen wir durch Plakate, Flyer, Symbole, Sticker
            und anderes Material verständlich.
          </div>
          <Image name="Flyers_01.jpg" />
        </div>

        <div className="col-span-12">
          <Image name="Plakate_02.jpg" />
        </div>

        {/* DIGITALE ANGEBOTE & TOOLS */}

        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            ONLINE-TOOLS
          </h3>
          <div className="text-med sm:text-sm">
            Besonders in der Coronazeit finden wir neue Formen zum Mitmachen:
            Social Media-Kampagnen, ein Sharepic-Generator und vieles mehr.
          </div>
          <Image name="ShareP_01.jpg" />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Image name="Instagram_01.jpg" />
        </div>

        {/* GESICHTER UND GESCHICHTEN */}

        <div className="col-span-12 sm:col-span-6">
          <Image name="Plakate_03.jpg" />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            Gesichter und Geschichten
          </h3>
          <div className="text-med sm:text-sm">
            Unser Kampf für eine gerechtere und ökolögische Zukunft ist konkret.
            Unsere Ziele und Forderungen lassen sich an Geschichten und
            Gesichtern festmachen.
          </div>
          <Image name="Zitat_01.jpg" />
        </div>

        {/* LOKALE ANBINDUNG */}

        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            Sich vor Ort zusammentun
          </h3>
          <div className="text-med sm:text-sm">
            Mehrere Organisationen im Kampagnen-Bündnis haben sehr aktive
            Regionalgruppen. Durch Ansprechpersonen und Tools erleichtern wir
            es, sich zu organisieren und zu vernetzen.
          </div>
          <Image name="Chat_01.jpg" />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Image name="Mobile_01.jpg" />
        </div>

        {/* REGIONALE AKTIVITÄTEN */}

        <div className="col-span-12 sm:col-span-6">
          <Image name="Demo_01.jpg" />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            Das Bündnis geht auf die Straße
          </h3>
          <div className="text-med sm:text-sm">
            Als Kampagnen-Bündnis rufen wir zu regionalen oder überregionalen,
            corona-verantwortbaren Kundgebungen oder Aktionstagen auf
          </div>
        </div>
      </div>
    </div>
  );
};
