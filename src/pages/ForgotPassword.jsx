import React, { useState } from 'react'
import { Button, GeneralInput } from '../components'
import { lightLogo } from '../assets'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
  })
  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setInput((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <div className='flex justify-center p-8 items-center h-screen'>
      <div className='max-w-[400px] w-screen'>
        <div className='flex flex-col justify-center mb-[2rem] items-center'>
          <img src={lightLogo} alt="lightLogo" className='w-[276px] h-[32px] ' />
          <h1 className=' mt-[1.5rem] text-xl font-bold'>Forgot Password</h1>
          <p className='text-grayLight max-w-[300px] text-center mt-4'>Enter your email address to get the password reset link.</p>
        </div>
        <GeneralInput label="Email Address" name="email" type="email" onChange={onchangeHandler} value={input.email || ""} placeholder="hello@example.com" />
        <Button title="Password Reset" classess="w-full bg-primary text-white !rounded-[4px] !text-xl mb-4" />
        <Button title="Back to login" onClick={()=> navigate("/sign-in")} classess="w-full !bg-[#fff] text-grayLight !text-xl" />
      </div>
    </div>
  )
} 

export default ForgotPassword