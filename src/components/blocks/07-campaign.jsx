import Image from "../image";
import React from "react";
import Stripe from "../stripe";
export default ({ slug }) => {
  return (
    <div className="bg-white py-4" id={slug}>
      <div className="container grid-12">
        <div className="col-span-12">
          <div className="col-span-10 text-lg uppercase font-bold flex justify-end">
            <Stripe fillColor="blue" textColor="white" rotationDeg="1.5">
              Warum eine Kampagne?
            </Stripe>
          </div>
        </div>
        <div className="col-span-10 col-start-2 leading-larger text-sm">
          Wir haben Solidarität verlernt: Wo nur noch wirtschaftlich gedacht
          wird, ist es schwer füreinander einzustehen. Dabei brauchen die
          aktuellen Krisen um so mehr gemeinschaftliche Antworten. Aber wenn wir
          der Zukunft eine Vision geben, können wir gemeinsam eine gerechtere
          und offene Gesellschaft gestalten! <br />
          Um diese Vision zu entwickeln und zu tragen, wollen Gesichter und
          Geschichten solidarischen Lebens zeigen und erzählen. So schaffen wir
          Raum und Bewusstsein, um Solidarität zu denken und zu leben.
        </div>
        <div className="col-span-12">
          <div className="col-span-10 text-lg uppercase font-bold">
            <Stripe fillColor="red" textColor="white" rotationDeg="1.5">
              Kampagnen-Skizze
            </Stripe>
          </div>
        </div>

        {/* THEMEN SICHTBAR MACHEN */}

        <div className="col-span-12 sm:col-span-6">
          <Image name="Plakate_01.jpg" className="" />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            Themen sichtbar machen
          </h3>
          <div className="text-sm">
            Die Folgen von Krisen haben viele Facetten. Sie wirken
            unterschiedlich in verschiedenen Lebensbereichen und
            gesellschaftlichen Gruppen. Diese Unterschiedlichkeit der Probleme
            und Themen wollen wir sichtbar machen.
          </div>
          <Image name="Flyers_01.jpg" />
        </div>

        <div className="col-span-12">
          <Image name="Plakate_02.jpg" />
        </div>

        {/* DIGITALE ANGEBOTE & TOOLS */}

      
        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            Dezentrale Partizipation
          </h3>
          <div className="text-sm">
            Besonders in Zeiten von Social Distancing muss Partizipation neue
            Formen finden. Dafür legen wir den Schwerpunkt auf Materialien und
            Tools, die dezentral oder online verteilt werden.
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
            Mit Gesichtern und Geschichten schaffen wir eine authentische
            Erzählung. So zeigen wir, wie Solidarität im Alltag gelebt wird und
            welche Forderungen wir stellen.
          </div>
          <Image name="Zitat_01.jpg" />
        </div>

        {/* LOKALE ANBINDUNG */}

        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            Mitmachangebote und lokale Anbindung
          </h3>
          <div className="text-sm">
            Unsere Dachkampagne vereint verschiedene Strömungen und Interessen.
            Diese Bündnis-Stärke wollen wir nutzen. Über lokale Angebote soll
            eine lebendige Anbindung an Kämpfe vor Ort entstehen.
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
            Regionale Aktivitäten
          </h3>
          <div className="text-sm">
            Text dazu
          </div>
        </div>

        <div className="col-span-12">
          <Image name="Demo_02.jpg" />
        </div>


        {/* REGIONALE AKTIVITÄTEN */}

     
        <div className="col-span-12 sm:col-span-6">
          <h3 className="leading-tight mb-2 uppercase font-bold text-md text-black">
            Sichtbarkeit bei laufenden Aktionen
          </h3>
          <div className="text-sm">
            Text dazu
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Image name="Demo_03.jpg" />
        </div>
      </div>
    </div>
  );
};
