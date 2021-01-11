import EdgeLower from "../../assets/svg/edge-lower";
import EdgeUpper from "../../assets/svg/edge-upper";
import React from "react";
import { colors } from "../../config/config";

export default ({ slug }) => {
  const demands = [
    {
      color: "red",
      title: "Gesundheit für alle!",
      intro:
        "Gesundheit ist öffentliche Aufgabe, keine Ware. Sie steht für viele Bereiche, die dem Markt entzogen werden müssen, weil er sie nicht regelt. Die Coronakrise zeigt das überdeutlich, mit fehlendem Pflegepersonal, mangelnder Ausrüstung, in vielen Ländern kaputtgesparten bzw. privatisierten Gesundheitssystemen. Impfstoff gibt es zuerst nur für reiche Länder, Medikamente und Intensivmedizin fehlen oft im Globalen Süden. Für ein solidarisches Gesundheitssystem – Applaus reicht nicht!",
      items: [
        "Mehr Personal und höhere Gehälter in Pflege und Kitas",
        "Bürgerversicherung statt Zweiklassenmedizin",
        "Öffentliche Krankenhausfinanzierung statt Privatisierung und Fallpauschalen",
        "Globale Sicherung und Patentfreiheit für lebenswichtige Impfstoffe und Medikamente",
      ],
    },
    {
      color: "green",
      title: "Materielle Sicherheit",
      intro:
        "Die Pandemie verursacht und verschärft wirtschaftliche Not vieler Menschen, in reichen Ländern und drastischer im Globalen Süden. Und nach Billionen-Wirtschaftsförderung droht die nächste Sparwelle. Nötig sind jetzt massive Investitionen in steuerfinanzierte Infrastruktur wie Schulen und Büchereien, städtischen Wohnungsbau und ÖPNV, die allen Menschen zugute kommt. Nötig ist Umverteilung von sehr hohen Vermögen, ein Mietendeckel und die materielle Grundgeborgenheit unabhängig von Erwerbsarbeit!",
      items: [
        "Guter Wohnraum für alle – für Mietenbegrenzung und Wohnprojekte, gegen Spekulation",
        "Umverteilung statt Kaputtsparen – für Vermögenssteuer und Abgabe auf sehr hohe Einkommen",
        "Ausbau kostenloser soziale Infrastruktur aus Steuermitteln",
        "Schuldenerlass für den Globalen Süden, Rückzahlung der Klimaschulden",
      ],
    },
    {
      color: "blue",
      title: "Die Klimakrise kennt keinen Lockdown",
      intro:
        "Um die sozialen Folgen der Corona-Krise abzufedern, greift der Staat der Wirtschaft unter die Arme. Doch die Rettungspakete drohen die Klimakrise weiter anzuheizen, statt den dringend nötigen sozialen und ökologischen Umbau von Wirtschaft und Gesellschaft voranzutreiben. Klimaschutz ist immer eine Frage der Gerechtigkeit. Denn der Klimawandel trifft diejenigen am härtesten, die ihn am wenigsten zu verantworten haben. Sorgen wir uns um das Klima, die kommenden Generationen und die Menschen im Globalen Süden! Für Klimagerechtigkeit braucht es solidarische Lösungen!",
      items: [
        "Eine Krisenpolitik, die zugleich für einen sozial-ökologischen Wandel sorgt.",
        "Eine Klimapolitik, die dem 1,5-Grad-Ziel gerecht wird",
        "Keine Staatshilfen für Klimasünder",
        "Sofortiger Kohlestopp und solidarischer Strukturwandel",
        "ÖPNV-Ausbau und Fahrradwege statt Autobahnbau und Airline-Förderung",
      ],
    },
    {
      color: "purple",
      title: "Flucht und Migration – Rechte statt Lager!",
      intro:
        "Die Pandemie kennt keine Grenzen, doch Europa schottet sich immer weiter ab: Sowohl an den europäischen Außengrenzen als auch bereits auf den Fluchtrouten durch Nordafrika. Menschen, die vor dem Tod geflohen sind, werden von Europa an der Grenze in Lagern festgehalten. Doch ein solidarisches Europa ist möglich! Antirassistische Bewegungen kämpfen für die Vision einer Welt ohne Abschottung, ohne Lager und ohne rassistische Gewalt: Für ein offenes und solidarisches Europa – für globale Bewegungsfreiheit und gleiche Rechte für alle!",
      items: [
        "Für sichere Fluchtwege statt Abschottung, Lager und Gewalt",
        "Für solidarische Städte und sichere Häfen",
        "Alle Lager evakuieren",
        "Rechten Terror lückenlos aufklären",
        "Für Entkriminalisierung der zivilen und für staatliche Seenotrettung",
      ],
    },
    {
      color: "green",
      title: "Frauen*rechte – Care-Revolution!",
      intro:
        "Pandemie bedeutet viel Betreuung: für schwerkranke Patient*innen, ältere Menschen in Quarantäne, Kinder bei Schließung von Kitas und Schulen. Diese Arbeit wird weltweit überwiegend von Frauen* geleistet, unentgeltlich oder in gering bezahlten Jobs. Weibliche Sorgearbeit ist eine Voraussetzung des jetzigen Wirtschaftssystems. Arbeitslosigkeit wird für Alleinerziehende jetzt zum Existenzrisiko. Beratungsstellen berichten von mehr Gewalt gegen Frauen* im Lockdown. Wir streiten dafür, sorgende Arbeit auf alle Menschen zu verteilen. Corona heißt: Wir sind aufeinander angewiesen.",
      items: [
        "Gendergerechte, gute Tariflöhne",
        "Kürzere Erwerbsarbeit mit finanzieller Absicherung für alle Menschen ",
        "Staatliche Förderung von Frauen*projekten und gemeinschaftlichen Wohnformen",
        "Sorgende Arbeit von allen – gutes Leben für alle!",
      ],
    },
  ];

  return (
    <>
      {demands.map((demand) => (
        <>
          <EdgeUpper fillColor={colors[demand.color]} />
          <div className={`bg-${demand.color} py-4`} id={slug}>
            <div className="container grid-12">
              <div className="col-span-12 text-left sm:text-center">
                <h2 className="uppercase text-white text-md font-bold leading-normal">
                  {demand.title}
                </h2>
              </div>
              <div className="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2  leading-larger text-med sm:text-sm text-white">
                {demand.intro}
              </div>
              <div
                className="col-span-10 col-start-2 sm:col-span-9 sm:col-start-3"
              >
                <ul className="list-disc">
                  {demand.items.map((item) => (
                    <li className="text-white text-med sm:text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <EdgeLower fillColor={colors[demand.color]} />
        </>
      ))}
    </>
  );
};
