import React from 'react'
import { SearchIcon } from '../assets'

const SearchWithDebounce = ({ onChange, value, type = "text", placeholder = "Search here" }) => {
  return (
    <div className='flex flex-1 items-center justify-between bg-[#FFFFFF] rounded-[12px] shadow-md px-[16px] py-[10px] min-w-[352px]'>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} className='border border-none focus:outline-none focus:ring-0 focus:border-transparent'  />
      <img className='w-[16px] h-[16px] object-contain cursor-pointer' src={SearchIcon} alt="searchIcon" />
    </div>
  )
}

export default SearchWithDebounce