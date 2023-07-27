import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import './StaffDashboardStyles.css';

function Staffdashboard() {
    const leaveInitValue = {
        startdate: "",
        enddate: "",
        reason: "",
        status: "Pending",
    };
    const navigate = useNavigate();
    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: leaveInitValue,
        onSubmit: (values, action) => {
            const data = JSON.parse(localStorage.getItem('leaves')) || []
            localStorage.setItem('leaves', JSON.stringify([...data, { ...values, id: uuidv4() }]))
            action.resetForm();
        },
    });
    const handleLogout = () => {
        localStorage.removeItem('storeuser')
        navigate('/login')
    }
    return (
        <div>
            <button className='logou' onClick={handleLogout}>Logout</button>
            <form className="reg-container" onSubmit={handleSubmit}>
                <div className="header-wrapper">
                    <h1>Leave Request</h1>
                </div>
                <div style={{ width: "47%" }}>
                    <div className="birth-day">
                        <label> From : </label>
                        <input
                            type="date"
                            placeholder="Enter BirthDate"
                            value={values.startdate}
                            name="startdate"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div style={{ width: "47%" }}>
                    <div className="birth-day">
                        <label> To : </label>
                        <input
                            type="date"
                            placeholder="Enter BirthDate"
                            value={values.enddate}
                            name="enddate"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className="regi-input reason-rwapper">
                    <label>Reason :</label>
                    <textarea
                        name="reason"
                        value={values.reason}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="btn-wrapper">
                    <button className="btn leave-btn" type="submit">
                        Send Leave Request
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Staffdashboard;
