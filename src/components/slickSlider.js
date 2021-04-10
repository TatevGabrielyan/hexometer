import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactStars from 'react-stars';
import "../components/style.css";



    function SampleNextArrow(props) {
           const { className, style, onClick } = props;
        return (
           <div className={className} onClick={onClick} style={{...style, top:' 26%', display:' block', width: '40px'}}>
            <StaticImage
            src="../images/right-arrow.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="right-arrow"
            />
           </div>
        );
        }
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{...style, top:' 26%', display:' block', width: '40px'}}>
        <StaticImage
        src="../images/left-arrow.png"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="left-arrow"
        />
      </div>
);
}
var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
          {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          centerMode: false, 
          slidesToScroll: 1
          }
      }
      ],
    nextArrow: 
    <SampleNextArrow />
    ,
    prevArrow: 
    <SamplePrevArrow />
    };
const ratingChanged = (newRating) => {
console.log(newRating)
}
const SlickSlider = () => (
<Layout>
   <SEO title="hexometer" />
   <Container>
      <Slider {...settings}>
         <div>
            <StaticImage
            src="../images/wordpress.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="wordpress"
            />
         </div>
         <div>
            <StaticImage
            src="../images/shopify.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="shopify"
            />
         </div>
         <div>
            <StaticImage
            src="../images/magento.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="magento"
            />
         </div>
         <div>
            <StaticImage
            src="../images/drupal.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="drupal"
            />
         </div>
         <div>
            <StaticImage
            src="../images/joomla.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="joomla"
            />
         </div>
         <div>
            <StaticImage
            src="../images/bigcommerce.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="bigcommerce"
            />
         </div>
         <div>
            <StaticImage
            src="../images/prestashop.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="prestashop"
            />
         </div>
         <div>
            <StaticImage
            src="../images/wix.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="wix"
            />
         </div>
         <div>
            <StaticImage
            src="../images/woocommerce.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="woocommerce"
            />
         </div>
      </Slider>
      <Row style={{marginTop:'2rem'}}>
         <Col sm={6}>
         <Row>
            <Col sm={6} style={{marginBottom: '3rem', fontSize: '22px'}}>
            <span>
            <StaticImage
            src="../images/getApp.svg"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="getApp"
            />
            </span>
            <span>4.8/5</span>
            <ReactStars
               count={5}
               onChange={ratingChanged}
               size={24}
               color={'#F3AD1'} />
            </Col>
            <Col sm={6}>
            <span>
            <StaticImage
            src="../images/capterra.svg"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="capterra"
            />
            </span>
            <span>4.8/5</span>
            <ReactStars
               count={5}
               onChange={ratingChanged}
               size={24}
               color={'#F3AD1'} />
            </Col>
         </Row>
         <Row>
            <Col sm={6}>
            <span>
            <StaticImage
            src="../images/unknown.svg"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="unknown"
            />
            </span>
            <span>4.9/5</span>
            <ReactStars
               count={5}
               onChange={ratingChanged}
               size={24}
               color={'#F3AD1'} />
            </Col>
            <Col sm={6}>
            <span>
            <StaticImage
            src="../images/hut.svg"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="hut"
            />
            </span>
            <span>4.9/5</span>
            <ReactStars
               count={5}
               onChange={ratingChanged}
               size={24}
               color={'#F3AD1'} />
            </Col>
         </Row>
         </Col>
         <Col sm={6}>
         <Carousel style={{width:'75%'}}>
            <Carousel.Item>
               <StaticImage
               src="../images/com-1.png"
               formats={["AUTO", "WEBP", "AVIF"]}
               alt="review-1"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <StaticImage
               src="../images/com-2.png"
               formats={["AUTO", "WEBP", "AVIF"]}
               alt="capterra"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <StaticImage
               src="../images/com-3.png"
               formats={["AUTO", "WEBP", "AVIF"]}
               alt="capterra"
               />
               <Carousel.Caption>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
         </Col>
      </Row>
   </Container>
</Layout>
)
export default SlickSlider