import Image from "../image";
import React from "react";
import Stripe from "../stripe";
export default ({ slug }) => {
  return (
    <div className="bg-white py-4" id={slug}>
      <div className="container grid-12">
        <div className="col-span-10 text-lg uppercase font-bold">
          <Stripe fillColor="red" textColor="white" rotationDeg="1.5">
            Die Kampagne
          </Stripe>
        </div>
        <div className="col-span-9 col-start-3 text-sm">
          Die Aktions-Bündnis bietet viele Möglichkeiten zum Mitmachen von
          Personen:
          <ul className="list-disc pl-3">
            <li>
              Material und Online-Tools: Wir zeigen, was Solidarität ist, was
              wir wollen und fordern.
            </li>
            <li>
              Gesichter und Geschichten: Wir zeigen, wie Solidarität im Alltag
              gelebt wird.
            </li>
            <li>
              Sich vor Ort zusammentun: Wir erleichtern den Anschluss an
              Regionalgruppen.
            </li>
            <li>
              Aktivitäten der Kampagne: Das Bündnis geht auf die Straße
              Gleichzeitig ist die Kampagne ein Dach für sowieso geplante
              Demonstrationen und Aktionen der Bündnis-Organisationen.
            </li>
            <li>
              Sie positionieren sich damit gemeinsam, für welche Solidarität sie
              streiten und machen sich gemeinsam hörbar.
            </li>
            <li>
              Organisationen gehen ins Bündnis: Ein Dach für eigene Kampagnen
            </li>
          </ul>
        </div>

        <div className="col-span-10 text-lg uppercase font-bold">
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
          <div className="text-sm">
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
          <div className="text-sm">
            Besonders in der Coronazeit finden wir neue Formen zum Mitmachen:
            Social Media-Kampagnen, ein Sharepic-Generator, und vieles mehr.
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
          <div className="text-sm">
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
          <div className="text-sm">
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
          <div className="text-sm">
            Als Kampagnen-Bündnis rufen wir zu regionalen oder überregionalen,
            corona-verantwortbaren Kundgebungen oder Aktionstagen auf
          </div>
        </div>

        <div className="col-span-12">
          <Image name="Demo_02.jpg" />
        </div>

        {/* REGIONALE AKTIVITÄTEN */}
        <div className="col-span-10 text-lg uppercase font-bold">
          <Stripe fillColor="green" textColor="white" rotationDeg="1.5">
            DIE KAMPAGNE ALS DACH FÜR EURE DEMOS UND AKTIONEN
          </Stripe>
        </div>
        <div className="col-span-9 col-start-3 text-sm">
          <div className="text-sm">
            Das Kampagne-Bündnis vereint verschiedener Organisationen,
            Bewegungen und Netzwerke. Wir beziehen unsere eigenen Kampagnen und
            Mobilisierungen auf eine gemeinsame Message, machen Solidarität
            konkret an gemeinsamen Zielen. Wir verabreden unser Timing und einen
            gemeinsamen Aktionsrahmen.
          </div>
        </div>
      </div>
    </div>
  );
};
