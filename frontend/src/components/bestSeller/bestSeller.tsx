import React from 'react';
import { Card, Carousel, Col, Stack } from 'react-bootstrap';
import { Articles, articles, Rating } from '../../utils/bestSellingData';
import star from '../../assets/star.svg';
import './bestSeller.scss';

export type stateData = { counter: number; cards: JSX.Element[] };

export default class BestSellersComponent extends React.Component<
  {},
  stateData
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      counter: 0,
      cards: [],
    } as stateData;
  }
  private updateState(): void {
    this.setState({ cards: this.getCards(this.state.counter) });
    this.setState({ counter: this.state.counter + 1 });
  }
  private setRatings(ratings: Rating): JSX.Element[] {
    let i = 0;
    const res = [];
    while (i < Number(ratings)) {
      res.push(<img src={star} alt="" />);
      i++;
    }
    return res;
  }
  componentDidMount(): void {
    const element = document.getElementById('offerBanner');
    if (element) {
      element.remove();
    }
    this.updateState();
  }

  getCards(c: number): JSX.Element[] {
    return articles.map((x: Articles, i: number) => {
      return (
        <Col className="col-hover" key={i}>
          <Card style={{ border: 0 }}>
            <img className="card-img-top" src={x.img_src} alt="" />
            <Card.Body>
              {this.setRatings(x.stars)}
              <Card.Title>{x.title + c}</Card.Title>
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
          <div className="title-1 pb-1"> pour your best cup with</div>
          <div className="title-2">our best sellers</div>
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
