import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="menu-desktop">
        <Navbar collapseOnSelect expand="lg" className="bg-menu">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Gaming" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Gaming laptop
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    gaming pc
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Gear</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    accessories
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/news">news</Nav.Link>
                <Nav.Link href="/tool">build tool</Nav.Link>
                <Nav.Link href="/offer">special offer</Nav.Link>
              </Nav>
              <Nav className="actions">
                <Nav.Link href="/search">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="action-icon"
                  />
                </Nav.Link>
                <Nav.Link eventKey={2} href="/login">
                  <FontAwesomeIcon icon={faUser} className="action-icon" />
                  Login
                </Nav.Link>
                <Nav.Link eventKey={3} href="/cart">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="action-icon"
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="menu-moible-header">
        {[false].map((expand) => (
          <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />

              <Navbar.Offcanvas
                className="nav-overplay"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                  </Navbar.Brand>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown title="Gaming" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Gaming laptop
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        gaming pc
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Gear
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        accessories
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/news">news</Nav.Link>
                    <Nav.Link href="/tool">build tool</Nav.Link>
                    <Nav.Link href="/offer">special offer</Nav.Link>
                    <Nav.Link href="/login">login</Nav.Link>
                    <Nav.Link href="/cart">cart</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">
                      {" "}
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="action-icon"
                      />
                    </Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
  // <Navbar collapseOnSelect expand="lg" className="bg-menu">
  //   <Container>
  //     <Navbar.Brand href="#home">
  //       <img src={logo} alt="Logo" />
  //     </Navbar.Brand>
  //     <div className="actions-moible">
  //       <Form className="d-flex">
  //         <Form.Control
  //           type="search"
  //           placeholder="Search"
  //           className="me-2"
  //           aria-label="Search"
  //         />
  //         <Button variant="outline-success">
  //           {" "}
  //           <FontAwesomeIcon
  //             icon={faMagnifyingGlass}
  //             className="action-icon"
  //           />
  //         </Button>
  //       </Form>

  //       <Nav.Link eventKey={2} href="/login">
  //         <FontAwesomeIcon icon={faUser} className="action-icon" />
  //       </Nav.Link>
  //       <Nav.Link eventKey={3} href="/cart">
  //         <FontAwesomeIcon icon={faShoppingCart} className="action-icon" />
  //       </Nav.Link>
  //     </div>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <Nav className="me-auto">
  //         <NavDropdown title="Gaming" id="basic-nav-dropdown">
  //           <NavDropdown.Item href="#action/3.1">
  //             Gaming laptop
  //           </NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.2">gaming pc</NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.3">Gear</NavDropdown.Item>
  //           <NavDropdown.Divider />
  //           <NavDropdown.Item href="#action/3.4">
  //             accessories
  //           </NavDropdown.Item>
  //         </NavDropdown>
  //         <Nav.Link href="/news">news</Nav.Link>
  //         <Nav.Link href="/tool">build tool</Nav.Link>
  //         <Nav.Link href="/offer">special offer</Nav.Link>
  //       </Nav>
  //       <Nav className="actions">
  //         <Nav.Link href="/search">
  //           <FontAwesomeIcon
  //             icon={faMagnifyingGlass}
  //             className="action-icon"
  //           />
  //         </Nav.Link>
  //         <Nav.Link eventKey={2} href="/login">
  //           <FontAwesomeIcon icon={faUser} className="action-icon" />
  //           Login
  //         </Nav.Link>
  //         <Nav.Link eventKey={3} href="/cart">
  //           <FontAwesomeIcon icon={faShoppingCart} className="action-icon" />
  //         </Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
}

export default Header;
