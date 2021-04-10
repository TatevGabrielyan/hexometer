import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, Button} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/style.css";
const Header = ({ siteTitle }) => (
<header
style={{
background: `rebeccapurple`,
marginBottom: `1.45rem`,
}}
>
<Navbar expand="lg" fixed="top" style={{background:'white!important'}} >
   <Navbar.Brand href="#home">
      <StaticImage
      src="../images/logo.svg"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Hexometer logo"
      />
   </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
         <Nav.Link href="#home" className='left' style={{  whiteSpace: 'nowrap'}}>How does it work?</Nav.Link>
         <Nav.Link href="#link" className='left' >Solutions</Nav.Link>
         <Nav.Link href="#link" className='left'>Pricing</Nav.Link>
         <Nav.Link href="#link" className='left'>Tools</Nav.Link>
         <Nav.Link href="#link" className='left'>Academy</Nav.Link>
      </Nav>
      <Form inline>
         <Button 
         variant="success"
         style={{
         boxShadow: `0 20px 30px 0 rgb(12 0 46 / 10%)`, 
         borderRadius: `45px`, 
         color: `white`, 
         background: `#16ac59`, 
         border: `0`,  
         cursor: `pointer`,
         }}>        
         Get Started for Free
         </Button>
         <Nav.Link href="#link">Login</Nav.Link>
      </Form>
   </Navbar.Collapse>
</Navbar>
</header>
)
Header.propTypes = {
siteTitle: PropTypes.string,
}
Header.defaultProps = {
siteTitle: ``,
}
export default Header