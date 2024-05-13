import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserForm from "./pages/UserForm.js";
import ViewTable from "./pages/ViewTable.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/report" element={<ViewTable />} />
      </Routes>
    </div>
  );
}

export default App;
