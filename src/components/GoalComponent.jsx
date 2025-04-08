import { PencilLineIcon } from 'lucide-react'
import React from 'react'

const GoalComponent = ({expense: {category,icon,total}}) => {
  return (
    <div className='min-w-[300px] bg-[#fff] shadow-lg px-4 py-4 rounded-[8px] flex flex-row justify-between items-center'>
      <div className='flex flex-row justify-start items-start gap-4'>
        <div className='flex flex-row justify-center items-center px-2 py-3 bg-[#f4f4f4] rounded-[4px]'>
        <img className='w-6 h-6 object-contain' src={icon} alt="icon" />
        </div>
        <div className='flex flex-col justify-start items-start gap-[2px]'>
            <span className='text-base font-normal text-[#9f9f9f]'>{category}</span>
            <span className='text-base font-bold text-[#191919]'>${total}</span>
        </div>
      </div>
      <div className='flex flex-row justify-center cursor-pointer items-center gap-2 px-4 py-2 text-[#299d91] border border-[#299d91] rounded-[4px]'>
          <span className='text-sm'>Adjust</span>
          <PencilLineIcon  className='w-4 h-4 object-contain' />
      </div>
    </div>
  )
}

export default GoalComponent