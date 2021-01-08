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
          <div className="col-span-10 col-start-2 leading-larger text-sm text-white">
            Klimakrise, Mietenwahnsinn oder Flucht: Die Corona-Pandemie wirkt
            wie ein Brandbeschleuniger für Ungerechtigkeiten und Probleme. Doch
            gemeinsam können wir Krisen überwinden und statt gegeneinander,
            miteinander Lösungen finden und neue Wege gehen. Viele Menschen
            setzen sich schon jetzt für eine gerechtere und solidarische
            Gesellschaft ein. Dieser Beitrag ist wichtig, aber wir brauchen
            langfristige politische Antworten, die das Gegeneinander beenden und
            Raum für Solidarität schaffen. Wie geht solidarisch?
          </div>
        </div>
      </div>
      <EdgeLower fillColor={colors[bgColor]} />
    </>
  );
};
