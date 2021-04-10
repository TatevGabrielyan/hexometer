import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../components/style.css";
import Header from "../components/header";
import Info from "../components/info";
import SlickSlider from "../components/slickSlider";

const IndexPage = () => (
<Layout>
   <SEO title="Hexometer" />
   <Header />
   <Info />
   <SlickSlider />
</Layout>
)

export default IndexPage