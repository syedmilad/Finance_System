import React from 'react'
import { balances } from '../constants/dashboardData'
import Balance from '../components/Balance'
import Modal from '../components/Modal'
import AddBalance from '../components/AddBalance'

const Balances = () => {
  const [balance, setBalance] = React.useState(balances)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isEdit, setIsEdit] = React.useState(false)

  const removeBalanceHandler = (id) => {
    const updatedBalance = balance.filter((balance) => balance.id !== id)
    setBalance(updatedBalance)
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex flex-col w-full h-[calc(100% - 40px)] px-4 py-2 '>
      {/* Add Accounts */}
      <AddBalance isEdit={isEdit} setBalance={setBalance} isOpen={isOpen} toggle={toggle} />
      <span className='text-2xl font-normal text-[#878787]'>Balances</span>
      <div className='flex flex-wrap justify-start items-start gap-4  max-h-[600px] scroll-container'>
        {balance.map((balance, index) => (
          <Balance key={index} balance={{ ...balance }} removeBalance={removeBalanceHandler} />
        ))}
        <div className="flex flex-col flex-1 p-[24px] justify-center items-center rounded-[8px] bg-[#fff] shadow-lg min-w-[290px] min-h-[270px] max-w-[300px] gap-4">
          {/* Header */}
          <button onClick={toggle} className="bg-[#299D91] text-[#fff] px-[32px] py-[12px] rounded-[4px] text-base font-semibold ">Add Accounts</button>
          <button className="bg-[#fff] text-[#9f9f9f] px-[32px] py-[12px] rounded-[4px] text-base font-medium">Edit Accounts</button>
        </div>
      </div>
    </div>
  )
}

export default Balances