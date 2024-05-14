import React, { useEffect, useState } from "react";
import "./table.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { deleteQuote, getReport, getSearchResults } from "../../utils/apiUtils";
import TableRow from "./TableRow";
const ViewTable = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await getReport(sortBy);
      if (response.status !== "SUCCESS") {
        return swal({
          title: "Error retriving report from server",
          icon: "warning",
        });
      }
      setData([].concat(response.reportDetails));
    } catch (error) {
      swal({
        title: "Error retriving report from server",
        icon: "warning",
      });
    }
  };

  useEffect(() => {
    getData();
  }, [sortBy]);

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const handleRemove = async (id) => {
    try {
      const response = await deleteQuote(id);
      if (response?.status != "SUCCESS") {
        return swal({
          title: "Error Removing report from server",
          icon: "warning",
        });
      }
      getData();
      swal({
        title: "Report Deleted Successfully",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Error Removing report from server",
        icon: "warning",
      });
    }
  };

  return (
    <div>
      <div className="drop-down-container">
        <select
          className="drop-down"
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          defaultValue={"quoteCount"}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="quoteCount">QuoteCount</option>
        </select>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name </th>
              <th>Email </th>
              <th>QuoteCount </th>
              <th>Previous Quote </th>
              <th>Next Quote </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <TableRow data={data} handleRemove={handleRemove} />
          </tbody>
        </table>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            routeChange();
          }}
          className="redirectionbtn"
        >
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Form
        </button>
      </div>
    </div>
  );
};

export default ViewTable;
