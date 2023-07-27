import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './HodDashboardStyles.css';

function HodDashboard() {
    const [toggle, setToggle] = useState(false);
    const [leaves, setLeaves] = useState([]);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('storeuser')
        navigate('/login')
    }
    useEffect(() => {
        setLeaves(JSON.parse(localStorage.getItem('leaves')))
    }, [toggle])
    const handleApprove = (item) => {
        const filterLeave = leaves.filter((ii) => ii.id !== item.id)
        localStorage.setItem('leaves', JSON.stringify([...filterLeave, { ...item, status: 'Approved' }]))
        setToggle(!toggle)
    }
    const handleReject = (item) => {
        const filterLeave = leaves.filter((ii) => ii.id !== item.id)
        localStorage.setItem('leaves', JSON.stringify([...filterLeave, { ...item, status: 'Rejected' }]))
        setToggle(!toggle)
    }
    return (
        <div className='leavedetails'>
            <button className='logou' onClick={handleLogout}>Logout</button>
            <div className='d-icon'>
                {leaves?.map((item, i) => {
                    return <div style={{ border: '1px solid black', padding: '10px' }} key={i}>
                        <div className='one'>
                            <h3>Duration :</h3>
                            <p>{item.startdate} to {item.enddate}</p>
                        </div>
                        <div className='two'>
                            <h3>Reason :</h3>
                            <p>{item.reason}</p>
                        </div>
                        <div className='three'>
                            <h3>Status :</h3>
                            <p>{item.status}</p>
                        </div>
                        <div className='checked' style={{ display: item?.status === 'Pending' ? '' : 'none' }}>
                            <button className='appr' onClick={() => handleApprove(item)}>Approved</button>
                            <button className='reje' onClick={() => handleReject(item)}>Rejected</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default HodDashboard;
