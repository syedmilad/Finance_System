import { PencilLineIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Award, Goal } from '../assets'
import GuageChart from '../components/GuageChart'
import Modal from '../components/Modal'
import ApexChart from '../components/ApexChart'
import { expenseCategories } from '../constants/expnses'
import GoalComponent from '../components/GoalComponent'

const Goals = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "area",
        toolbar: { show: false },
      },
      colors: ["#14B8A6", "#D1D5DB"], // Teal and Gray  ray
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [3, 2],
        dashArray: [0, 5], // solid for first, dashed for second
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        labels: {
          colors: "#4B5563",
        },
      },
      xaxis: {
        categories: [
          "May 01", "May 03", "May 05", "May 10", "May 15",
          "May 20", "May 25", "May 30"
        ],
        labels: {
          style: {
            colors: "#6B7280",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: val => `$${val}`,
          style: {
            colors: "#6B7280",
          },
        },
      },
      grid: {
        borderColor: "#E5E7EB",
      },
      tooltip: {
        y: {
          formatter: val => `$${val}`,
        },
      },
    },
    series: [
      {
        name: "This month",
        data: [4200, 1000, 2500, 1800, 2200, 2400, 2100, 2900],
      },
      {
        name: "Same period last month",
        data: [2000, 1500, 1800, 1600, 1700, 1800, 1700, 1900],
      },
    ],
  })
  const [input, setInput] = useState({
    target: "",
    present: ""
  })

  // All Functions is here
  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  const onSubmitHandler = () => {
    console.log("onSubmitHandler")
  }

  const onValueChangeHandler = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex flex-col w-full h-[calc(100% - 40px)] px-4 py-2 ">
      <Modal isOpen={isOpen} onClose={toggle} onSave={onSubmitHandler}>
        <div className='flex flex-col justify-start items-start m-auto gap-4 px-[2rem]'>
          <label className='text-base font-semibold text-[#525256]' htmlFor="Target Amounts">Target Amounts</label>
          <input className='px-[24px] py-[16px] rounded-[8px] border border-[#d1d1d1] w-full' type="text" name='target' placeholder='$500000' value={input.target} onChange={onValueChangeHandler} id='Target Amounts' />
          <label className='text-base font-semibold text-[#525256]' htmlFor="Target Amounts">Presents Amounts</label>
          <input className='px-[24px] py-[16px] rounded-[8px] border border-[#d1d1d1] w-full' type="text" name='present' placeholder='Write presents amounts here' value={input.present} onChange={onValueChangeHandler} id='Target Amounts' />
        </div>
      </Modal>
      <div className="flex flex-col justify-start items-start gap-2 h-full w-full">
        <span className='text-lg font-normal text-[#878787]'>Goals</span>
        <div className='flex flex-row justify-start items-start gap-2 min-h-[250px] w-full'>
          <div className='flex flex-col bg-[#fff] shadow-lg flex-[0.7] min-h-[280px] rounded-[8px] px-4 py-4'>
            {/* Header */}
            <div className='flex flex-row justify-between items-center border-b border-b-[#f4f4f4] pb-2'>
              <span className='text-[#525256] font-medium text-base'>Saving Goal</span>
              <select id="countries" class="bg-[#f4f4f4] border border-[#e8e8e8] text-[#666666] text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-1/2 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringg-gray-500 dark:focus:border-gray-500">
                <option selected>1 May ~ 31 May</option>
              </select>
            </div>
            {/* Content */}
            <div className='flex flex-row w-full px-4 py-4 '>
              <div className='flex flex-col flex-1 gap-4'>
                <div className='flex flex-row justify-start items-start gap-2'>
                  <img src={Award} alt="award-img" />
                  <div className='flex flex-col items-start justify-start gap-2'>
                    <span className='text-base font-base text-[#878787]'>Target Acheived</span>
                    <span className='text-base font-bold text-[#191919]'>$12,500</span>
                  </div>
                </div>
                <div className='flex flex-row justify-start items-start gap-2'>
                  <img src={Goal} alt="goal-img" />
                  <div className='flex flex-col items-start justify-start gap-2'>
                    <span className='text-base font-base text-[#878787]'>This Month Target</span>
                    <span className='text-base font-bold text-[#191919]'>$20,000</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col flex-1 '>
                <div className='w-[180px] justify-center '>
                  <GuageChart />
                </div>
                <div className='flex flex-row justify-between items-center px-4'>
                  <span className='text-base text-[#d1d1d1] font-medium'>$0</span>
                  <span className='text-lg font-semibold text-[#191919]'>$12K</span>
                  <span className='text-base text-[#d1d1d1] font-medium'>$20K</span>
                </div>
                <div className='text-center pt-2'>
                  <h1 className='text-xs text-[#191919] font-medium'>Target vs Achievement</h1>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className='flex flex-row justify-center items-center mt-2'>
              <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer border border-[#299d91] text-[#299d91] px-4 py-2 flex flex-row justify-center items-center gap-2 rounded-[4px]'>
                <span className=''>Adjust Goal  </span>
                <span><PencilLineIcon className='w-5 h-5 object-contain' /></span>
              </div>
            </div>
          </div>
          <div className='flex flex-col bg-[#fff] shadow-lg flex-[1.3] min-h-[280px] rounded-[8px] px-4 py-4'>
            <div className='w-full max-h-[200px]'>
              <ApexChart data={chartData} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <span className='text-lg font-normal text-[#878787]'>Expenses Goals By Category</span>
        <div className='flex flex-row flex-wrap gap-2'>
            {expenseCategories.map((expense,index)=>(
              <GoalComponent key={index} expense={{...expense}} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Goals