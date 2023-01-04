import React from 'react';
import { Col, Row } from 'react-bootstrap';
import leftTop_p from '../../assets/left-top-cl.png';
import leftTop from '../../assets/left-top-cl-2.png';
import leftMid_p from '../../assets/left-mid-cl.png';
import leftMid from '../../assets/left-mid-cl-2.png';
import leftBot from '../../assets/left-bot-cl-2.png';
import leftBot_p from '../../assets/left-bot-cl.png';
import rightMid from '../../assets/right-mid-cl-2.png';
import rightMid_p from '../../assets/right-mid-cl.png';
import rightBot from '../../assets/right-bot-cl-2.png';
import rightBot_p from '../../assets/right-bot-cl.png';
import { Parallax, Background } from 'react-parallax';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './coffeeLife.scss';
export default class CoffeeLifeComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-fluid mx-0 px-0">
        <Parallax strength={500}>
          <Background className="custom-bg">
            <div
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
              }}
            >
              {' '}
              <div>
                <Row className="mx-5 px-5 my-5 py-5">
                  <Col className="">
                    <div
                      className=""
                      style={{
                        position: 'absolute',
                        paddingLeft: '25%',
                        paddingTop: '20%',
                      }}
                    >
                      <LazyLoadImage
                        src={leftMid}
                        placeholderSrc={leftMid_p}
                        height={'72%'}
                        width={'72%'}
                        effect="blur"
                      ></LazyLoadImage>
                    </div>
                    <div>
                      <div>
                        <LazyLoadImage
                          src={leftTop}
                          placeholderSrc={leftTop_p}
                          height={'70%'}
                          width={'60%'}
                          effect="blur"
                        ></LazyLoadImage>
                      </div>

                      <div className="my-5 py-5">
                        <LazyLoadImage
                          src={leftBot}
                          placeholderSrc={leftBot_p}
                          height={'70%'}
                          width={'80%'}
                          effect="blur"
                        ></LazyLoadImage>
                      </div>
                    </div>
                  </Col>
                  <Col className=" my-5 py-5 align-items-end justify-content-end">
                    <Row>
                      <div
                        style={{ paddingLeft: '15%' }}
                        className='align-items-end justify-content-end"'
                      >
                        <div
                          style={{
                            position: 'absolute',
                            paddingLeft: '12%',
                            paddingBottom: '10%',
                          }}
                        >
                          <div>
                            <LazyLoadImage
                              src={rightMid}
                              placeholderSrc={rightMid_p}
                              height={'90%'}
                              width={'80%'}
                              effect="blur"
                            ></LazyLoadImage>
                          </div>
                        </div>
                        <div style={{ paddingLeft: '1%', paddingTop: '50%' }}>
                          <LazyLoadImage
                            src={rightBot}
                            placeholderSrc={rightBot_p}
                            height={'90%'}
                            width={'90%'}
                            effect="blur"
                          ></LazyLoadImage>
                        </div>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Background>
          <div>
            <Row className="justify-content-center mt-5 pt-5">
              <Col md={3} className="justify-content-center ">
                <div className="text-center">
                  <div className="sub-header">designed for real life</div>
                  <div className="main-header">
                    Coffee made for your life on the go.
                  </div>
                  <div>
                    <div className="p-style">
                      We understand coffee is a big part of your busy, active
                      life. That’s why we create and develop products that allow
                      you to bring your passion for coffee-when you want it- and
                      wherever life takes you.
                    </div>
                    <svg
                      className="svg-size"
                      version="1.1"
                      id="line_2"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                    >
                      <path
                        className="path-vert"
                        fill="#01a09e"
                        strokeWidth="3"
                        stroke="#01a09e"
                        d="M30 0 v600 400"
                      />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Parallax>
      </div>
    );
  }
}
