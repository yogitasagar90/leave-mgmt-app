import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HodDashboard from './HodDashboard';
import Staffdashboard from './StaffDashboard';

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('storeuser'))
    if (userDetails) {
      setUser(userDetails);
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <>{user.role === 'Hod' && <HodDashboard />}
      {user.role === 'Staff' && <Staffdashboard />}
    </>
  )
}

export default Home;
