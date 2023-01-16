import React from 'react';
import { Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import esproLogo from '../../assets/espro_logo.svg';
import searchLogo from '../../assets/search-line.svg';
import accountIcon from '../../assets/accountIcon.svg';
import shoppingBagIcon from '../../assets/shoppingBagIcon.svg';
import './navbar.scss';

interface IState {
  shoppingBagCounter: any;
}
export default class NavbarComponent extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      shoppingBagCounter: 0,
    };
  }
  render(): React.ReactNode {
    return (
      <div className="fixed-top">
        <Row
          id="offerBanner"
          className="container-fluid py-2 text-center offer-banner mx-0"
        >
          <div>FREE SHIPPING ON ALL U.S. ORDERS $49+</div>
        </Row>
        <Navbar bg="light" expand="lg" className=" px-5 py-3">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="shop" id="shopDropdown">
                <NavDropdown.Item>Action1</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="link-margin">our story</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand href="/" className=" mx-auto ps-5 ms-5 ">
            <div className="brand">
              <img src={esproLogo} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav>
                <Nav.Link className="link-margin">brew guides</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="link-margin">blog</Nav.Link>
              </Nav>

              <Nav.Link className="py-1">
                <img src={searchLogo}></img>
              </Nav.Link>
              <Nav.Link className="py-1">
                <img src={accountIcon}></img>
              </Nav.Link>
              <Nav>
                <Nav.Link className="py-1">
                  <img src={shoppingBagIcon}></img>
                </Nav.Link>
              </Nav>
              <Nav className=" shopping-counter my-1 pt-1 px-2 ">
                <div>{this.state.shoppingBagCounter}</div>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
