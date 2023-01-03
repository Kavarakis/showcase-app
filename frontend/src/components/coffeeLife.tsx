import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './coffeeLife.scss';
import leftTop_p from '../assets/left-top-cl.png';
import leftTop from '../assets/left-top-cl-2.png';
import leftMid_p from '../assets/left-mid-cl.png';
import leftMid from '../assets/left-mid-cl-2.png';
import leftBot from '../assets/left-bot-cl-2.png';
import leftBot_p from '../assets/left-bot-cl.png';

import rightMid from '../assets/right-mid-cl-2.png';
import rightMid_p from '../assets/right-mid-cl.png';

import rightTop from '../assets/right-top-cl-2.png';
import rightTop_p from '../assets/right-top-cl.png';
import rightBot from '../assets/right-bot-cl-2.png';
import rightBot_p from '../assets/right-bot-cl.png';

import { Parallax, Background } from 'react-parallax';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default class CoffeeLife extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container-fluid mx-0 px-0">
        {/* <Parallax strength={600}>
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
              <div className="container-fluid text-center container-cl">
                <Row className="my-5 py-5 mx-5">
                  <Col>
                    <LazyLoadImage
                      src={leftTop}
                      placeholderSrc={leftTop_p}
                      height={326}
                      width={246}
                      effect="blur"
                    ></LazyLoadImage>
                    <Row
                      className="mx-5  align-items-center justify-content-center"
                      style={{ position: 'absolute', paddingLeft: '20%' }}
                    >
                      <LazyLoadImage
                        src={leftMid}
                        placeholderSrc={leftMid_p}
                        height={264}
                        width={264}
                        effect="blur"
                      ></LazyLoadImage>
                    </Row>
                    <div className="setBottom my-5 ">
                      <LazyLoadImage
                        src={leftBot}
                        placeholderSrc={leftBot_p}
                        height={302}
                        width={420}
                        effect="blur"
                      ></LazyLoadImage>
                    </div>
                  </Col>
                  <Col className="col-md-2"></Col>
                  <Col>
                    <div
                      style={{
                        position: 'absolute',
                        paddingLeft: '10%',
                        paddingTop: '5%',
                      }}
                    >
                      <LazyLoadImage
                        src={rightMid}
                        placeholderSrc={rightMid_p}
                        height={304}
                        width={231}
                        effect="blur"
                      ></LazyLoadImage>
                    </div>
                    <Row style={{ paddingLeft: '60%' }}>
                      <LazyLoadImage
                        src={rightTop}
                        placeholderSrc={rightTop_p}
                        height={158}
                        width={119}
                        effect="blur"
                      ></LazyLoadImage>
                    </Row>
                    <div className="setBottom  py-5 mt-5 me-5 ">
                      <LazyLoadImage
                        src={rightBot}
                        placeholderSrc={rightBot_p}
                        height={364}
                        width={520}
                        effect="blur"
                      ></LazyLoadImage>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Background>
          <div>
            <Row className="justify-content-center mt-5 pt-5">
              <Col md={3} className="justify-content-center ">
                <div className="text-center">
                  <div className="title1">designed for real life</div>
                  <div className="mainTitle">
                    Coffee made for your life on the go.
                  </div>
                  <div className="p1">
                    <p>
                      We understand coffee is a big part of your busy, active
                      life. That’s why we create and develop products that allow
                      you to bring your passion for coffee-when you want it- and
                      wherever life takes you.
                    </p>
                    <div className="display-1"> HELLO!</div>
                    <div className="display-1"> HELLO!</div>
                    <div className="display-1"> HELLO!</div>
                    <div className="display-1"> HELLO!</div>
                    <div className="display-1"> HELLO!</div>
                    <div className="display-1"> HELLO!</div>
                    <div className="display-1"> HELLO!</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Parallax> */}

        <div
          className="container-fluid"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
          }}
        >
          <Row className=" my-5 py-5">
            <Col className="">
              <div>
                <div
                  className=""
                  style={{
                    position: 'absolute',

                    // paddingLeft: '20%',
                    // paddingTop: '20%',
                  }}
                >
                  <LazyLoadImage
                    src={leftMid}
                    placeholderSrc={leftMid_p}
                    height={'50%'}
                    width={'70%'}
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
              </div>
            </Col>
            <Col className="">
              {/* <LazyLoadImage
                src={rightMid}
                placeholderSrc={rightMid_p}
                height={'80%'}
                width={'75%'}
                effect="blur"
              ></LazyLoadImage>

              <LazyLoadImage
                src={rightBot}
                placeholderSrc={rightBot_p}
                height={'80%'}
                width={'80%'}
                effect="blur"
              ></LazyLoadImage> */}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
