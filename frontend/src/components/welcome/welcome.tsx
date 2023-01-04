import React from 'react';
import { Button, Col, Container, Stack, Row } from 'react-bootstrap';
import backImage from '../../assets/welcome_back_2x.png';
import backImagePlaceHolder from '../../assets/welcome_back.png';
import arrowImg from '../../assets/arrow-right-short.svg';
import './welcome.scss';

export default class WelcomeComponent extends React.Component<
  {},
  { backImg: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      backImg: backImagePlaceHolder,
    };
  }
  handleExploreClick(): void {
    const element = document.getElementById('BestSellers');
    if (element) {
      element.scrollIntoView(true);
    }
  }
  componentDidMount(): void {
    this.setState({ backImg: backImage });
  }
  render(): React.ReactNode {
    return (
      <div
        className=" main"
        style={{ backgroundImage: `url(${this.state.backImg})` }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center mx-auto">
          <Col className="align-items-center justify-content-center mt-4">
            <Row className="text-justify">
              <h1 className="main-title ">brew anywhere. be anywhere.</h1>
            </Row>
            <Row className="px-5">
              <h1 className="sub-title">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo.
              </h1>
            </Row>
            <Row className="pt-5 justify-content-center align-items-center">
              <Col md={3}>
                <Row md={1}>
                  <button className="btn-primary pour-b">
                    <div className="py-3">pour on the go</div>
                  </button>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* <div className="position-absolute setBottom" style={{ bottom: 0 }}> */}
          <Container
            className="position-absolute fixed-bottom"
            // style={{ bottom: 0 }}
          >
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
            >
              <Button
                className="bg-transparent border-0 explore-b"
                onClick={this.handleExploreClick}
              >
                EXPLORE
              </Button>

              <div className="bounce">
                <img src={arrowImg} alt="" />
              </div>
            </Stack>
          </Container>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
