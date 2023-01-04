import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './freshGrounds.scss';

export default class FreshGroundsComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-fluid ">
        <div className=" row title-fresh py-2 text-center">
          <Col>FRESH GROUNDS. 01</Col>
          <Col>FRESH GROUNDS</Col>
        </div>
        <div className="wrap px-5">
          <Row className="mx-5 px-5">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/574425747?h=e180e54244"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Row>
        </div>
      </div>
    );
  }
}
