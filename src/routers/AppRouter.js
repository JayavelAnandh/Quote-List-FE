import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ViewTable from "../components/table/ViewTable";
import UserForm from "../components/form/UserForm";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/report" element={<ViewTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
