import { useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import UserContext from "../../store/userContext";
import axios from "axios";
const Vacations = (props) => {
  const ctx = useContext(UserContext);
  //   console.log(ctx);
  useEffect(() => {
    const fetchVacations = async () => {
      const response = await axios.get(
        "https://react-http-e729c-default-rtdb.europe-west1.firebasedatabase.app/vacations.json"
      );
      let vacationValues = Object.entries(response.data)[0];
      vacationValues = vacationValues[1].vacations.filter(
        (vacation) => vacation !== null
      );
    };
    fetchVacations();
  }, []);
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
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
  );
};

export default Vacations;
