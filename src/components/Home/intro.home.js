import { Col, Container, Row, Button } from "react-bootstrap";
import headerRightImg from "./../../assets/pic1.png";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <Container className="d-flex justify-content-start user-select-none pb-4 pb-lg-0">
        <Row
          className="mt-5 pt-0 pt-4"
          data-aos="fade-right"
          data-aos-offset="300"
        >
          <Col xs={12} lg={8} xl={8} className="mt-5">
            <div className="title fs-1 fs-md-6 mb-3 mt-auto mt-lg-5">
              <span>
                <Typewriter
                  words={[
                    "Hai",
                    "Hello",
                    "안녕",
                    "こんにちは",
                    "你好",
                    "Bonjour",
                    "¡Hola",
                    "Привет",
                    "Zdravo",
                    "Kumusta",
                    "नमस्ते",
                    "Szia",
                    "Ciao",
                    "ជំរាបសួរ",
                    "ສະບາຍດີ",
                    "ဟယ်လို",
                    "สวัสดี",
                    "Chào",
                    "سلام",
                  ]}
                  loop={999}
                  cursor
                  cursorStyle="!"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <div className="title fs-1 fs-md-6">Saya Mahadi Saputra</div>
            <div className="description fs-6 mt-4">
              <p className="fs-6">
                Website ini dibuat oleh diri saya sendiri. <br />
                Dengan ReactJS dan React Bootstrap
                <br />
                Website ini berisi tentang portofolio diri saya.{" "}
              </p>
            </div>
            <div className="d-flex justify-content-center justify-content-xl-start align-items-center align-items-xl-center mt-3">
              <Button
                className="d-flex justify-content-center align-items-center headerButton mb-3"
                variant="success"
                as={NavLink}
                to="/tentang"
              >
                Selengkapnya Tentang Diri Saya
              </Button>
            </div>
          </Col>

          <Col xs={12} lg={4} xl={4} className="d-none d-xl-block">
              <img
                src={headerRightImg}
                style={{ width: "510px", height: "auto" }}
                alt="Mahadi Saputra's Profile Pic"
              />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Intro;
