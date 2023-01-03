import React from 'react';
import { Card, Carousel, Col, Stack } from 'react-bootstrap';
import { Articles, articles, Rating } from '../utils/bestSellingData';
import './bestSeller.scss';
import star from '../assets/star.svg';

export default class BestSellers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
      cards: [],
    };
  }
  updateState() {
    this.setState({ cards: this.getCards(this.state.counter) });
    this.setState({ counter: this.state.counter + 1 });
  }
  componentDidMount(): void {
    const element = document.getElementById('offerBanner');
    if (element) {
      element.remove();
    }
    this.updateState();
  }
  setRatings(ratings: Rating) {
    let i = 0;
    const res = [];
    while (i < Number(ratings)) {
      res.push(<img src={star} alt="" />);
      i++;
    }
    return res;
  }

  getCards(c: number) {
    return articles.map((x: Articles, i: number) => {
      return (
        <Col className="col-hover" key={i}>
          <Card style={{ border: 0 }}>
            <img className="card-img-top" src={x.img_src} alt="" />
            <Card.Body>
              {this.setRatings(x.stars)}
              <Card.Title>Card title: {x.title + ' ' + c}</Card.Title>
              <Card.Text>{x.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
  render(): React.ReactNode {
    return (
      <div className="container">
        <div className="row text-center my-5 ">
          <div className="title1 pb-1"> pour your best cup with</div>
          <div className="title2">our best sellers</div>
        </div>
        <div className="row">
          <Carousel
            interval={null}
            indicators={false}
            controls={true}
            nextIcon={<span className="carousel-control-next-icon "></span>}
            onClick={() => this.updateState()}
          >
            <Carousel.Item className=" py-2">
              <Stack direction="horizontal" gap={3}>
                {this.state.cards}
              </Stack>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
