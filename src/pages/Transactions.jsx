import React from 'react'
import { transactions } from '../constants/dashboardData'

const Transactions = () => {
  const [visible, setVisible] = React.useState(3)
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedBtn, setSelectedBtn] = React.useState("all")

  const filteredTransactions = transactions.filter((transaction) => selectedBtn === "all" || transaction.type === selectedBtn)

  const handleLoadMore = () => {
    console.log("visible", visible)
    setVisible((prev) => prev + 3)
  }

  return (

    <div className='flex flex-col justify-start items-start gap-1 px-4 py-2'>
      <span className='text-lg font-normal text-[#878787]'>Recent Transactions</span>
      <div className='flex flex-row justify-start items-center gap-4 w-full mb-2'>
        {["all", "expense", "revenue"].map((item, index) => (
          <button onClick={() => setSelectedBtn(item)} key={index} className={`px-[5px] py-[6px] text-base font-normal ${selectedBtn === item ? "text-[#299D91] font-lg border-b border-b-[#299d91] " : ""}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</button>
        ))}
      </div>
      <div className="flex flex-col flex-1 px-[24px] py-[8px] rounded-[8px] bg-[#fff] shadow-lg w-full min-h-[550px] gap-4">
        {/* Header */}
        <div className='overflow-y-auto max-h-[450px] scroll-container w-full'>
          <table className="w-full text-left">
            <thead className='text-sm font-medium text-[#191919] border-b border-b-[#f4f4f4]'>
              <tr>
                <th className='px-2 py-4 font-medium text-base'>Items</th>
                <th className='px-2 py-4 font-medium text-base'>Shop Name</th>
                <th className='px-2 py-4 font-medium text-base'>Date</th>
                <th className='px-2 py-4 font-medium text-base'>Payment Method</th>
                <th className='px-2 py-4 font-medium text-base'>Amount</th>
              </tr>
            </thead>
            {filteredTransactions.slice(0, visible).map((transaction, index) => (
              <tbody key={index}>
                <tr >
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>
                    <div className='flex justify-start items-center gap-2'>
                      <img src={transaction.icon} alt="transaction-img" />
                      <span className='font-normal text-[#5b5b5b] text-base'>{transaction.title}</span>
                    </div>
                  </td>
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction?.category}</td>
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction.date}</td>
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction.type}</td>
                  <td className='px-2 py-4 font-normal text-[#5b5b5b] text-base'>{transaction.amount}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className='flex justify-center items-center w-full mt-4'>
          <button onClick={handleLoadMore} className={`bg-[#299D91] justify-center items-center text-[#fff] px-[32px] py-[12px] rounded-[4px] text-sm font-semibold ${visible >= transactions.length ? "hidden" : ""}`}>Load More</button>
        </div>
      </div>
    </div>
  )
}

export default Transactions