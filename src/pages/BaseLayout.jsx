import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const BaseLayout = ({ children }) => {
  return (
    <div className='h-screen flex ' >
      <div className='min-w-[280px]  '>
        <Sidebar />
      </div>
      <div className="w-full h-full !bg-[#f4f5f7]">
        <div className=" min-w-[40px] border-b border-b-[#E8E8E8]">
          <Header />
        </div>
        {children}
      </div>
    </div >
  )
}

export default BaseLayout