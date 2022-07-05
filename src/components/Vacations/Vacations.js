import React, { useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import UserContext from "../../store/userContext";
import axios from "axios";
const Vacations = (props) => {
  const ctx = useContext(UserContext);

  //   console.log(ctx);
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
        console.log(vacationValues, 'valus')
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
    fetchVacations()
    console.log(ctx.state.vacations, 'vacations')

  }, []);
  return (
    <React.Fragment>
      <ul>
        {ctx.state.vacations.length > 0 ? (
          ctx.state.vacations.map((vacation, index) => {
            return <li>{vacation.from}</li>;
          })
        ) : (
          <h1>No vacations</h1>
        )}
      </ul>
    </React.Fragment>
  );
};

export default Vacations;
