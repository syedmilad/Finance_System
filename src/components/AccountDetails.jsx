import React from 'react'
import { useLocation } from 'react-router-dom'

const AccountDetails = () => {
    const location = useLocation();
    console.log("location==>",location)
  return (
    <div>AccountDetails</div>
  )
}

export default AccountDetails