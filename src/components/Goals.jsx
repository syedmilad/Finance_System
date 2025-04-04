import React from 'react';
import { Award, Edit, Goal } from '../assets';
import GuageChart from './GuageChart';
import Modal from './Modal';

const Goals = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState({
    target: '$500000',
    present: '$20000',
  });

  // Function to handle input changes
  const toggle = () => setIsOpen(!isOpen);

  const onValueChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Values:", input);

    // Here you can handle the form submission, e.g., send data to an API or update state
    toggle()  // Close the modal after submission
    // Reset input values if needed
  }


  return (
    <div className="flex flex-col w-full h-full !overflow-x-hidden !overflow-y-hidden">
      <Modal isOpen={isOpen} onClose={toggle} onSave={onSubmitHandler}>
        <div className='flex flex-col justify-start items-start m-auto gap-4 px-[2rem]'>
          <label className='text-base font-semibold text-[#525256]' htmlFor="Target Amounts">Target Amounts</label>
          <input className='px-[24px] py-[16px] rounded-[8px] border border-[#d1d1d1] w-full' type="text" name='target' placeholder='$500000' value={input.target} onChange={onValueChangeHandler} id='Target Amounts' />
          <label className='text-base font-semibold text-[#525256]' htmlFor="Target Amounts">Presents Amounts</label>
          <input className='px-[24px] py-[16px] rounded-[8px] border border-[#d1d1d1] w-full' type="text" name='present' placeholder='Write presents amounts here' value={input.present} onChange={onValueChangeHandler} id='Target Amounts' />
        </div>
      </Modal>
      {/* Header */}
      <div className='flex flex-row justify-start items-start '>
        <span className='text-lg text-[#878787] font-normal mb-1'>Goals</span>
      </div>
      {/* Total Amount */}
      <div className='shadow-2xl bg-[#fff] rounded-[8px]  p-4'>
        {/* Content Header */}
        <div className='flex flex-col '>
          <div className='flex flex-row justify-between items-center border-b border-b-[#E8E8E8] pb-2  '>
            <div className='flex items-center justify-start gap-2'>
              <h1 className='text-2xl text-[#191919] font-bold '>$20,000</h1>
              <span onClick={toggle} className='p-[8px] rounded-[4px] h-[32px] w-[32px] bg-[#D2D2D240] cursor-pointer'>
                <img src={Edit} alt="Edit-image" className='w-full h-full' />
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
      {/* Modal */}
    </div>
  )
}

export default Goals