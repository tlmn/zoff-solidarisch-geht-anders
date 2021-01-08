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
        "Gesundheit ist öffentliche Aufgabe, keine Ware. Sie steht für viele Bereiche, die dem Markt entzogen werden müssen, weil er sie nicht regelt. Die Coronakrise zeigt das überdeutlich, mit fehlendem Pflegepersonal, mangelnder Ausrüstung, in vielen Ländern kaputtgesparten Gesundheitssystemen und Impfungen zuerst nur für reiche Länder. Das Gleiche gilt für Kitas, Schulen, Sozialarbeit: Zukunftsrelevant sind Sorge- und Dienstleistungsberufe, oft von Frauen* ausgeübt. Diese Arbeit braucht materielle Aufwertung - Applaus reicht nicht",
      items: [
        "Mehr Personal und gute Gehälter in Pflege und Kitas.",
        "Bürgerversicherung statt Zweiklassenmedizin",
        "Öffentliche Krankenhausfinanzierung statt Privatisierung und Fallpauschalen",
        "Globale Sicherung und Patentfreiheit für lebenswichtige Impfstoffe und Medikamente",
      ],
    },
    {
      color: "green",
      title: "Sozialer Zusammenhalt",
      intro:
        "Die Pandemie verursacht und verschärft wirtschaftliche Not vieler Menschen, in reichen Ländern und drastischer im Globalen Süden. Und nach Billionen-Wirtschaftsförderung droht die nächste Sparwelle. Nötig sind jetzt massive Investitionen in steuerfinanzierte Infrastruktur wie Schulen und Büchereien, städtischen Wohnungsbau und ÖPNV, die allen Menschen zugute kommt. Nötig ist Umverteilung von sehr hohen Vermögen, ein Mietendeckel und die materielle Grundgeborgenheit unabhängig von Erwerbsarbeit. ",
      items: [
        "Guter Wohnraum für alle - für Mietenbegrenzung und Wohnprojekte, gegen Spekulation",
        "Umverteilung statt Kaputtsparen, für Vermögenssteuer und kostenlose soziale Infrastruktur",
        "Schuldenerlass für den Globalen Süden, Rückzahlung der Klimaschulden",
      ],
    },
    {
      color: "blue",
      title: "Klimakrise kennt keinen Lockdown",
      intro:
        "Um die sozialen Folgen der Corona-Krise abzufedern, greift der Staat der Wirtschaft unter die Arme. Doch die Rettungspakete drohen die Klimakrise weiter anzuheizen, statt den dringend nötigen sozialen und ökologischen Umbau von Wirtschaft und Gesellschaft voranzutreiben. Klimaschutz ist immer eine Frage der Gerechtigkeit. Denn der Klimawandel trifft diejenigen am härtesten, die ihn am wenigsten zu verantworten haben. Sorgen wir uns um das Klima, die kommenden Generationen und die Menschen im Globalen Süden! Für Klimagerechtigkeit braucht es solidarische Lösungen!",
      items: [
        "Eine Krisenpolitik, die zugleich für einen sozial-ökologischen Wandel genutzt wird",
        "Eine Klimapolitik, die dem 1,5-Grad-Ziel gerecht wird",
        "Keine Staatshilfen für Klimasünder! ",
        "Ein sofortiger Kohlestopp und ein solidarischer Strukturwandel:",
        "Ein ÖPNV-Ausbau und Fahrradwege statt Autobahnbau und Airline-Förderung",
      ],
    },
    {
      color: "purple",
      title: "Rechte statt Mitleid!",
      intro:
        "Ob auf dem Mittelmeer, vor den Kanaren, auf den griechischen Inseln, in Bosnien, in Libyen: Geflüchtete Menschen werden mit EU-Geldern in katastrophalen Zuständen an den europäischen Grenzen festgehalten. Doch ein solidarisches Europa ist möglich! Antirassistische Bewegungen kämpfen für die Vision einer Welt ohne Abschottung, ohne Lager und Haftzentren: Für ein offenes und solidarisches Europa - für globale Bewegungsfreiheit und gleiche Rechte für alle!",
      items: [
        "Für sichere Fluchtwege statt Abschottung, Lager und Gewalt",
        "Solidarische Städte und Sichere Häfen",
        "Alle Lager abschaffen/evakuieren!",
        "Rechten Terror lückenlos aufklären!",
        "Für entkriminalisierung der zivilen und für staatliche Seenotrettung!"
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
              <div className="col-span-12 text-center">
                <h2 className="uppercase text-white text-md font-bold">
                  {demand.title}
                </h2>
              </div>
              <div className="col-span-10 col-start-2 leading-larger text-sm text-white">
                {demand.intro}
              </div>
              <div
                className="col-span-9
               col-start-3"
              >
                <ul className="list-disc">
                  {demand.items.map((item) => (
                    <li className="text-white text-sm">{item}</li>
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
