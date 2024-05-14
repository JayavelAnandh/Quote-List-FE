import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "./form.css";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { addQuote, checkAvailability } from "../../utils/apiUtils";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quoteCount: 0,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validator.isEmail(formData.email)) {
      return swal({ title: "Enter a valid Email Address", icon: "warning" });
    }
    const availability = await checkAvailability(formData.email);
    if (availability.message != "NotAvailable") {
      return swal({
        title: "Email already exists",
        icon: "warning",
      });
    }

    try {
      const response = await addQuote(formData);
      if (response?.status != "SUCCESS")
        return swal({
          title: "Error uploading report to server",
          icon: "warning",
        });

      swal("Report Uploaded Successfully");
      setFormData({
        name: "",
        email: "",
        quoteCount: 0,
      });
    } catch (error) {
      swal({ title: "Error uploading report to server", icon: "warning" });
    }
  };

  const handleChange = (key, value) => {
    setFormData((pre) => ({
      ...pre,
      [key]: value,
    }));
  };

  return (
    <div className="form-head">
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            data={formData}
            label={"Name"}
            type={"text"}
            name={"name"}
            handleChange={handleChange}
          />

          <Input
            data={formData}
            label={"Email"}
            type={"email"}
            name={"email"}
            handleChange={handleChange}
          />

          <Input
            data={formData}
            label={"Quote"}
            type={"number"}
            name={"quoteCount"}
            handleChange={handleChange}
            max={"999999"}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <button
          className="redirectionbtn"
          onClick={() => {
            navigate("/report");
          }}
        >
          Reports <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default UserForm;
