import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCodeBranch,
  faTrophy,
  faCode,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import {
  educationHistory,
  ability,
  award,
  experience,
} from "../Utilities/constants";
import Socialmedia from "../Utilities/Socialmedia";
import myPic from "./../../assets/pic.jpg";

const AboutMe = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-start pt-4 user-select-none"
      >
        <Container className="my-5">
          <Row xs={12}>
            {/* Kolom pengenalan diri */}
            <Col xs={12} md={6} xl={4} className="mt-2" data-aos="fade-right">
              <Card className="mt-3 text-secondary">
                <Card.Img
                  variant="top"
                  src={myPic}
                  alt="Mahadi Saputra's Pic"
                />
                <Card.Body>
                  <Card.Text style={{ lineHeight: "1.9" }}>
                    Nama saya adalah <strong>I Dewa Gede Mahadi Saputra</strong>{" "}
                    dan biasa dipanggil <strong>Dode Mahadi</strong> atau{" "}
                    <strong>Mahadi Saputra</strong>. Saya berasal dari{" "}
                    <strong>Bali, Indonesia</strong>. Saya bisa bekerja sama
                    dalam tim dan mengerjakan tugas dengan tepat waktu. Saya
                    sangat suka mendesain website atau Front-End Web Dev dan
                    sekarang sedang belajar Back-End Web Dev 😍🙏
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Kolom riwayat pendidikan, kemampuan */}
            <Col xs={12} md={6} xl={4} className="mt-2">
              <Card className="mt-3 mb-md-4" data-aos="fade-down">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="logoCard fs-5"
                    />
                    <span className="mx-2 m fs-5">Riwayat Pendidikan</span>
                    <hr />
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush" className="mt-3">
                      {educationHistory.map(({ name, year }, index) => (
                        <ListGroup.Item key={index}>
                          {name}
                          <div className="float-end">
                            <h6>
                              <span class="badge bg-success">{year}</span>
                            </h6>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="mt-3 mt-md-4" data-aos="fade-up">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      className="logoCard fs-5"
                    />
                    <span className="mx-2 fs-5">Kemampuan</span>
                    <hr />
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush" className="mt-3">
                      {ability.map(({ name, percentage }, index) => {
                        return (
                          <ListGroup.Item key={index}>
                            <div className="row">
                              <label className="col-sm-4 col-form-label">
                                {name}
                              </label>
                              <div className="col-sm-8">
                                <div className="progress my-2">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: percentage }}
                                    aria-valuenow={percentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Kolom penghargaan, pengalaman dan kontak */}
            <Col xs={12} md={12} xl={4} className="mt-2" data-aos="fade-left">
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon
                      icon={faTrophy}
                      className="logoCard fs-5"
                    />
                    <span className="mx-2 fs-5">Penghargaan</span>
                    <hr />
                  </Card.Title>
                  <Card.Text style={{ lineHeight: "1.95" }}>
                    <ListGroup variant="flush" className="mt-3">
                      {award.map(({ name }) => (
                        <ListGroup.Item>
                          <div className="row">{name}</div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="mt-3 mt-md-4">
                <Card.Body>
                  <Card.Title className="fs-2">
                    <FontAwesomeIcon icon={faCode} className="logoCard fs-5" />
                    <span className="mx-2 fs-5">Pengalaman</span>
                    <hr />
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush" className="mt-3">
                      {experience.map(({ name, year }) => (
                        <ListGroup.Item>
                          {name}
                          <div className="float-end">
                            <h6>
                              <span class="badge bg-success">{year}</span>
                            </h6>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="mt-3 mt-md-4">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon
                      icon={faContactCard}
                      className="logoCard fs-5"
                    />
                    <span className="mx-2 fs-5">Kontak</span>
                    <hr />
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush" className="mt-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <Socialmedia />
                      </div>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
