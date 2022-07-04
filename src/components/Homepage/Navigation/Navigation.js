import {
  Container,
  Navbar,
  Nav,
  Image,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../images/logo.svg";
import "./Navigation.scss";

// import classes from "./Navigation.module.scss";
const Navigation = (props) => {
  return (
    <Navbar expand="lg" variant="dark" >
      <Container fluid>
        <Link to="/">
          <Navbar.Brand as="img" src={Logo} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink to="/" className="nav-link display-6">
              Home
            </NavLink>
            <NavLink to="/" className="nav-link display-6">
              Profile
            </NavLink>
            <NavLink to="/" className="nav-link display-6">
              My vacations
            </NavLink>
            <NavLink to="/" className="nav-link display-6">
              Docs
            </NavLink>
            <NavLink to="/" className="nav-link display-6">
              Contacts
            </NavLink>
            <NavDropdown
              title={<Image src={Logo} width="30%" roundedCircle={true} />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item eventKey="1">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
};

export default Navigation;
