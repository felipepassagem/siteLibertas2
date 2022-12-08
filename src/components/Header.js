import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../src/styles.css";
import logo from "../assets/imgs/logo.png";

function Header() {
  return (
    <>
      <Navbar fixed="top" variant="dark" className="header ">
        <div className="x">
          <Navbar.Brand href="#home">
            <img src={logo} className="logo"></img>
          </Navbar.Brand>
        </div>

        <Container className="ctNav justify-content-center">
          <div>
            <Nav className="me-auto navlink">
              <Nav.Link href="#Humanas" className="flink">Humanas</Nav.Link>
              <span className="gambiarra">0000000</span>
              <Nav.Link href="#Biológicas">Biológicas</Nav.Link>
              <span className="gambiarra">0000000</span>
              <Nav.Link href="#Exatas" className="llink">Exatas</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
