import React from 'react'
import { balances } from '../constants/dashboardData'
import Balance from '../components/Balance'

const Balances = () => {
  return (
    <div className='flex flex-col w-full h-full px-4 py-2'>
      <span className='text-2xl font-normal text-[#878787]'>Balances</span>
      <div className='flex flex-wrap justify-start items-start gap-2'>
        {balances.map((balance, index) => (
          <Balance key={index} balance={{ ...balance }} />
        ))}
      </div>
    </div>
  )
}

export default Balances