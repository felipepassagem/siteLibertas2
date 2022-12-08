import React from 'react'
import { Form, Button, Row, Card, Nav, ListGroup } from "react-bootstrap";
import "../../src/styles.css";

function CardCurso({ curso }) {
  return (
    <Card style={{ width: '25rem' }} className="mt-5 mb-5 cardcurso">
      <Card.Img variant="top" src={curso.img} className="imagemcurso" />
      <Card.Body>
        <Card.Title><p className=''>{curso.nome}</p></Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush text-start">
        <ListGroup.Item className="cardtext">Tipo: <span className="cardtextspan">{curso.tipo}</span></ListGroup.Item>
        <ListGroup.Item className="cardtext">Período:<span className="cardtextspan"> {curso.periodo}</span></ListGroup.Item>
        <ListGroup.Item className="cardtext"> Duração: <span className="cardtextspan">{curso.duracao}</span></ListGroup.Item>
        <ListGroup.Item className="cardtext">Avalição do MEC: <span className="cardtextspan">{curso.mec}</span></ListGroup.Item>
      </ListGroup>
      {/* <Card.Body>
      <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> 
      </Card.Body> */}
    </Card>
  )
}

export default CardCurso