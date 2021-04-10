import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import "../components/style.css";
import Typewriter from 'typewriter-effect';
const Info = () => (
<Layout>
   <SEO title="hexometer" />
   <Container>
      <h1 style={{marginTop:'5rem!important'}}>
         Beyond  <Typewriter
         options={{
         strings: ['page speed checking', 'error & broken page alerts', 'user experience optimisation', 'technical SEO audits', 'vulnerability & security scanning', 'website uptime monitoring'],
         autoStart: true,
         loop: true,
         }}
         style={{display:'contents!important'}}
         />
      </h1>
      <Row>
         <Col sm={6}>
         <h2>Meet Hexometer, your AI sidekick that works 24/7 to catch problems before they affect your business.</h2>
         <p>Every day your website can face an increasing range of threats. Server problems, slow landing pages, broken links, frustrating mobile experiences, embarrassing spelling mistakes, changing SEO rules, 3rd party services breaking, or security issues that put your business at risk.</p>
         <p>To make matters worse, these issues can linger unnoticed, wasting your ad-budget and costing your business lost sales.</p>
         <p>Hexometer monitors your website 24/7, to catch Availability, Performance, User experience, SEO, Health and Security problems, before they affect your customers.</p>
         </Col>
         <Col sm={6}>
         <StaticImage
         src="../images/Dash-screen.png"
         formats={["AUTO", "WEBP", "AVIF"]}
         alt="Hexometer logo"
         />
         </Col>
      </Row>
      <Button 
      variant="success"
      style={{
      boxShadow: `0 20px 30px 0 rgb(12 0 46 / 10%)`, 
      borderRadius: `45px`, 
      color: `white`, 
      background: `#16ac59`, 
      border: `0`,  
      cursor: `pointer`,
      padding: `14px 42px`,
      }}>        
      Get started with our free plan
      </Button>
      <h2 className='header-2nd'>Trusted by 15,000+ businesses & compatible with over 100+ platforms</h2>
   </Container>
</Layout>
)
export default Info