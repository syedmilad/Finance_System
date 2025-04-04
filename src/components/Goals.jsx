import React from 'react';
import { Award, Edit, Goal } from '../assets';
import GuageChart from './GuageChart';

const Goals = () => {

  return (
    <div className="flex flex-col w-full h-full !overflow-x-hidden !overflow-y-hidden">
      {/* Header */}
      <div className='flex flex-row justify-start items-start '>
        <span className='text-2xl text-[#878787] font-normal mb-1'>Goals</span>
      </div>
      {/* Total Amount */}
      <div className='shadow-2xl bg-[#fff] rounded-[8px]  p-6'>
        {/* Content Header */}
        <div className='flex flex-col '>
          <div className='flex flex-row justify-between items-center border-b border-b-[#E8E8E8] pb-2  '>
            <div className='flex items-center justify-start gap-2'>
              <h1 className='text-2xl text-[#191919] font-bold '>$20,000</h1>
              <span className='p-[8px] rounded-[4px] h-[32px] w-[32px] bg-[#D2D2D240] cursor-pointer'>
                <img src={Edit} alt="Edit-image" className='w-full h-full'  />
              </span>
            </div>
            <h1 className='text-sm font-medium text-[#525256] cursor-pointer'>May, 2023</h1>
          </div>
        </div>
        {/* Content */}
        <div className='flex flex-row justify-start items-start gap-4 mt-4 p-4'>
          <div className='flex flex-1 flex-col gap-[1rem]'>
            <div className='flex flex-row items-start gap-2 p-[5px]'>
              <img src={Award} alt="Goal-image" />
              <div className='flex flex-col items-start gap-[4px]'>
                <h1 className='text-xs font-normal text-[#878787]'>Target Achieved</h1>
                <h1 className='text-base font-bold text-[#191919]'>$12,500</h1>
              </div>
            </div>
            <div className='flex flex-row items-start gap-2 p-[5px] '>
              <img src={Goal} alt="Goal-image" />
              <div className='flex flex-col items-start gap-[4px]'>
                <h1 className='text-xs font-normal text-[#878787]'>This month Target</h1>
                <h1 className='text-base font-bold text-[#191919]'>$20,000</h1>
              </div>
            </div>
          </div>
          <div className='flex flex-1 flex-col '>
            <div className='w-[160px]'>
              <GuageChart />
            </div>
            <div className='flex justify-between px-5 items-center'>
              <h1 className='text-xs text-[#d1d1d1] font-medium '>$0</h1>
              <h1 className='text-base font-semibold text-[#191919]'>$12</h1>
              <h1 className='text-xs text-[#d1d1d1] font-medium '>$0</h1>
            </div>
            <div className='text-center mt-2'>
              <h1 className='text-xs text-[#191919] font-medium'>Target vs Achievement</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals