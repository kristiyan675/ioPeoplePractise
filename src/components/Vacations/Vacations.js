import React, { useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import UserContext from "../../store/userContext";
import axios from "axios";
const Vacations = (props) => {
  const ctx = useContext(UserContext);
  const vacations = ctx.state.vacations;
  useEffect(() => {
    const fetchVacations = async () => {
      try {
        const response = await axios.get(
          "https://react-http-e729c-default-rtdb.europe-west1.firebasedatabase.app/vacations.json"
        );
        let vacationValues = Object.entries(response.data)[0];
        vacationValues = vacationValues[1].vacations.filter(
          (vacation) => vacation !== null
        );
        console.log(vacationValues, "valus");
        ctx.dispatch({
          type: "set-vactions",
          payload: {
            vacations: [...vacationValues],
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchVacations();
  }, []);

  let headings = [];
  for (const key in vacations[0]) {
    headings.push(key);
  }
  headings = headings.map((heading, index) => <th key={index}>{heading}</th>);
console.log(vacations)
  return (
    <React.Fragment>
      <Table responsive>
        <thead>
          <tr>{headings}</tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Vacations;
