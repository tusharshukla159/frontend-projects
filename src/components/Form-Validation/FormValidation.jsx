import React, { useState } from "react";
import './FormValidation.css'
const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setShowError(true);
  }
  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  }
  function validateInput(name, value) {
    switch (name) {
      case "username":
        setErrors((errors) => ({
          ...errors,
          username: value.length <= 3 ? "Enter atleast 4 characters" : "",
        }));
        break;
      case "email":
        setErrors((errors) => ({
          ...errors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Invalid email address",
        }));
        break;
      case "password":
        setErrors((errors) => ({
          ...errors,
          password: value.length <= 3 ? "Enter atleast 4 characters" : "",
        }));
        break;
      default:
        break;
    }
  }
  return (
    <div className="FormValidationWrapper" style={{ textAlign: "center" }}>
      <h1>Form Validation</h1>
      <div className="FormValidation">
        <form onSubmit={handleSubmit}>
          <div className="formContents">
            <label>UserName:</label>
            <input
              type="text"
              value={formData.username}
              name="username"
              placeholder="enter value"
              onChange={handleFormChange}
            ></input>
            {showError ? (
              <span>{errors.username}</span>
            ):''}
          </div>
          <div className="formContents">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="enter value"
              onChange={handleFormChange}
            ></input>
            {showError ? (
              <span>{errors.email}</span>
            ):''}
          </div>
          <div className="formContents">
            <label>Password:</label>
            <input
              type="text"
              name="password"
              value={formData.password}
              placeholder="enter value"
              onChange={handleFormChange}
            ></input>
            {showError ? (
              <span>{errors.password}</span>
            ):''}
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
