import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { transactions } from '../constants/dashboardData'
import Transaction from './Transaction'

const TransactionHistory = () => {
    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = React.useState("all")

    const filteredTransactions = transactions.filter((transaction) => selectedTab === "all" || transaction.type === selectedTab)

    return (
        <div className='flex flex-col w-full h-full  '>
            {/* Header */}
            <div className='flex flex-row justify-between items-center   '>
                <span className='text-lg text-[#878787] font-normal mb-1'>Recent Transaction</span>
                <div className='flex flex-row items-center gap-1 text-xs font-medium cursor-pointer mr-2 '>
                    <span className='text-[#878787] font-normal' onClick={() => navigate("/transactions")} >View All</span>
                    <ChevronRight className='h-4 w-4 text-[#878787] font-normal' />
                </div>
            </div>
            {/* Content */}
            <div className='bg-[#FFFFFF] rounded-[8px] shadow-md pt-[16px] pb-[32px] pr-[24px] pl-[24px]'>
                {/* Tabs */}
                <div className='flex flex-row justify-start items-center mb-4 gap-6'>
                    {["all", "revenue", "expense"].map((item, index) => (
                        <div onClick={() => setSelectedTab(item)} key={index} className={`cursor-pointer  ${item !== selectedTab ? "" : " border-b-[#299D91] border-b-[2px]  text-[#299D91]"}`} >
                            <span className='text-base font-normal '>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                        </div>
                    ))}
                </div>
                {/* content Against tabs */}
                <div className='max-h-[230px] scroll-container'> 
                    {filteredTransactions?.map(({ title, category, icon, amount, date }, index) => (
                        <div className='flex flex-col justify-start items-start gap-2 mb-4' key={index}>
                            <Transaction filteredTransactions={filteredTransactions} index={index} key={index} title={title} category={category} imageUrl={icon} date={date} amount={amount} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory