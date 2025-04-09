import React from 'react'
import { upcomingBill } from '../constants/dashboardData'

const Bills = () => {
  return (
    <div className='flex flex-col justify-start items-start gap-1 px-4 py-2'>
      <span className='text-lg font-normal text-[#878787]'>Upcoming Bills</span>
      <div className="flex flex-col flex-1 px-[24px] py-[8px] rounded-[8px] bg-[#fff] shadow-lg w-full min-h-[550px] gap-4">
        {/* Header */}
        <div className='overflow-y-auto max-h-[450px] scroll-container w-full'>
          <table className="w-full text-left">
            <thead className='text-sm font-medium text-[#191919] border-b border-b-[#f4f4f4]'>
              <tr>
                <th className='px-2 py-4 font-medium text-base'>Due Date</th>
                <th className='px-2 py-4 font-medium text-base'>Logo</th>
                <th className='px-2 py-4 font-medium text-base'>Items Description</th>
                <th className='px-2 py-4 font-medium text-base'>Last Charge</th>
                <th className='px-2 py-4 font-medium text-base'>Amount</th>
              </tr>
            </thead>
            {upcomingBill.slice(0).map((transaction, index) => (
              <tbody key={index}>
                <tr >
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>
                    <div className='flex justify-start items-center gap-2'>
                      <div className='px-4 py-4 bg-[#f4f4f4] flex flex-col justify-center items-center rounded-[8px]'>
                        <span className='font-normal text-[#5b5b5b] text-base'>{transaction?.date}</span>
                        <span className='font-normal text-[#5b5b5b] text-base'>{transaction?.month}</span>
                      </div>
                    </div>
                  </td>
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>
                    <div className='flex flex-row justify-start items-center gap-2'>
                      <img src={transaction.logo} alt="transaction.logo" className='w-[80px] h-[80px]' />
                      <span>{transaction.name}</span>
                    </div>
                  </td>
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>
                    <div className='flex flex-col w-full'>
                      <span className='text-base font-semibold text-[#191919]'>{transaction.description.charAt(0).toUpperCase() + transaction.description.slice(1)}</span>
                      <span className='max-w-[40px] min-w-full font-normal text-[#5b5b5b] text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptate porro quod totam nesciunt corporis id similique possimus atque ex.</span>
                    </div>
                  </td>
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction?.date}</td>
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>
                    <div >
                      <span className='px-[22px] py-[8px] rounded-[8px] font-bold text-[#191919] border border-[#e8e8e8]' >${transaction.amount}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Bills