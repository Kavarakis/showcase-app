import React from 'react';
import './App.scss';
import { Container, Row } from 'react-bootstrap';
import NavbarComponent from './components/navbar';
import WelcomeComponent from './components/welcome';
import BestSellers from './components/bestSeller';
import CoffeeLife from './components/coffeeLife';
import OurProducts from './components/ourProducts';
import TravelPress from './components/travelPress';
import { useInView, InView } from 'react-intersection-observer';
export default function App() {
  const cond: boolean = false;

  const wrapComponentInView = (c: React.ReactElement) => {
    return (
      <InView triggerOnce={true} delay={150}>
        {({ inView, ref }) => <div ref={ref}>{inView ? c : ''}</div>}
      </InView>
    );
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Container>
            <Row>
              <NavbarComponent></NavbarComponent>
            </Row>
          </Container>
        </Row>
        <Row>
          <WelcomeComponent></WelcomeComponent>
        </Row>

        <InView>
          {({ inView, ref }) => (
            <Row ref={ref} id="BestSellers" className="mx-5 my-5">
              {wrapComponentInView(<BestSellers></BestSellers>)}
            </Row>
          )}
        </InView>
        <Row className="py-5">
          {wrapComponentInView(<CoffeeLife></CoffeeLife>)}
        </Row>
        <Row className="mx-5">
          {wrapComponentInView(<OurProducts></OurProducts>)}
        </Row>
        <Row>{wrapComponentInView(<TravelPress></TravelPress>)}</Row>
      </Container>
    </div>
  );
}
