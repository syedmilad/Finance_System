import React from 'react'

const UpcomingBalance = ({ classes }) => {
    return (
        <div className="flex flex-col w-full h-full !overflow-x-hidden !overflow-y-hidden">
            {/* Header */}
            <div className='flex flex-row justify-start items-start '>
                <span className='text-2xl text-[#878787] font-normal mb-1'>Upcoming Bill</span>
            </div>
            {/* Total Amount */}
            <div className='shadow-2xl bg-[#fff] rounded-[8px]  p-6'>
            </div>
        </div>
    )
}

export default UpcomingBalance