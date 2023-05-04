import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Row, Col } from "react-bootstrap";
import { introduction } from "../Utilities/constants";

const ShortIntro = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-start pt-1 user-select-none"
      data-aos="fade-up"
      id="about"
    >
      <Container className="w-auto">
        <Row xs={12}>
          {introduction.map(({ logo, desc }, index) => (
            <Col xs={6} sm={6} lg={3} className="my-4" key={index}>
              <Card className="text-secondary fw-lighter" id="introduction">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={logo} className="logoCard" />
                  </Card.Title>
                  <Card.Text>{desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShortIntro;
