import React, { useEffect } from "react";
import "./RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../schema/schema";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const Initialvalue = {
    fullname: "",
    email: "",
    password: "",
    number: "",
    birthdate: "",
    admissionNo: "",
    class: "",
    conditions: false,
    role: "",
    id: uuidv4(),
  };
  const navigate = useNavigate();
  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: Initialvalue,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        const usersData = JSON.parse(localStorage.getItem('users')) || []
        localStorage.setItem('users', JSON.stringify([...usersData, values]))
        action.resetForm();
        navigate('/login');
      },
    });

  return (
    <form className="reg-container" onSubmit={handleSubmit}>
      <div className="header-wrapper">
        <h1>Registration</h1>
        <div>
          <div className="rolle">
            <input
              type="radio"
              name="role"
              value="Hod"
              checked={values.role === "Hod"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span>HOD</span>
            <input
              type="radio"
              name="role"
              value="Staff"
              checked={values.role === "Staff"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span>Staff</span>
          </div>
          {errors.role && touched.role ? (
            <p className="error">{errors.role}</p>
          ) : null}
        </div>
      </div>
      <div className="regi-input">
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={values.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.fullname && touched.fullname ? (
          <p className="error">{errors.fullname}</p>
        ) : null}
      </div>
      <div className="regi-input">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </div>
      <div className="regi-input">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </div>
      <div className="regi-input">
        <label htmlFor="number">Contact</label>
        <input
          type="text"
          name="number"
          id="number"
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.number && touched.number ? (
          <p className="error">{errors.number}</p>
        ) : null}
      </div>
      <div style={{ width: "47%" }}>
        <div className="birth-day">
          <label> Date of Birth : </label>
          <input
            type="date"
            placeholder="Enter BirthDate"
            value={values.birthdate}
            name="birthdate"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.birthdate && touched.birthdate ? (
          <p className="error">{errors.birthdate}</p>
        ) : null}
      </div>
      <div style={{ width: "47%" }}>
        <div className="rollnum">
          <label htmlFor="admissionNo">Admission No : </label>
          <input
            type="text"
            id="admissionNo"
            name="admissionNo"
            value={values.admissionNo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.admissionNo && touched.admissionNo ? (
          <p className="error">{errors.admissionNo}</p>
        ) : null}
      </div>
      <div style={{ width: "47%" }}>
        <div className="class">
          <label htmlFor="class">Class : </label>
          <input
            type="text"
            name="class"
            value={values.class}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.class && touched.class ? (
          <p className="error">{errors.class}</p>
        ) : null}
      </div>
      <div>
        <div className="condition-checkbox">
          <input
            type="checkbox"
            name="conditions"
            checked={values.conditions}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p>I accept the Terms and Conditions</p>
        </div>
        {errors.conditions && touched.conditions ? (
          <p className="error">{errors.conditions}</p>
        ) : null}
      </div>
      <div className="button-wrapper">
        <p>
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
        <button className="btn" type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;