import React from 'react'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", false)
    navigate("/sign-in", { replace: true })
  }
  return (
    <div className=''>
      <h1>Dashboard</h1>
      <button title="logout" onClick={onLogoutHandler}> logout </button>
    </div>
  )
}

export default Dashboard