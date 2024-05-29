import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="header-section">
      <div className="top-bar">
        <p>Hot Line:+234 905 3657 584 or +234 817 1996 754</p>
      </div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="../logo.png"
              height="50"
              className="d-inline-block align-top"
              alt="Heyday Prints Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="mr-5">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mr-3">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mr-3">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio" className="mr-3">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mr-3">
                {" "}
                Request A Quote
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className="d-flex justify-content-between">
      <Link to="/"> <Navbar.Brand><img src="../logo.png" alt="react logo" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"   >
          <Nav className="me-auto logo"  >
          <Link to="/">   <Nav.Link href="Home">Home</Nav.Link></Link>
          <Link to="/about">     <Nav.Link href="about-us">About Us</Nav.Link></Link>
          <Link to="/contact">    <Nav.Link href="contact-us">Contact Us</Nav.Link></Link>
          <Link to="/portfolio">      <Nav.Link href="our-portfolio">Port Folio</Nav.Link></Link>
          <Link to="/quote">   <Nav.Link href="request-quote">Get Quote</Nav.Link></Link>
                     </Nav>
                 </Navbar.Collapse>
                 </Container>
    </Navbar> */}

      {/* <nav class="navbar navbar-expand-lg d-flex justify-content-between">
  <div class="container-fluid">
    <div className='logo'>  <Link to="/"><a class="nav-link active" aria-current="page"  href="#"><img src="../logo.png" alt="react logo" /></a></Link> 
</div>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex gap-3">
      <Link to="/"><a class="nav-link active" aria-current="page" to= '/'>Home</a></Link>
        <Link to="/about">   <a class="nav-link" to='/about'>About Us</a></Link>
        <Link to="/contact"><a class="nav-link" to="/contact">Contact Us</a></Link>
        <Link to="/portfolio">  <a class="nav-link" to="/contact">Portfolio</a></Link>
        <Link to="/quote"> <a class="nav-link btn talkbtn rounded-pill" id = 'talkbtn' to="/booking">Get Quote</a></Link>
             </div>
    </div>
  </div>
</nav>  */}
    </div>
  );
};

export default Header;
