import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import pastLogo from '../assets/past logo.svg';
import hgLogo_p from '../assets/homegrounds logo.png';
import hgLogo from '../assets/homegrounds logo@2x.png';
import msLogo_p from '../assets/martha stewart logo.png';
import msLogo from '../assets/martha stewart logo@2x.png';
import bfLogo_p from '../assets/buzzfeed logo.png';
import bfLogo from '../assets/buzzfeed logo@2x.png';
import fsLogo_p from '../assets/fastcompany logo.png';
import fsLogo from '../assets/fastcompany logo@2x.png';

import './press.scss';

export default class PressComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-fluid py-5 text-center justify-content-center align-items-center">
        <Row className="title1 py-5">
          <div>in the press</div>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <p className="p1">
              “The result is a richly flavored, super aromatic cup of coffee
              without the usual silt in the bottom. The press isn’t just for
              coffee, either—there’s also a tea filter available that isolates
              tea leaves to prevent oversteeping.”
            </p>
          </Col>
        </Row>
        <Row className=" py-5 my-5 text-center d-flex justify-content-center align-items-center">
          <Col md={2} className="img-responsive">
            <img src={pastLogo} alt="" />
          </Col>
          <Col md={2}>
            <LazyLoadImage
              src={hgLogo}
              placeholderSrc={hgLogo_p}
              width={'80%'}
              height={'80%'}
              effect="blur"
            />
          </Col>
          <Col md={2} className="col-img">
            <LazyLoadImage
              src={msLogo}
              placeholderSrc={msLogo_p}
              width={'80%'}
              height={'80%'}
              effect="blur"
            />
          </Col>
          <Col md={2} className="col-img">
            <LazyLoadImage
              src={bfLogo}
              placeholderSrc={bfLogo_p}
              width={'80%'}
              height={'80%'}
              effect="blur"
            />
          </Col>
          <Col md={2} className="col-img">
            <LazyLoadImage
              src={fsLogo}
              placeholderSrc={fsLogo_p}
              width={'80%'}
              height={'80%'}
              effect="blur"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
