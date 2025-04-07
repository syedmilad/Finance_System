import React from 'react'

const Goals = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100% - 40px)] px-4 py-2 ">
      <div className="flex flex-col justify-start items-start gap-2 h-full w-full">
        <span className='text-lg font-normal text-[#878787]'>Goals</span>
        <div className='flex flex-row justify-start items-start gap-2 min-h-[250px] w-full border'>
          <div className='flex flex-col bg-[#fff] shadow-lg flex-[0.7] min-h-[280px] rounded-[8px]'>lorem</div>
          <div className='flex flex-col bg-[#fff] shadow-lg flex-[1.3] min-h-[280px] rounded-[8px]'>lorem</div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <span className='text-lg font-normal text-[#878787]'>Expenses Goals By Category</span>
      </div>
    </div>
  )
}

export default Goals