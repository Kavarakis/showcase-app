import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import frenchPressPic from '../assets/frenchPress-op.png';
import frenchPressHover from '../assets/frenchPressHover-op.png';
import pourOverPic from '../assets/pourOver-op.png';
import pourOverHover from '../assets/pourOverHover-op.png';
import coldBrewPic from '../assets/coldBrew-op.png';
import coldBrewHover from '../assets/coldBrewHover-op.png';
import './ourProducts.scss';

export default class OurProductsComponent extends React.Component {
  private generateProduct(
    firstPic: string,
    hoverPic: string,
    title: string,
    backColor: string,
  ): JSX.Element {
    return (
      <Col className="h-100 img-wrapper" style={{ backgroundColor: backColor }}>
        <div className="position-absolute product-title my-2 pt-3 mx-3 px-3">
          <div className="row">{title}</div>
          <div className="row  mx-1 pt-0 img-hover">
            <button className="btn-primary">shop now</button>
          </div>
        </div>
        <img src={firstPic} />
        <img src={hoverPic} className="img-hover" />
      </Col>
    );
  }
  render(): React.ReactNode {
    return (
      <div className="container py-5">
        <Row className="text-center mt-5  mb-2 pb-4">
          <Col>
            <div className="title">Explore Our products</div>
          </Col>
        </Row>
        <Stack direction="horizontal" gap={3} style={{ height: '515px' }}>
          {this.generateProduct(
            frenchPressPic,
            frenchPressHover,
            'french press',
            '#8DB9CA',
          )}
          {this.generateProduct(
            pourOverPic,
            pourOverHover,
            'pour over',
            '#7aa9ad',
          )}
          {this.generateProduct(
            coldBrewPic,
            coldBrewHover,
            'cold brew  ',
            '#8f99b9',
          )}
        </Stack>
        <Row className=" my-5 justify-content-center align-items-center">
          <Col md={2}>
            <Row style={{ height: '50px' }}>
              <button className="b-product"> shop all products</button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
