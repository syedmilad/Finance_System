import React, { useState } from 'react'

const Account = () => {
  const [account, setAccount] = useState({
    fullName: "",
    email: "",
    userName: "",
    phoneNumber: ""
  })

  const onChangeValueHandler = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmitHandler = (e ) =>{
    e.preventDefault();

    console.log("submitting...",account)

  }

  const inputFields = [
    { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter Your Full Name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter Your Full Email" },
    { label: "User Name", name: "userName", type: "text", placeholder: "Enter Your Full User Name" },
    { label: "Phone Number", name: "phoneNumber", type: "number", placeholder: "Enter Your Full Phone Number" },
  ]

  return (
    <div className='px-4 py-4 flex flex-row justify-between items-start gap-2'>
      <div className='flex flex-[1.2] flex-col justify-start items-start gap-2'>

        {inputFields.map((input, index) => (
          <div key={index} className='flex flex-col justify-start items-start gap-4 w-full'>
            <label htmlFor={input.name} className='text-[#525256] text-base font-semibold' >{input.label}</label>
            <input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={account[input.name]}
              onChange={onChangeValueHandler}
              id={input.name}
              className='max-w-[350px] w-full px-6 py-2 rounded-[4px] placeholder:text-[#878787]'
            />
          </div>
        ))}

        <div className='px-4 py-2 rounded-[4px] bg-[#299d91] text-[#fff] cursor-pointer flex justify-center items-center mt-8'>
          <span className='text-base font-normal' onClick={onSubmitHandler} >Update Profile</span>
        </div>

      </div>
      <div className='flex flex-[0.8] flex-col justify-start items-start gap-2'>form</div>
    </div>
  )
}

const Security = () => {

  const [security, setSecurity] = useState({
    oldPassword: "",
    newPassword: "",
    retypePassword: "",
    phoneNumber: ""
  })

  const onChangeValueHandler = (e) => {
    const { name, value } = e.target;
    setSecurity((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmitHandler = (e ) =>{
    e.preventDefault();

    console.log("security submitted...",security)

  }

  const inputFields = [
    { label: "Old Password", name: "oldPassword", type: "password", placeholder: "Enter Your Password" },
    { label: "New Password", name: "newPassword", type: "password", placeholder: "Enter Your New Password" },
    { label: "Re Type Password", name: "retypePassword", type: "p   assword", placeholder: "Re Type Password" },
    { label: "Phone Number", name: "phoneNumber", type: "number", placeholder: "Enter Your Full Phone Number" },
  ]
  
  return (
    <div className='px-4 py-4 flex flex-row justify-between items-start gap-2'>
      <div className='flex flex-1 flex-col justify-start items-start gap-2'>

        {inputFields.map((input, index) => (
          <div key={index} className='flex flex-col justify-start items-start gap-4 w-full'>
            <label htmlFor={input.name} className='text-[#525256] text-base font-semibold' >{input.label}</label>
            <input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={security[input.name]}
              onChange={onChangeValueHandler}
              id={input.name}
              className='max-w-[350px] w-full px-6 py-2 rounded-[4px] placeholder:text-[#878787]'
            />
          </div>
        ))}

        <div className='px-4 py-2 rounded-[4px] bg-[#299d91] text-[#fff] cursor-pointer flex justify-center items-center mt-8'>
          <span className='text-base font-normal' onClick={onSubmitHandler} >Update Password</span>
        </div>

      </div>
    </div>
  )
}

const Settings = () => {

  const [selectedTabs, setSelectedTabs] = useState("account")
  const [tabs, setTabs] = useState(["account", "security"])


  return (
    <div className='bg-[#fff] shadow-lg rounded-[8px] px-4 py-4 mx-2 my-2 h-[calc(100% - 40px)]'>
      {/* Tabs */}
      <div className='px-4 py-4 flex flex-row justify-start items-start gap-20'>
        {tabs.map((tab, index) => (
          <div onClick={() => setSelectedTabs(tab)} className={`${selectedTabs === tab ? "border-b-[2px] border-b-[#299d91] text-[#299d91]" : ""} text-base font-semibold text-[#9f9f9f] cursor-pointer pb-1`} key={index + tab}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</div>
        ))}
      </div>
      {/* Content as behave of tabs */}
      <div>
        {selectedTabs === "account" && <Account />}
        {selectedTabs === "security" && <Security />}
      </div>
    </div>
  )
}

export default Settings