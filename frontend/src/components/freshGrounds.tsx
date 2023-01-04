import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './freshGrounds.scss';

export default class FreshGroundsComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-fluid main ">
        <div className=" row title-fresh pt-5 text-center">
          <Col>FRESH GROUNDS. 01</Col>
          <Col>FRESH GROUNDS</Col>
        </div>
        <div className="row">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/574425747?h=e180e54244"
            frameBorder="0"
            allowFullScreen
            height={'100%'}
            width={'100%'}
          ></iframe>
        </div>
      </div>
    );
  }
}
