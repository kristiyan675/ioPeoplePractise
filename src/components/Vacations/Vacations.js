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
  return <h1>Vacations</h1>;
};

export default Vacations;
