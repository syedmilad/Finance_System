import React from 'react'
import Button from '../components/Button'

const Welcome = () => {
  const clickHandler = () => {}
  return (
    <div className=' md:p-0 px-[1rem] flex flex-col items-center justify-center h-screen '>
      <div className='max-w-[899px] '>
        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='text-[40px] font-normal leading-[60px] '>Welcome to the <br />
            <span className='font-semibold'>Finebank - Financial Management Dashboard</span></h1>
          <p className='max-w-[796px] text-[24px] text-grayLight font-normal leading-[34px] '>This file is totally free for personal project & education purpose, for commercial license please contact us</p>
        </div>
        <div className='w-[200px] h-[3px] m-auto bg-grayLight mt-10 my-10' />
        <div className='flex flex-col text-center justify-center items-center'>
          <h1 className='md:text-[32px] text-[24px] font-normal leading-[42px] text-grayDark '>
          To download complete dashboard click below button. 
          Don't worry, <span className='font-bold'>its totally free</span>
          </h1>
          <Button classess="m-6 b-6" onClick={clickHandler} title="Finebank Dashboard" />
          <p className='md:text-[32px] text-[24px] mt-4 text-grayDark font-normal leading-[34px]'>Download more free UI Resources here</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome