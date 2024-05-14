import React from "react";

const TableRow = ({ data, handleRemove }) => {
  return (
    <>
      {data.map((val, idx) => {
        return (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.quoteCount}</td>
            <td>{val.lowerQuoteCount}</td>
            <td>{val.higherQuoteCount}</td>
            <td>
              <i
                className="fa fa-trash-o btn-delete"
                aria-hidden="true"
                onClick={() => handleRemove(val._id)}
              ></i>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
