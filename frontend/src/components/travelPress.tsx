import React from 'react';
import { Col, Button, Row, Card, Carousel } from 'react-bootstrap';
import travelPressPic from './travelPress.png';
import travelPressPic2 from '../assets/right-bot-cl.png';
import travelPressPic3 from './travelPress2.png';

import './travelPress.scss';

export default class TravelPress extends React.Component<
  {},
  { picPath: string }
> {
  setPicturePath: string = travelPressPic;
  arr = [travelPressPic, travelPressPic2, travelPressPic3];
  constructor(props: {}) {
    super(props);
    this.state = { picPath: travelPressPic };
  }
  componentDidMount(): void {
    window.setInterval(() => {
      this.arr.push(this.state.picPath);
      this.setState({ picPath: this.arr.shift() as string });
    }, 1000);
  }
  render(): React.ReactNode {
    return (
      <div className="container-fluid" style={{ background: ' #8DB9CA' }}>
        <Row>
          <Col className="back-left  d-flex justify-content-center align-items-center">
            <div>
              <div className="row ">
                <div className="text-center" style={{ color: 'white' }}>
                  <div className="d4"> make every cup an experience.</div>
                  <p className="lead">
                    Have your French pressed coffee anywhere with ESPRO’s Travel
                    Press. A double micro-filter eliminates grit for your
                    smoothest cup on the go, and the mug fits right in a car cup
                    holder or bike’s water bottle cage.
                  </p>
                </div>
              </div>
              <div className="row mb-5 pb-5">
                <Col className="d-flex justify-content-center align-content-center">
                  <Button className="bShop">shop travel press</Button>
                </Col>
              </div>
            </div>
          </Col>

          <Col className="d-flex justify-content-center align-content-center">
            <div className="row justify-content-center align-content-center">
              <div className="col">
                <div className="row mx-5 px-4 ">
                  <div className="changing-item">
                    <img src={this.state.picPath}></img>
                  </div>
                </div>
                <div className=" row right-title mt-4">press. sip. enjoy.</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
