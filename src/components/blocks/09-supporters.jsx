import React from "react";
import Stripe from "../stripe";

export default ({ slug }) => {
  return (
    <div className="bg-white py-4" id={slug}>
      <div className="container grid-12">
        <div className="col-span-10 text-lg uppercase font-bold leading-tight sm:leading-normal">
          <Stripe fillColor="green" textColor="white" rotationDeg="1.2">
            Das Kampagnen-Bündnis
          </Stripe>
        </div>
        <div className="col-span-12 sm:col-span-9 sm:col-start-3 text-med sm:text-sm">
          <strong>
            Das Bündnis besteht zur Zeit noch nicht. Wenn es startet, werden
            hier die teilnehmenden Organisationen und Netzwerke genannt.
          </strong>
          <br />
          <br />
          <strong>Die Plattform solidarische Transformation</strong> diskutiert
          zur Zeit den Kampagnenvorschlag und bezieht weitere Organisationen mit
          ein. <br />
          <br />
          An den Treffen der Plattform haben in den vergangenen Monaten diese
          Organisationen teilgenommen (teilweise mandatiert):
          <ul className="list-disc pl-3 my-3">
            <li>350.org</li>
            <li>afrique-europe-interact</li>
            <li>Attac</li>
            <li>BUND</li>
            <li>Campact</li>
            <li>Ende Gel&auml;nde</li>
            <li>Fridays For Future</li>
            <li>Gemeinsam gegen die Tierindustrie</li>
            <li>IG Metall</li>
            <li>Initiative Offene Gesellschaft</li>
            <li>Interventionistische Linke</li>
            <li>Klimaallianz</li>
            <li>Konzeptwerk Neue &Ouml;konomie</li>
            <li>medico</li>
            <li>Netzwerk Care Revolution</li>
            <li>Netzwek Polylux</li>
            <li>NOW</li>
            <li>Parit&auml;tischer Gesamtverband</li>
            <li>Robin Wood</li>
            <li>Seebr&uuml;cke</li>
            <li>Umweltistitut M&uuml;nchen</li>
            <li>#unteilbar</li>
            <li>Ver.di</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
