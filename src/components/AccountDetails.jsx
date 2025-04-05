import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import AddBalance from './AddBalance';

const AccountDetails = () => {
  const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = React.useState(true)
  

  const { state } = useLocation();
  const { balance } = state || {}

  const isEditModalHanlder = () => {
    setIsOpen(!isOpen)
  }

  const toggle = () =>{
    if(!isOpen){
      setIsOpen(true)
    }
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col w-full h-[calc(100% - 40px)] px-4 py-2 gap-4">
      <AddBalance isOpen={isOpen} toggle={toggle} isEdit={isEdit} initialBalance={balance}  />
      <div className='flex flex-col justify-start items-start gap-1'>
        <span className='text-lg font-normal text-[#878787]'>Account Details</span>
        <div className="flex flex-row flex-wrap flex-1 p-[24px] justify-start items-start rounded-[8px] bg-[#fff] shadow-lg w-full min-h-[240px] gap-4">
          {/* Header */}
          <div className='flex flex-wrap w-full h-full gap-4'>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Bank Name</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.bank}</span>
            </div>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Account Type</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.type}</span>
            </div>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Balances</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.amount || "0"}</span>
            </div>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Branch Name</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.branch || "USA + ISRAIEL"}</span>
            </div>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Account Number</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.accountNumber}</span>
            </div>
          </div>

          <div className='flex flex-row gap-2 '>
            <button onClick={isEditModalHanlder} className="bg-[#299D91] text-[#fff] px-[32px] py-[12px] rounded-[4px] text-sm font-semibold ">Edit Details</button>
            <button className="bg-[#fff] text-[#9f9f9f] px-[32px] py-[12px] rounded-[4px] text-sm font-medium">Remove</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start items-start gap-1'>
        <span className='text-lg font-normal text-[#878787]'>Transactions History</span>
        <div className="flex flex-col flex-1 p-[24px] justify-center items-center rounded-[8px] bg-[#fff] shadow-lg w-full min-h-[328px] gap-4">
          {/* Header */}
          fdfs
        </div>
      </div>

    </div>
  )
}

export default AccountDetails