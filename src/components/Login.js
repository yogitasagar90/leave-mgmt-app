import React, { useEffect, useState } from "react";
import "./LoginStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from '../schema/schema';

const Login = () => {
    const [users, setUsers] = useState([])
    const loginInitialvalue = {
        email: "",
        password: "",
    };
    const navigate = useNavigate();
    const { values, handleBlur, handleChange, touched, handleSubmit, errors } =
        useFormik({
            initialValues: loginInitialvalue,
            validationSchema: loginSchema,
            onSubmit: (values, action) => {
                const loggedInUser = users.find(
                    (item) =>
                        item.password == values.password && item.email == values.email
                );
                if (loggedInUser) {
                    localStorage.setItem('storeuser', JSON.stringify({ ...values, role: loggedInUser.role }))
                    navigate("/");
                    action.resetForm();
                } else {
                    alert("please enter valid email and password ");
                }
            },
        });
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('users')))
    }, []);
    return (
        <form className="login-cont" onSubmit={handleSubmit}>
            <h1 className="heading">Login</h1>
            <div className="login-field">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                    <p className="error">{errors.email}</p>
                ) : null}
            </div>
            <div className="login-field">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                    <p className="error">{errors.password}</p>
                ) : null}
            </div>
            <button className="btn log-btn" type="submit">
                Login
            </button>
            <p>
                Don't have an account? <Link to="/register">Register Now</Link>
            </p>
        </form>
    );
};

export default Login;