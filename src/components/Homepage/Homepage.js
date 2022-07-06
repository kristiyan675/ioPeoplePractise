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
          <Col className="d-flex align-items-end py-5 flex-column justify-content-center color-light">
            <h1>
              Hi there, @user <br /> You have 100 vacation hours
            </h1>
     
              <Link to='/vacations'><Button variant="outline-secondary" className="mt-3">Create a new vacation</Button></Link>
          
          </Col>
        </Row>
      </Container>
  
  );
};

export default Homepage;
