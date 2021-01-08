import CTA from "../components/blocks/03-cta";
import Campaign from "../components/blocks/07-campaign";
import Demands from "../components/blocks/06-demands";
import Footer from "../components/blocks/00-footer";
import Intro from "../components/blocks/02-intro";
import Landing from "../components/blocks/01-landing";
import Layout from "../components/layout";
import Menu from "../components/blocks/00-menu";
import Opportunity from "../components/blocks/05-opportunity";
import React from "react";
import Supporters from "../components/blocks/09-supporters";
import TakeAction from "../components/blocks/08-takeaction";
import Testimonials from "../components/blocks/04-testimonials";

export default () => {
  return (
    <Layout>
      <Menu />
      <Landing slug="" />
      <Intro slug="krise" />
      <CTA slug="cta" />
      <Testimonials slug="testimonials" />
      <Opportunity />
      <Demands slug="forderungen" />
      <Campaign slug="kampagne" />
      <TakeAction slug="mitmachen" />
      <Supporters slug="traegerkreis" />
      <Footer />
    </Layout>
  );
};
