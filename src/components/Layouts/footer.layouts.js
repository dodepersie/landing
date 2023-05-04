import { Col, Container, Row } from "react-bootstrap";
import Socialmedia from "../Utilities/Socialmedia";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer user-select-none p-2">
      <Container>
        <Row xs={12}>
          <Col className="my-2" xs={12} lg={6}>
            <div className="d-flex justify-content-center align-items-center float-lg-start d-block d-lg-block">
              <span className="text-center">
                v1.mahadisaputra.my.id @ {currentYear}
                <br />
                Desain terinspirasi dari <strong>Harisenin.com</strong> 😍👋
              </span>
            </div>
          </Col>
          <Col className="my-2" xs={12} lg={6}>
            <div className="d-flex justify-content-center align-items-center float-lg-end">
              <Socialmedia />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
