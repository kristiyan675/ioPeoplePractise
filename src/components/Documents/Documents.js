import {
  Button,
  Accordion,
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "../Homepage/Navigation/Navigation";


const Documents = (props) => {
  return (
    <div>
      <Navigation />
      <Container className="d-flex align-items-center align-self-center">
        <Row>
          <Col className=" py-5">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Maternity Leave</Accordion.Header>
                <Accordion.Body>
                  <Card className="d-flex align-items-center align-self-center" style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Maternity Leave</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <a href="logo192.png" download><Button variant="outline-secondary">Download</Button></a>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Paternity Leave</Accordion.Header>
                <Accordion.Body>
                <Card className="d-flex align-items-center align-self-center" style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Paternity Leave</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="outline-secondary">Download</Button>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Getting Married Leave</Accordion.Header>
                <Accordion.Body> <Card className="d-flex align-items-center align-self-center" style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Getting Married Leave</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="outline-secondary">Download</Button>
                    </Card.Body>
                  </Card></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Documents;
