import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavbarComponent from './components/navbar/navbar';
import {
  WelcomeComponent,
  BestSellersComponent,
  CoffeeLifeComponent,
  OurProductsComponent,
  TravelPress,
  PressComponent,
  FreshGroundsComponent,
} from './components';
import { InView } from 'react-intersection-observer';

import './App.scss';

export default class App extends React.Component {
  wrapComponentInView(c: React.ReactElement) {
    return (
      <InView triggerOnce={true} delay={150}>
        {({ inView, ref }) => (
          <div ref={ref} className="px-0">
            {inView ? c : <div>Loading...</div>}
          </div>
        )}
      </InView>
    );
  }
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <NavbarComponent />
        <Container fluid>
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
        </Container>
      </React.Fragment>
    );
  }
}
