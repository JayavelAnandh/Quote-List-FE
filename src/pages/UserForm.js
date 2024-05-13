import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "./form.css";
import validator from "validator";
import { redirect, useNavigate } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quoteCount, setQuoteCount] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      addData();
    } else {
      swal({ title: "Enter a valid Email Address", icon: "warning" });
    }
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
      swal("Report Uploaded Successfully");
    } catch (error) {
      console.log(error);
      swal("Error uploading report to server");
    }
  };
  const routeChange = () => {
    let path = `/report`;
    navigate(path);
  };
  return (
    <div>
      <div className="form-container">
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
              type="email"
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
              value={quoteCount}
              onInput={(e) =>
                (e.target.value = e.target.value.slice(0, e.target.maxLength))
              }
              onChange={(e) => {
                setQuoteCount(e.target.value);
              }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <button
          className="redirectionbtn"
          onClick={() => {
            routeChange();
          }}
        >
          Reports
        </button>
      </div>
    </div>
  );
};

export default UserForm;
