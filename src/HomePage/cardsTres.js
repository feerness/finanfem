import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardsTres.css'; // Importa tu archivo CSS personalizado

const CardsCarrusel = () => {
  const cards = [
    { src: "/images/recursos.woman.b.n.jpg", title: "Recursos" },
    { src: "/images/comunidad3.jpg", title: "Comunidad" },
    { src: "/images/herramientas.jpg", title: "Herramientas" },
  ];

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {cards.map((card, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={card.src}
                className="custom-card-img"
              />
              <Card.Body className="d-flex flex-column">
                <Button className="custom-button mt-auto" block>
                  {card.title}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsCarrusel;

