import { ArrowBigDown, ArrowBigUp } from 'lucide-react'
import React from 'react'
import { ArrowDown, ArrowUp } from '../assets'

const Expense = ({ expense: {category,total,change,changeType,icon,items} }) => {
    return (
        <div className='min-w-[340px] max-w-[300px] w-full flex-1 bg-[#fff] rounded-[8px] shadow-lg'>
            {/* Header */}
            <div  className="py-4 px-4 bg-[#e8e8e8] flex flex-row justify-between items-center rounded-t-[8px] ">
                <div className='flex flex-row justify-start items-center gap-2'>
                    <div className='px-2 py-2 bg-[#d1d1d1] rounded-[4px]'>
                        <img className='w-[20px] h-[20px] object-contain' src={icon} alt="icon" />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <span className='text-base font-semibold text-[#878787]'>{category}</span>
                        <span className='font-bold text-base text-[#191919]'>${total}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className='flex flex-row justify-end items-center w-full'>
                        <span className='text-base font-semibold text-[#878787]'>{change}</span>
                        {changeType === "up" && <img src={ArrowUp} className='w-6 h-6 object-contain' alt="arrow-up" /> }
                        {changeType === "down" && <img src={ArrowDown} className='w-6 h-6 object-contain' alt="arrow-dwon" /> }
                    </div>
                    <span className='text-xs font-normal text-[#878787]'>Compare to last month</span>
                </div>
            </div>
            {/* Content */}
            <div className='flex flex-col justify-start items-start px-4 py-4'>
                {items && items?.map((i,index)=>(
                    <div className={`flex flex-row justify-between w-full items-start px-2 py-2 ${items.length - 1 !== index ? "border-b border-b-[#f4f4f4]" : "" } `}>
                        <span className='text-base font-semibold text-[#525256]'>{i.name}</span>
                        <div className='flex flex-col justify-start items-start gap-2'>
                            <span className='text-base font-bold text-[#525256]'>${i.amount}</span>
                            <span className='text-xs font-normal text-[#878787]'>{i.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Expense