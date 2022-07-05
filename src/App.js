import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Vacations from "./components/Vacations/Vacations";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vacations" element={<Vacations />} />
      </Routes>
    </div>
  );
}

export default App;
