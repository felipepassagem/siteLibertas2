import React from "react";
import { Form, Button, Row, Card, Nav, ListGroup } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../../src/styles.css";

function CarouselItemComp({ area }) {
  return (
    <Carousel id="carouselitemcomp" className="" indicators={false} controls={false}>
      {area[1].map((curso) => {
        console.log(curso);
        console.log(curso.img);
        return (
          <Carousel.Item id="carouselitemitem">
            <Row>
              <img
                id="carouselitemimg"
                className="d-block w-100"
                src={curso.img}
                alt=""
              />
              <div id="item-text" align="center">
                <Card style={{ width: "55rem" }} className="carouselitemcardinfo text-start text-justify">
                  <Card.Header>{curso.nome}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="cardlg text-start">{curso.tipo}</ListGroup.Item>
                    <ListGroup.Item className="cardlg text-start">{curso.periodo}</ListGroup.Item>
                    <ListGroup.Item className="cardlg text-start text-justify">{curso.duracao}</ListGroup.Item>
                    <ListGroup.Item className="cardlg text-start">{curso.descricao}</ListGroup.Item>
                    <ListGroup.Item className="cardlg text-start">{curso.mec}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselItemComp;

{
  /* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
      </Carousel.Item>
 */
}
