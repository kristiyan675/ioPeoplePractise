import {
    Button,
    Accordion,
    Container,
    Row,
    Col,
    ListGroup,
  } from "react-bootstrap";
  import {Routes, Route, Link} from "react-router-dom";
  import Navigation from "../Homepage/Navigation/Navigation";

  const Documents = (props) => {
    return(
      <div>
      <Navigation />
      <Container>
        <Row>
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
              <Accordion.Item eventKey="2">
                <Accordion.Header>Maternity Leave</Accordion.Header>
                <Accordion.Body>User3</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          </Row>
      </Container> 
      </div>
    )
  };

  export default Documents;