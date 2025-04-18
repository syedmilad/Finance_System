import React, { useState } from 'react'
import { lightLogo, google } from "../assets"
import { Button, GeneralInput } from '../components'
import Checkbox from '../components/Checkbox'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../services/authService'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
    signIn: "fadjflksdfl",
    keepMe: false,
  })
  const onchangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    e.preventDefault();
    const valueToUse = type === "checkbox" ? checked : value;
    setInput((prev) => ({ ...prev, [name]: valueToUse }))
  }
  const onLoginHandler = async (e) => {
    e.preventDefault();

    if (input.email && input.password) {
      const creadential = {
        email: input.email,
        password: input.password,
      }
      try {
        const response =  await signIn(creadential)
        console.log("Response In Login", response)
        if (response.data) {
          navigate("/")
          toast.success(response.message || "Login Successful!")
          console.log("Login Successful")
          const user = response.data
          localStorage.setItem("userData", JSON.stringify(user))
          localStorage.setItem("isAuthenticated", true)
        } else {
          toast.error(response.response.data.error ||  "Login Failed!");
        }
      } catch (error) {
        console.log("Error occurred during login:", error);
      }
    } else {
      console.log("Login Failed")
    }
  }
  return (
    <div className='flex justify-center p-8 items-center h-screen'>
      <div className='max-w-[400px] w-screen'>
        <div className='flex justify-center mb-[4rem] items-center'>
          <img src={lightLogo} alt="lightLogo" className='w-[276px] h-[32px] ' />
        </div>
        <GeneralInput label="Email Address" name="email" type="email" onChange={onchangeHandler} value={input.email || ""} placeholder="johndoe@email.com" />
        <GeneralInput label="Password" isNotification={true} onClickNotification={()=> navigate("/forgot-password")} notificationText={"Forgot Password?"} name="password" type="password" onChange={onchangeHandler} value={input.password || ""} placeholder="***********" />
        <Checkbox classes="mt-4 mb-4"  label="Keep me signed in" onChange={onchangeHandler} />
        <Button onClick={onLoginHandler} title={"Login"} classess="!px-4 !py-2 !rounded-[4px] w-full !text-base text-[#fff] " />
        <div className='w-[324px] mt-[3rem] h-[1px] mb-[3rem] m-auto bg-[#4B5768]' />

        <div className='flex cursor-pointer gap-2 justify-center items-center bg-[#E4E7Eb] !rounded-[4px] !px-4 !py-[0.7rem] w-full !text-base'>
          <img src={google} alt="google" />
          <p>Continue with Google</p>
        </div>
        <p onClick={()=> navigate("/sign-up")} className='text-primary text-base text-center mt-4 cursor-pointer'>Create an account</p>
      </div>
    </div>
  )
}

export default Login  