import React, { useId, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { myClient } from "../Utilities/constants";

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const id = useId();
  const [show, setShow] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_msl9hhn",
        "template_31vl0it",
        form.current,
        "ZIPayw6QLma7NMD-5"
      )
      .then(
        (result) => {
          e.target.reset();
          setAlertMessage("Pesan berhasil dikirim dan akan segera dibalas! 🫡");
        },
        (error) => {
          setAlertMessage("Pesan gagal dikirim. Mohon coba lagi nanti.");
        }
      );
  };

  return (
    <>
      <div
        className="d-flex justify-content-reverse align-items-start user-select-none"
        id="contact"
      >
        <Container className="mb-4">
          <Row xs={12} data-aos="fade-up">
            <Col xs={12} md={5}>
              <div className="mb-3 mb-lg-1">
                <span className="fs-4 fw-bold sectionTitle">
                  {/* <hr /> Klien saya 👇 */}
                </span>
              </div>

              {/* {myClient.map(({ name }, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={name}
                  className="clientIcon mx-2 mx-md-0 me-md-4 my-2"
                  size="2x"
                />
              ))}*/}
            </Col>

            <Col xs={12} md={7} className="my-1">
              <div className="sectionTitle">
                <hr style={{ width: "100%" }} />
              </div>

              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mt-3 mb-3" controlId={id}>
                  <Form.Control
                    type="name"
                    name="user_name"
                    placeholder="Nama kamu"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId={id}>
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Email kamu"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId={id}>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Isi pesan.."
                    rows={5}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  className="mb-3 headerButton"
                  onClick={() => setShow(true)}
                >
                  <FontAwesomeIcon icon={faAdd} className="me-2" />
                  Kirim
                </Button>{" "}
              </Form>
              {show && alertMessage && (
                <Alert
                  variant="info"
                  dismissible
                  onClose={() => setShow(false)}
                >
                  {alertMessage}
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
