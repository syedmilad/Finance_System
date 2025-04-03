import React, { useState } from 'react'
import { lightLogo, google } from "../assets"
import { Button, GeneralInput } from '../components'
import Checkbox from '../components/Checkbox'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../services/authService'
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    name: "",
    password: "",
    keepMe: false,
  })
  const onchangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    e.preventDefault();
    const valueToUse = type === "checkbox" ? checked : value;
    setInput((prev) => ({ ...prev, [name]: valueToUse }))
  }
  const onSubmitHandler = async () => {
    console.log("submitted")
    console.log(input)
    const userData = {  
      email: input.email,
      name: input.name,
      password: input.password,
    }
    if(userData.email && userData.name && userData.password){
      try {
        const response = await signUp(userData)
        if (response.success) {
          toast.success(response.message || "Sign-Up Successful!")
          const user = response.data
          localStorage.setItem("userData", JSON.stringify(user))
          navigate("/sign-in")
        } else {
          toast.error(response ||  "Sign-In Failed!");
        }
      } catch (error) {
        toast.error(error);
      }
    }else{
     toast.error("Please fill all the fields")
    }
  }
  return (
    <div className='flex justify-center p-8 items-center h-screen'>
      <div className='max-w-[400px] w-screen'>
        <div className='flex flex-col justify-center mb-[2rem] items-center'>
          <img src={lightLogo} alt="lightLogo" className='w-[276px] h-[32px] ' />
          <h1 className=' mt-[1.5rem] text-xl font-bold'>Create an account</h1>
        </div>
        <GeneralInput label="Name" name="name" type="text" onChange={onchangeHandler} value={input.name || ""} placeholder="Milad Developer" />
        <GeneralInput label="Email Address" name="email" type="email" onChange={onchangeHandler} value={input.email || ""} placeholder="johndoe@email.com" />
        <GeneralInput label="Password" name="password" type="password" onChange={onchangeHandler} value={input.password || ""} placeholder="***********" />
        <p className='mt-4 mb-4'>By continuing, you agree to our <span className='text-primary text-base font-medium'>terms of service.</span></p>
        <Button onClick={onSubmitHandler} title={"Sign up"} classess="!px-4 !py-2 !rounded-[4px] w-full !text-base text-[#fff] " />

        <div className='flex justify-center items-center mt-6 mb-6'>
          <div className='w-[120px] h-[1px] m-auto bg-[#999DA3]' />
          <p className='text-[#999DA3]'>or sign up with</p>
          <div className='w-[120px] h-[1px] m-auto bg-[#999DA3]' />
        </div>

        <div className='flex cursor-pointer gap-2 justify-center items-center bg-[#E4E7Eb] !rounded-[4px] !px-4 !py-[0.7rem] w-full !text-base'>
          <img src={google} alt="google" />
          <p>Continue with Google</p>
        </div>
        <p onClick={()=> navigate("/sign-in")} className='text-primary text-base text-center mt-4 cursor-pointer'>Already have an account? Sign in here</p>
      </div>
    </div>
  )
}

export default Signup