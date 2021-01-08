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
              className="absolute top-0 left-0 z-20 w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 47.92%, #000000 100%);",
                mixBlendMode: "multiply",
              }}
            />
            <span className="text-lg text-white z-20 absolute bottom-0 left-0 w-1/2 ml-3 mb-3">
              Wir brauchen keine Klatscherei, sondern mehr Personal, bessere
              Gehälter, ganz einfach eine{" "}
              <Stripe fillColor="red" textColor="white" rotationDeg="-1">
                radikal andere Gesundheitspolitik!
              </Stripe>
            </span>
          </div>
        </div>
        <div style={{ height: "100%" }}>
          <div className="relative h-full">
            <Image name="04-2.jpg" className="h-full" />
            <div
              className="absolute top-0 left-0 z-20 w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 47.92%, #000000 100%);",
                mixBlendMode: "multiply",
              }}
            />
            <span className="text-lg text-white z-20 absolute bottom-0 left-0 w-1/2 ml-3 mb-3">
              Wir brauchen keine Klatscherei, sondern mehr Personal, bessere
              Gehälter, ganz einfach eine{" "}
              <Stripe fillColor="red" textColor="white" rotationDeg="-1">
                radikal andere Gesundheitspolitik!
              </Stripe>
            </span>
          </div>
        </div>
        <div style={{ height: "100%" }}>
          <div className="relative h-full">
            <Image name="04-3.jpg" className="h-full" />
            <div
              className="absolute top-0 left-0 z-20 w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 47.92%, #000000 100%);",
                mixBlendMode: "multiply",
              }}
            />
            <span className="text-lg text-white z-20 absolute bottom-0 left-0 w-1/2 ml-3 mb-3">
              Systemrelevant aber prekär, flexibel und unterbezahlt.
              <Stripe fillColor="red" textColor="white" rotationDeg="-1">
                Faire Bezahlung statt leerer Worte!
              </Stripe>
            </span>
          </div>
        </div>
      </Carousel>
    </div>
  </Div100vh>
);
