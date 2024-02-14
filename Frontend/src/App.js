import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
//import createEmployeePage from "../pages/createEmployeePage";
import CreateEmployeePage from "./pages/createEmployeePage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
