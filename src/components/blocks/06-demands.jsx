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
        "<p><strong>Gesundheit ist &ouml;ffentliche Aufgabe</strong>, keine Ware<strong>.</strong> Sie steht f&uuml;r viele Bereiche, die dem Markt entzogen werden m&uuml;ssen, weil er sie nicht regelt. Die Coronakrise zeigt das &uuml;berdeutlich, mit fehlendem Pflegepersonal, mangelnder Ausr&uuml;stung, in vielen L&auml;ndern <strong>kaputtgesparten&nbsp;bzw. privatisierten Gesundheitssystemen</strong>. Impfstoff gibt es zuerst nur f&uuml;r reiche L&auml;nder, Medikamente und Intensivmedizin&nbsp;fehlen oft im Globalen S&uuml;den.&nbsp;F&uuml;r ein solidarisches Gesundheitssystem - Applaus reicht nicht!</p>",
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
        "<p>Die Pandemie <strong>verursacht und versch&auml;rft wirtschaftliche Not vieler Menschen</strong>, in reichen L&auml;ndern und drastischer im Globalen S&uuml;den. Und nach Billionen-Wirtschaftsf&ouml;rderung <strong>droht die n&auml;chste Sparwelle</strong>. N&ouml;tig sind jetzt massive Investitionen in steuerfinanzierte Infrastruktur wie Schulen und B&uuml;chereien, st&auml;dtischen Wohnungsbau und &Ouml;PNV, die allen Menschen zugute kommt. N&ouml;tig ist Umverteilung von sehr hohen Verm&ouml;gen, ein Mietendeckel und die materielle Grundgeborgenheit unabh&auml;ngig von Erwerbsarbeit!</p>",
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
        "<p>Um die sozialen Folgen der Corona-Krise abzufedern, greift der Staat der Wirtschaft unter die Arme. Doch die <strong>Rettungspakete drohen die Klimakrise weiter anzuheizen</strong>, statt den dringend n&ouml;tigen sozialen und &ouml;kologischen Umbau von Wirtschaft und Gesellschaft voranzutreiben. <strong>Klimaschutz ist immer eine Frage der Gerechtigkeit.</strong> Denn der Klimawandel trifft diejenigen am h&auml;rtesten, die ihn am wenigsten zu verantworten haben. Sorgen wir uns um das Klima, die kommenden Generationen und die Menschen im Globalen S&uuml;den! F&uuml;r Klimagerechtigkeit braucht es solidarische L&ouml;sungen!</p>",
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
        "<p><strong>Die Pandemie kennt keine Grenzen, doch Europa schottet sich immer weiter ab</strong>: Sowohl an den europ&auml;ischen Au&szlig;engrenzen als auch bereits auf den Fluchtrouten durch Nordafrika. Menschen, die vor dem Tod geflohen sind, werden von Europa an der Grenze in Lagern festgehalten. Doch ein solidarisches Europa ist m&ouml;glich! Antirassistische Bewegungen k&auml;mpfen f&uuml;r die Vision einer Welt ohne Abschottung, ohne Lager und ohne rassistische Gewalt: F&uuml;r ein offenes und solidarisches Europa &ndash; <strong>f&uuml;r globale Bewegungsfreiheit und gleiche Rechte f&uuml;r alle!</strong></p>",
      items: [
        "Für sichere Fluchtwege statt Abschottung, Lager und Gewalt",
        "Für solidarische Städte und sichere Häfen",
        "Alle Lager evakuieren",
        "Rechten Terror lückenlos aufklären",
        "Für Entkriminalisierung der zivilen und für staatliche Seenotrettung",
      ],
    },
    {
      color: "yellow",
      title: "Frauen*rechte – Care-Revolution!",
      intro:
        "<p><strong>Pandemie bedeutet viel Betreuung:</strong> f&uuml;r schwerkranke Patient*innen,&nbsp;&auml;ltere Menschen in Quarant&auml;ne, Kinder bei Schlie&szlig;ung von Kitas und Schulen. Diese Arbeit wird weltweit &uuml;berwiegend von Frauen* geleistet, unentgeltlich oder in gering bezahlten Jobs. <strong>Weibliche Sorgearbeit ist eine Voraussetzung des jetzigen Wirtschaftssystems. </strong>Arbeitslosigkeit wird f&uuml;r Alleinerziehende jetzt zum Existenzrisiko. Beratungsstellen berichten von mehr Gewalt gegen Frauen* im Lockdown. Wir streiten daf&uuml;r, sorgende Arbeit auf alle Menschen zu verteilen. Corona hei&szlig;t: Wir sind aufeinander angewiesen.</p>",
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
                <h2 className="uppercase text-black text-md font-bold leading-normal">
                  {demand.title}
                </h2>
              </div>
              <div
                className="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2  leading-larger text-med sm:text-sm text-black"
                dangerouslySetInnerHTML={{ __html: demand.intro }}
              />
              <div className="col-span-10 col-start-2 sm:col-span-9 sm:col-start-3">
                <ul className="list-disc">
                  {demand.items.map((item) => (
                    <li className="text-black text-med sm:text-sm">{item}</li>
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
