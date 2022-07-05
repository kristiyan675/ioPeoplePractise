import {
  Button,
  Accordion,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Documents from "../Documents/Documents";
import classes from "./Homepage.module.scss";

const Homepage = (props) => {
  return (
    <header className={classes.header}>
      <Navigation />
      <Container>
        <Row className={classes["header-content"]}>
          <Col className=" py-5">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Currently on vacation</Accordion.Header>
                <Accordion.Body>User1</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Upcoming Birthdays</Accordion.Header>
                <Accordion.Body>User3</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="d-flex align-items-end py-5 flex-column justify-content-center">
            <h1>
              Hi there, @user <br /> You have 100 vacation hours
            </h1>
     
              <Link to='/vacations'><Button className="outline-secondary">Create a new vacation</Button></Link>
          
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Homepage;
