import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavbarComponent from './components/navbar/navbar';
import WelcomeComponent from './components/welcome/welcome';
import BestSellersComponent from './components/bestSeller/bestSeller';
import CoffeeLifeComponent from './components/coffeeLife/coffeeLife';
import OurProductsComponent from './components/ourProducts/ourProducts';
import TravelPress from './components/travelPress/travelPress';
import { InView } from 'react-intersection-observer';
import './App.scss';
import PressComponent from './components/press/press';
import FreshGroundsComponent from './components/freshGrounds/freshGrounds';

export default class App extends React.Component {
  wrapComponentInView(c: React.ReactElement) {
    return (
      <InView triggerOnce={true} delay={150}>
        {({ inView, ref }) => (
          <div ref={ref} className="px-0">
            {inView ? c : ''}
          </div>
        )}
      </InView>
    );
  }
  render(): React.ReactNode {
    return (
      <div>
        <Container fluid>
          <NavbarComponent />
          <Row>
            <WelcomeComponent />
          </Row>
          <Row id="BestSellers" className="mx-5 my-5">
            {this.wrapComponentInView(<BestSellersComponent />)}
          </Row>
          <Row className="py-5">
            {this.wrapComponentInView(<CoffeeLifeComponent />)}
          </Row>
          <Row className="mx-5">
            {this.wrapComponentInView(<OurProductsComponent />)}
          </Row>
          <Row>{this.wrapComponentInView(<TravelPress />)}</Row>
          <Row> {this.wrapComponentInView(<PressComponent />)}</Row>
          <Row> {this.wrapComponentInView(<FreshGroundsComponent />)}</Row>
          <Row>
            <h1>SEMIR</h1>
          </Row>
        </Container>
      </div>
    );
  }
}
