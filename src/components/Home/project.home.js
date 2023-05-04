import { Card, Container, Row, Col } from "react-bootstrap";
import { proyekSaya } from "../Utilities/constants";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Project = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-start user-select-none"
      >
        <Container className="mb-4">
          <span className="fs-2 fw-bold sectionTitle">
            <hr /> Proyek saya 👇
          </span>
          <Row xs={12}>
            {proyekSaya.sort((a, b) => a.name.localeCompare(b.name)).map(({ thumbnail, name, desc, code, link }, index) => (
              <Col
                data-aos="zoom-in"
                xs={12}
                sm={6}
                lg={6}
                className="mt-2 p-3"
                key={index}
              >
                <div className="text-secondary fw-semibold">
                  <Card>
                    <Card.Img id="projectImg" src={thumbnail} alt={name} />
                    <Card.Body>
                      <Card.Title className="fs-4">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="tooltip-bottom">
                              Klik untuk mengunjungi {name}!
                            </Tooltip>
                          }
                        >
                          <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            style={{ cursor: "help", textDecoration: "none" }}
                          >
                            {name}
                          </a>
                        </OverlayTrigger>
                      </Card.Title>
                      <hr />
                      <Card.Text>
                        <span className="fw-light">{desc}</span>
                      </Card.Text>
                      <Card.Footer>
                        Yang digunakan:{" "}
                        <span className="fw-light mb-2"> {code}</span>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Project;
