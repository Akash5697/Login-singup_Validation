import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user,  logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div className="p-4">  
      <div>Profile</div>
      <p>Email: {user.email} </p>
      <p>Name: {user.name} </p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mt-3 px-4 rounded' onClick={userLogout}>Logout</button>
    </div>
    
  )
}

export default Profile