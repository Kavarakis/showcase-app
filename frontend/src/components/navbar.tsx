import React from 'react';
import { Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import esproLogo from '../assets/espro_logo.svg';
import './navbar.scss';

export default class NavbarComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="px-0 py-0 fixed-top">
        <div id="offerBanner">
          <Navbar>
            <Row className="container-fluid mx-0 px-0 py-0 my-0 text-center offerBanner">
              <div className="py-3">FREE SHIPPING ON ALL U.S. ORDERS $49+</div>
            </Row>
          </Navbar>
        </div>
        <Navbar className="navbarMain bg-white" collapseOnSelect expand="sm">
          <div className=" container-fluid navbarMain mx-5 px-5  py-2">
            <Nav>
              <NavDropdown className="mx-5" title="shop" id="shopDropdown">
                <NavDropdown.Item>Action1</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>OUR STORY</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Brand href="/" className="me-0">
                <img src={esproLogo} alt="" />
              </Navbar.Brand>
            </Nav>
            <Nav>
              <Nav.Link className="mx-5">BREW GUIDES</Nav.Link>
              <Nav.Link>BLOG</Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}
