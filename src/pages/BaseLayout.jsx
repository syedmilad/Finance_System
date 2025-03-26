import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const BaseLayout = ({ children }) => {
  return (
    <div className='h-screen flex ' >
      <div className='min-w-[280px] border border-gray-200'>
        <Sidebar />
      </div>
      <div className="w-full border  border-gray-200">
        <div className="min-h-[88px] border border-gray-200">
          <Header />
        </div>
        {children}
      </div>
    </div >
  )
}

export default BaseLayout