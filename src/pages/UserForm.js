import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quoteCount, setQuoteCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
  };
  const addData = async () => {
    try {
      const res = await fetch("http://localhost:8080/report/addReport/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          quoteCount,
        }),
      });
      let response = await res.json();
      console.log(response);
      swal("Report Uploaded Successfully");
    } catch (error) {
      console.log(error);
      swal("Error uploading report to server");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h4>Name : </h4>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <h4>Email :</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <h4>Quote Count :</h4>
          <input
            type="number"
            maxLength={6}
            minLength={1}
            value={quoteCount}
            onChange={(e) => {
              setQuoteCount(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
