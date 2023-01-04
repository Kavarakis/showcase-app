import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import esproLogo from '../assets/espro_logo.svg';
import './navbar.scss';

export default class NavbarComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="px-0 py-0 fixed-top">
        <div id="offerBanner">
          <Navbar>
            <Row className="container-fluid py-2 text-center offerBanner">
              <div className="py-">FREE SHIPPING ON ALL U.S. ORDERS $49+</div>
            </Row>
          </Navbar>
        </div>

        <Navbar bg="light" expand="lg" className=" px-5 py-3">
          <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <NavDropdown title="shop" id="shopDropdown">
                  <NavDropdown.Item>Action1</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link>our story</Nav.Link>
              </Nav>
              <Navbar.Brand href="/" className="mx-auto">
                <img src={esproLogo} alt="" />
              </Navbar.Brand>
              <Nav>
                <Nav>
                  <Nav.Link>brew guides</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link>blog</Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
