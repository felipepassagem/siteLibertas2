import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../src/styles.css";
import logo from "../assets/imgs/logo.png";

function Footer() {
  return (
    <>
      <Navbar  variant="dark" className="footer ">
        <div className="x">
          <Navbar.Brand href="#home">
            <img src={logo} className="logo"></img>
          </Navbar.Brand>
        </div>

        <Container className="ctNav justify-content-center">
          <div>
            <Nav className="me-auto navlink">
              <Nav.Link href="#Humanas">Humanas</Nav.Link>
              <Nav.Link href="#Biológicas">Biológicas</Nav.Link>
              <Nav.Link href="#Exatas">Exatas</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Footer;
