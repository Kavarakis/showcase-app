import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavbarComponent from './components/navbar';
import WelcomeComponent from './components/welcome';
import BestSellersComponent from './components/bestSeller';
import CoffeeLifeComponent from './components/coffeeLife';
import OurProductsComponent from './components/ourProducts';
import TravelPress from './components/travelPress';
import { InView } from 'react-intersection-observer';
import './App.scss';

export default class App extends React.Component {
  wrapComponentInView(c: React.ReactElement) {
    return (
      <InView triggerOnce={true} delay={150}>
        {({ inView, ref }) => <div ref={ref}>{inView ? c : ''}</div>}
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
        </Container>
      </div>
    );
  }
}
