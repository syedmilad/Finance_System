import { ChevronRight } from 'lucide-react'
import React from 'react'
import { upcomingBill } from '../constants/dashboardData'
import { useNavigate } from 'react-router-dom'

const UpcomingBalance = ({ classes }) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col w-full h-full !overflow-x-hidden !overflow-y-hidden">
            {/* Header */}
            <div className='flex flex-row justify-between items-center   '>
                <span className='text-2xl text-[#878787] font-normal mb-1'>Upcoming Bill</span>
                <div className='flex flex-row items-center gap-2 text-xs font-medium cursor-pointer '>
                    <span className='text-[#878787] font-normal' onClick={()=> navigate("/bills")} >View All</span>
                    <ChevronRight className='h-4 w-4 text-[#878787] font-normal' />
                </div>
            </div>
            {/* Total Amount */}
            <div className='shadow-2xl bg-[#fff] rounded-[8px] p-[34px]'>
                <div className='flex flex-col gap-2'>
                    {upcomingBill.map((item, index) => (
                        <div key={index} className={`flex flex-row justify-between items-center py-2 ${upcomingBill.length - 1 === index ? "" : "border-b border-[#F4F5F7]"} `}>
                            <div className='flex flex-1'>
                                <div className='flex flex-col justify-center items-center bg-[#D2D2D240] px-[12px] py-[14px] rounded-[8px] mr-2'>
                                    <span className='text-xs text-[#666666] font-normal'>{item.month}</span>
                                    <span className='text-2xl text-[#191919] font-bold'>{item.date}</span>
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <div className='flex flex-row items-center gap-2 mb-1'>
                                        <span className='text-[#666666] text-base font-medium'>{item.name}</span>
                                        <img src={item.logo} alt="logo " className='h-6 w-6 object-contain' />
                                    </div>
                                    <span className='text-base text-[#525256] font-bold'>{item.description}</span>
                                    <span className='text-xs text-[#959595] font-medium'>Last Charge - {item.lastCharge}</span>
                                </div>
                            </div>
                            <div>
                                <span className='px-[12px] py-[8px] rounded-[8px] border border-[#e8e8e8]'>${item.amount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UpcomingBalance