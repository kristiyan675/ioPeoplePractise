import {
  Container,
  Navbar,
  Nav,
  Image,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
import "./Navigation.scss";
const Navigation = (props) => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand as="img" src={Logo} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/" className="nav-link">
              Profile
            </NavLink>
            <NavLink to="/" className="nav-link">
              My vacations
            </NavLink>
            <NavLink to="/" className="nav-link">
              Docs
            </NavLink>
            <NavLink to="/" className="nav-link">
              Contacts
            </NavLink>
            <NavDropdown title={<Image src={Logo} width="20%" roundedCircle={true}/>} id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="1">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
