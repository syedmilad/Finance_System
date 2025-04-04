import React, { useCallback } from 'react'
import { ChecronsRight, NotificationIcon } from '../assets'
import SearchWithDebounce from '../components/SearchWithDebounce'

const Header = () => {
  const [inputValue, setInputValue] = React.useState('');
  const debounce = (callback, delay) => {
    let timeoutId;
    return (value) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(value)
      }, delay);
    }
  }
  const hanldeSearch = (value) => {
    try {
      console.log("searching for ", value)
    } catch (error) {
      console.log("error in search", error)
    }
  }
  const debounceSearch = useCallback(debounce(hanldeSearch, 1000), []);
  return (
    <div className='w-full h-full bg-[#F4F5F7] flex items-center justify-between px-[16px] py-[10px] '>
      <div className='flex flex-row justify-start items-center gap-4'>
        <p className='text-lg text-[#191919] font-bold'>Hello Milad  </p>
        <div className='flex flex-row justify-start items-center gap-1'>
          <img src={ChecronsRight} className='w-[20px] h-[20px] object-cover' alt="ChecronsRight" />
          <p className='text-sm font-normal text-[#9F9F9F]'>May 19, 2025</p>
        </div>
      </div>
      <div className='flex flex-row justify-start items-center gap-6'>
        <img src={NotificationIcon} alt="notificationIcon" className='w-[16px] h-[16px] object-contain cursor-pointer' />
        <SearchWithDebounce onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
          debounceSearch(value)
        }} value={inputValue} />
      </div>
    </div>
  )
}

export default Header