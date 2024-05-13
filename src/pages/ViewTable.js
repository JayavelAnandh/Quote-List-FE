import React, { useEffect, useState } from "react";
import "./table.css";
const ViewTable = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const getData = async () => {
    const res = await fetch(`http://localhost:8080/report?sort=${sortBy}`, {
      method: "GET",
    });
    const response = await res.json();
    console.log("Response", response);
    response && setData([].concat(response));
    return response;
  };

  useEffect(() => {
    getData();
  }, [sortBy]);

  return (
    <div>
      <div>
        <select
          className="drop-down"
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="quoteCount" selected>
            QuoteCount
          </option>
        </select>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name :</th>
              <th>Email :</th>
              <th>QuoteCount :</th>
              <th>Previous Quote :</th>
              <th>Next Quote :</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, idx) => {
              return (
                <tr key={idx}>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.quoteCount}</td>
                  <td>{val.lowerQuoteCount}</td>
                  <td>{val.higherQuoteCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTable;
