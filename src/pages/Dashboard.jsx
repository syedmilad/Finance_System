import React from 'react'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'
import UpcomingBalance from '../components/UpcomingBalance'
import Goals from '../components/Goals'
import TotalBalance from '../components/TotalBalance'

const Dashboard = () => {
  const navigate = useNavigate()
  const onLogoutHandler = (e) => {
  e.preventDefault();
    localStorage.setItem("isAuthenticated", false)
    navigate("/sign-in", { replace: true })
  }
  return (
    <div className='h-[calc(100% - 40px)] w-full px-[14px] py-[12px] bg-[#F4F5F7]'>
      <div className='min-h-[20%]'>
       <div className='flex !flex-wrap gap-2 justify-start items-start'>
        <div className='flex flex-1 min-h-[272px]  overflow-auto '>
          <TotalBalance />
        </div>
        <div className='flex flex-1 min-h-[272px] '>
          <Goals />
        </div>
        <div className='flex flex-1 min-h-[272px] '>
          <UpcomingBalance />
        </div>
       </div>
      </div>
      <div className='min-h-[80%]'>
      </div>
    </div>
  )
}

export default Dashboard