import React, { useEffect, useContext, useState } from "react";
import UserContext from "../../store/userContext";
import axios from "axios";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contacts = (props) => {
  const ctx = useContext(UserContext);

  //     const userContacts = {
  //       firstName: ctx.state.firstName,
  //       lastName: ctx.state.lastName,
  //       vacationHours: ctx.state.vacationHours,
  //     };

  const [userContact, setUserContact] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsResponse = await axios.get(
          "https://vacationwebapi.azurewebsites.net/Auth"
        );
        let contacts = contactsResponse.data;
        setUserContact(contacts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  }, []);

  let headings = [];

  for (const key in userContact[0]) {
    headings.push(key);
    headings = headings.filter(
      (key) =>
        key === "firstName" || key === "lastName" || key === "vacationHours"
    );
  }
  headings.unshift(" ")
  headings = headings.map((heading, index) => <th key={index}>{heading}</th>);

  return (
    <React.Fragment>
      <Container className="rounded bg-light p-0">
        <div>
          <div className="bg-secondary rounded-top m-0 p-2 ps-5">
            <h1>Contacts</h1>
          </div>
          <div className="d-flex align-self-end justify-content-between m-3">
            <div>
                <p><span>{userContact.length}</span> records per page
            </p>
            </div>
            <input
              type="text"
              placeholder=" Search"
              aria-label="Recipient's username"
              className="rounded bg-light p-0"/>
          </div>
        </div>

        <Table responsive>
          <thead>
            <tr>{headings}</tr>
          </thead>
          <tbody>
            {userContact.map((contact, index) => (
              <tr key={index}>
                <td style={{width: "100px"}}  className="mt-0 p-0" >
                  <img src="logo192.png" style={{width: "60%"}} className="ms-3 mb-2 pt-0" />
                </td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.vacationHours}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <nav className="d-flex align-self-end justify-content-between me-3">
            <p className="text-secondary d-flex align-self-center ms-3">
              Showing {userContact.length} of {userContact.length}
            </p>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
      <Link to="/">
        <Button
          className="d-flex justify-content-end align-items-end align-self-end"
          variant="outline-secondary"
        >
          Back
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default Contacts;
