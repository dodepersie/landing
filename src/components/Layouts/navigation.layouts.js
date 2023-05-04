import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";

const Navigationbar = () => {
  return (
    <div>
      <header>
        <Navbar
          className="pt-3 pb-3 user-select-none navbar-default"
          variant="light"
          expand="lg"
          fixed="top"
        >
          <Container>
            <Navbar.Brand>
              <NavLink to="/" style={{ color: "#222222" }}>
                <span>
                  <FontAwesomeIcon icon={faUserNinja} className="me-3" />
                  Mahadi Saputra
                </span>
              </NavLink>
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#0dad8e" : "#222",
                textDecoration: "none",
                fontWeight: isActive ? "bolder" : "400",
                borderBottom: isActive ? "2px solid #0dad8e" : "none",
              })}
              className="p-2 mt-1"
            >
                  Beranda
                </NavLink>
                <NavLink
                  to="/tentang"
                  style={({ isActive }) => ({
                    color: isActive ? "#0dad8e" : "#222",
                    textDecoration: "none",
                    fontWeight: isActive ? "bolder" : "400",
                    borderBottom: isActive ? "2px solid #0dad8e" : "none",
                  })}
                  className="p-2 mt-1"
                >
                  Tentang saya
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Navigationbar;
