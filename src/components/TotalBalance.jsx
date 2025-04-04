import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useMemo } from 'react';
import { totalBalance } from '../constants/dashboardData';

const TotalBalance = () => {
    const [active, setActive] = React.useState(1);

    const totalAmountWithMemoized = useMemo(() => totalBalance.reduce((acc, { amount }) => {
        console.log("total amount running...")
        return acc + Number(amount.replace(/,/g, ""))
    }, 0), []).toLocaleString()

    const next = () => {
        if (active === 3) return

        setActive((prev) => prev + 1)
    }
    const prev = () => {
        if (active === 1) return

        setActive((prev) => prev - 1)
    }

    return (
        <div className="flex flex-col w-full h-full !overflow-x-hidden !overflow-y-hidden">
            {/* Header */}
            <div className='flex flex-row justify-start items-start '>
                <span className='text-2xl text-[#878787] font-normal mb-1'>Total Balance</span>
            </div>
            {/* Total Amount */}
            <div className='shadow-2xl bg-[#fff] rounded-[8px]  p-6'>
                <div className='flex flex-col '>
                    <div className='flex flex-row justify-between items-center border-b border-b-[#E8E8E8] pb-2  '>
                        <h1 className='text-2xl text-[#191919] font-bold '>${totalAmountWithMemoized}</h1>
                        <h1 className='text-sm font-medium text-[#525256] cursor-pointer'>All Accounts</h1>
                    </div>
                </div>
                <br className='' />
                {/* Card Render */}
                <div className='flex flex-col bg-[#299D91] rounded-[4px] p-4'>
                    <div className='flex flex-row justify-between'>
                        <div>
                            <h1 className='text-sm font-normal text-[#fff]'>Account type</h1>
                            <h1 className='text-base font-bold text-[#fff]'>Credit Card</h1>
                        </div>
                        <img className='h-6' src={totalBalance[active - 1]?.logo} alt="logo" />
                    </div>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-sm font-normal text-[#fff]'>{totalBalance[active - 1]?.accountNumber}</h1>
                        <div className='flex flex-row items-center gap-2'>
                            <h1 className='text-base font-bold text-[#fff]'>${totalBalance[active - 1]?.amount}</h1>
                            <div className='h-8 w-8 rounded-full bg-[#fff] flex justify-center items-center cursor-pointer'>
                                <ArrowUpRight className='h-5 w-5 text-[#299D91] ' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className='flex items-center justify-between mt-4'>
                    <button className='flex items-center gap-2' onClick={prev} disabled={active === 1}>
                        <ChevronLeft /> Previous
                    </button>
                    <div className='flex gap-1'>
                        {Array.from({ length: 3 }, (_, i) => i + 1).map((item, index) => (
                            <div className={`${active === item ? "bg-[#299D91]" : "bg-[#D1D1D1]"} h-2 w-2 mx-1 rounded-full`} key={item}></div>
                        ))}
                    </div>
                    <button className='flex items-center gap-2' onClick={next} disabled={active === 3}>
                        Next <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TotalBalance