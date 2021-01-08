import Image from "../image";
import React from "react";
import Stripe from "../stripe";
export default ({ slug }) => {
  const rows = [
    {
      type: "image",
      content: {
        fileName: "SGA_Plakat_01.png",
      },
    },
    {
      type: "text",
      content: {
        title: "Themen Sichbar machen",
        text:
          "Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen & Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen &amp Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer",
      },
    },
    {
      type: "image",
      content: {
        fileName: "SGA_Plakat_02.png",
      },
    },
    {
      type: "image",
      content: {
        fileName: "SGA_Plakat_01.png",
      },
    },
    {
      type: "text",
      content: {
        title: "Dezentrale Partizipation",
        text:
          "Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen & Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen &amp Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer",
      },
    },
    {
      type: "image",
      content: {
        fileName: "SGA_ShareP_01.png",
      },
    },
    {
      type: "image",
      content: {
        fileName: "SGA__Mobile_01.png",
      },
    },
    {
      type: "text",
      content: {
        title: "Mitmachangebot und Lokale Anbindung",
        text:
          "Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen & Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen &amp Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer",
      },
    },
    {
      type: "text",
      content: {
        title: "Gesichter und Geschichten",
        text:
          "Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen & Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen &amp Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer",
      },
    },
    {
      type: "image",
      content: {
        fileName: "SGA_Zitat_01.png",
      },
    },
    {
      type: "image",
      content: {
        fileName: "SGA_Insta_01.png",
      },
    },
    {
      type: "text",
      content: {
        title: "Corona und Digitale angebot",
        text:
          "Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen & Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen &amp Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer",
      },
    },
    {
      type: "text",
      content: {
        title: "Intervention",
        text:
          "Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen & Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen &amp Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer",
      },
    },
    { type: "image", content: { fileName: "SGA_WahlP_01.png" } },
    { type: "image", content: { fileName: "SGA_Balkon_01.png" } },
    {
      type: "text",
      content: {
        title: "Bunt, divers, kämperisch",
        text:
          "Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen & Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer Text Hub für Basic-Infos, Sharepics (Zitate, Zahlen &amp Fakten), Masken, Plakate, Uhr für verlorene Einnahmen ohne Reichensteuer",
      },
    },
  ];
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
        <div className="col-span-10 col-start-2 leading-larger text-sm">
          Nur simulation Intro Text Hub für Basic-Infos, Sharepics (Zitate,
          Zahlen &amp; Fakten), Masken, Plakate, Uhr für verlorene Einnahmen
          ohne Reichensteuer
        </div>
        {rows.map((row) =>
          row.type === "text" ? (
            <div className="col-span-6">
              <h3
                className="uppercase font-bold text-md text-black"
                dangerouslySetInnerHTML={{ __html: row.content.title }}
              />
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: row.content.text }}
              />
            </div>
          ) : (
            <div className="col-span-6">
              <Image name={row.content.fileName} className="max-h-full" />
            </div>
          )
        )}
      </div>
    </div>
  );
};
