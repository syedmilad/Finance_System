import React from 'react'

const Transaction = ({ amount, date, imageUrl, title, category, filteredTransactions, index }) => {
    return (
        <div className={`w-full h-full flex flex-row  p-2  ${filteredTransactions.length - 1 !== index ? "border-b border-b-[#f3f3f3]" : "" } `}>
            <div className='flex flex-1'>
                <div className='flex justify-center items-center p-[8px] rounded-[8px] bg-[#D2D2D240] mr-2'>
                    <img src={imageUrl} alt="image-url" className='w-[24px] h-[24px] object-contain' />
                </div>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <span className='text-base text-[#191919] font-semibold'>{title}</span>
                    <span className='text-xs font-normal text-[#959595]'>{category}</span>
                </div>
            </div>
            <div className='flex justify-start items-start'>
                <div className='flex flex-col justify-center items-end'>
                    <h1 className='text-base text-[#525256] font-semibold'>${amount}</h1>
                    <h1 className='text-xs font-normal text-[#9f9f9f]'>{date}</h1>
                </div>
            </div>
        </div>
    )
}

export default Transaction