import Carousel from "re-carousel";
import Div100vh from "react-div-100vh";
import Image from "../image";
import React from "react";
import Stripe from "../stripe";

export default ({ slug }) => (
  <Div100vh>
    <div className="border-9 border-yellow h-screen" id={slug}>
      <Carousel loop auto>
        <div style={{ height: "100%" }}>
          <div className="relative h-full">
            <Image name="04-1.jpg" className="h-full" />
            <div
              className="absolute top-0 left-0 z-20 w-8/12 h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 47.92%, #000000 100%);",
                mixBlendMode: "multiply",
              }}
            />
            <span
              className="text-sm sm:text-xl leading-tight sm:leading-wider xxl:text-xxl text-white z-20 absolute bottom-0 left-0 w-8/12 sm:w-1/2 ml-2 mb-2 sm:ml-3 sm:mb-3"
              style={{
                textShadow:
                  "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
              }}
            >
              Applaus für Pflege reicht nicht. Wir brauchen mehr Personal,
              bessere Gehälter,
              <Stripe fillColor="red" textColor="white" rotationDeg="-1">
                eine radikal andere Gesundheitspolitik!
              </Stripe>
            </span>
          </div>
        </div>
        <div style={{ height: "100%" }}>
          <div className="relative h-full">
            <Image name="04-2.jpg" className="h-full" />
            <div
              className="absolute top-0 left-0 z-20 w-8/12 h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 47.92%, #000000 100%);",
                mixBlendMode: "multiply",
              }}
            />
            <span
              className="text-sm sm:text-xl leading-tight sm:leading-wider xxl:text-xxl text-white z-20 absolute bottom-0 left-0 w-8/12 sm:w-1/2 ml-2 mb-2 sm:ml-3 sm:mb-3"
              style={{
                textShadow:
                  "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
              }}
            >
              Wir fliehen aus Verfolgung, Hunger oder Krieg, aber Europa
              schottet sich ab.
              <Stripe fillColor="red" textColor="white" rotationDeg="-1">
                Für sichere Fluchtwege statt unmenschlicher Lager, für Recht auf
                Asyl!
              </Stripe>
            </span>
          </div>
        </div>
        <div style={{ height: "100%" }}>
          <div className="relative h-full">
            <Image name="04-3.jpg" className="h-full" />
            <div
              className="absolute top-0 left-0 z-20 w-8/12 h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 47.92%, #000000 100%);",
                mixBlendMode: "multiply",
              }}
            />
            <span
              className="text-sm sm:text-xl leading-tight sm:leading-wider xxl:text-xxl text-white z-20 absolute bottom-0 left-0 w-8/12 sm:w-1/2 ml-2 mb-2 sm:ml-3 sm:mb-3"
              style={{
                textShadow:
                  "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
              }}
            >
              Wir Verkäuferinnen sind super-relevant, unsere Arbeitsplätze aber
              unterbezahlt und oft unsicher.
              <Stripe fillColor="red" textColor="white" rotationDeg="-1">
                Fairer Tariflohn statt leerer Worte!
              </Stripe>
            </span>
          </div>
        </div>
        <div style={{ height: "100%" }}>
          <div className="relative h-full">
            <Image name="04-4.jpg" className="h-full" />
            <div
              className="absolute top-0 left-0 z-20 w-8/12 h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 47.92%, #000000 100%);",
                mixBlendMode: "multiply",
              }}
            />
            <span
              className="text-sm sm:text-xl xxl:text-xxl text-white z-20 absolute bottom-0 left-0 w-8/12 sm:w-1/2 ml-2 mb-2 sm:ml-3 sm:mb-3"
              style={{
                textShadow:
                  "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
              }}
            >
              Wir lassen uns für die Braunkohle nicht enteignen.
              <Stripe fillColor="red" textColor="white" rotationDeg="-1">
                Wir sagen: Alle Dörfer bleiben!
              </Stripe>
            </span>
          </div>
        </div>
      </Carousel>
    </div>
  </Div100vh>
);
