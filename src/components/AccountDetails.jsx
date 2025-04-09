import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { removeBalanceAction } from '../actions';
import { transactions } from '../constants/balanceData';
import AddBalance from './AddBalance';

const AccountDetails = () => {

  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = React.useState(true)
  const [visible, setVisible] = React.useState(3)

  const { state } = useLocation();
  const { id } = state?.balance || {}

  const balance = useSelector((state) => state.balances.find((balance) => balance?.id === id))

  const isEditModalHanlder = () => {
    setIsOpen(!isOpen)
  }

  const toggle = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
    setIsOpen(false)
  }

  const removeDetailsPage = () => {
    dispatch(removeBalanceAction(id))
  }

  if (!balance) return <div className='flex flex-col justify-center items-center w-full h-full'>Balances not found.</div>

  return (
    <div className="flex flex-col w-full h-[calc(100% - 40px)] px-4 py-2 gap-4">
      <AddBalance isOpen={isOpen} toggle={toggle} isEdit={isEdit} initialBalance={balance} />
      <div className='flex flex-col justify-start items-start gap-1'>
        <span className='text-lg font-normal text-[#878787]'>Account Details</span>
        <div className="flex flex-row flex-wrap flex-1 p-[24px] justify-start items-start rounded-[8px] bg-[#fff] shadow-lg w-full min-h-[240px] gap-4">
          {/* Header */}
          <div className='flex flex-wrap w-full h-full gap-4'>
            <div className='min-w-[300px] flex flex-col'> 
              <span className='text-lg font-semibold text-[#191919]'>Bank Name</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.bank}</span>
            </div>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Account Type</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.type}</span>
            </div>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Balances</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.amount || "0"}</span>
            </div>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Branch Name</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.branch || "USA + ISRAIEL"}</span>
            </div>
            <div className='min-w-[300px] flex flex-col'>
              <span className='text-lg font-semibold text-[#191919]'>Account Number</span>
              <span className='text-sm font-normal text-[#9f9f9f]'>{balance.accountNumber}</span>
            </div>
          </div>

          <div className='flex flex-row gap-2 '>
            <button onClick={isEditModalHanlder} className="bg-[#299D91] text-[#fff] px-[32px] py-[12px] rounded-[4px] text-sm font-semibold ">Edit Details</button>
            <button onClick={removeDetailsPage} className="bg-[#fff] text-[#9f9f9f] px-[32px] py-[12px] rounded-[4px] text-sm font-medium" >Remove</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-start items-start gap-1'>
        <span className='text-lg font-normal text-[#878787]'>Transactions History</span>
        <div className="flex flex-col flex-1 px-[24px] py-[8px] rounded-[8px] bg-[#fff] shadow-lg w-full min-h-[328px] gap-4">
          {/* Header */}
          <div className='overflow-y-auto max-h-[280px] scroll-container w-full'>
            <table className="w-full text-left">
              <thead className='text-sm font-medium text-[#191919] border-b border-b-[#f4f4f4]'>
                <tr>
                  <th className='px-2 py-4 font-medium text-base'>Date</th>
                  <th className='px-2 py-4 font-medium text-base'>Status</th>
                  <th className='px-2 py-4 font-medium text-base'>Transaction Type</th>
                  <th className='px-2 py-4 font-medium text-base'>Reciept</th>
                  <th className='px-2 py-4 font-medium text-base'>Amount</th>
                </tr>
              </thead>
              {transactions.slice(0, visible).map((transaction, index) => (
                <tbody key={index}>
                  <tr >
                    <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction.date}</td>
                    <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction?.status}</td>
                    <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction.type}</td>
                    <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction.receiptId}</td>
                    <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction.amount}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className='flex justify-center items-center w-full mt-4'>
              <button onClick={() => setVisible((prev) => prev + 3)} className={`bg-[#299D91] justify-center items-center text-[#fff] px-[32px] py-[12px] rounded-[4px] text-sm font-semibold ${visible >=  transactions.length ? "hidden" : "" }`}>Load More</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AccountDetails