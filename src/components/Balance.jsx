import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Balance = ({ balance }) => {
    const { amount, type, bank, logo, accountNumber,id } = balance;
    const navigate = useNavigate()
    return (
        <div className="flex flex-col flex-1 p-[24px] rounded-[8px] bg-[#fff] shadow-lg min-w-[290px] max-w-[300px]">
            {/* Header */}
            <div className='flex justify-between items-center border-b border-b-[#D2D2D240] pb-[8px]'>
                <span className='text-base font-bold text-[#878787]'>{type}</span>
                <div className='flex justify-end items-center gap-2'>
                    <span className='text-[#666666] text-xs font-medium'>{bank}</span>
                    {logo && <img src={logo} alt="card-icon" className='w-6 h-6 object-contain' />}
                </div>
            </div>
            {/* Content */}
            <div className='flex flex-col justify-start items-start gap-2 py-4'>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <span className='text-xl font-semibold text-[#191919]'>{accountNumber}</span>
                    <span className='text-base font-normal text-[#9f9f9f]'>Account Number</span>
                </div>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <span className='text-xl font-semibold text-[#191919]'>{amount}</span>
                    <span className='text-base font-normal text-[#9f9f9f]'>Total amount</span>
                </div>
            </div>
            {/* Button */}
            <div className='flex justify-between items-center '>
                <button className='text-[#299D91] text-base font-normal border-none outline-none'>Remove</button>
                <div onClick={()=> navigate('accountDetails')} className='bg-[#299D91] rounded-[4px] px-4 py-2 flex flex-row justify-center items-center gap-1 cursor-pointer' >
                    <span className='text-[#fff]  text-base font-normal flex items-center justify-center'>Details </span>
                    <span className='mt-[2px]'><ChevronRight className='w-4 h-4 object-contain text-white' /></span>
                </div>
            </div>
        </div>
    )
}

export default Balance