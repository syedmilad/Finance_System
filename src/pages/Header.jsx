import React from 'react'
import { ChecronsRight, NotificationIcon } from '../assets'
import SearchWithDebounce from '../components/SearchWithDebounce'

const Header = () => {
  return (
    <div className='w-full h-full bg-[#F4F5F7] flex items-center justify-between px-[20px] py-[32px] '>
      <div className='flex flex-row justify-start items-center gap-4'>
        <p className='text-3xl text-[#191919] font-bold'>Hello Milad  </p>
        <div className='flex flex-row justify-start items-center gap-1'>
          <img src={ChecronsRight} className='w-[20px] h-[20px] object-cover' alt="ChecronsRight" />
          <p className='text-sm font-normal text-[#9F9F9F]'>May 19, 2025</p>
        </div>
      </div>
      <div className='flex flex-row justify-start items-center gap-4'>
        <img src={NotificationIcon} alt="notificationIcon" />
        <SearchWithDebounce />
      </div>
    </div>
  )
}

export default Header