import React from 'react'
import { expenseCategories } from '../constants/expnses'
import Expense from '../components/Expense'

const Expenses = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100% - 40px)] px-4 py-2 gap-4">
      <div className='flex flex-col justify-start items-start gap-1'>
        <span className='text-lg font-normal text-[#878787]'>Expensex Comparison</span>
        <div className="flex flex-row flex-wrap flex-1 p-[24px] justify-start items-start rounded-[8px] bg-[#fff] shadow-lg w-full min-h-[20px] gap-4">
          {/* Header */}
          d
        </div>
      </div>

      <div className='flex flex-col justify-start items-start gap-1'>
        <span className='text-lg font-normal text-[#878787]'>Expenses Breakdown</span>
        <div className="flex flex-row flex-wrap gap-4">
          {expenseCategories.map((expense,index)=>(
            <Expense key={index} expense={{...expense}} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Expenses