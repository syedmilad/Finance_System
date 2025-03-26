import React from 'react'
import { SearchIcon } from '../assets'

const SearchWithDebounce = ({ onChange, value, type = "text", placeholder = "Search here" }) => {
  return (
    <div className='flex flex-1 items-center justify-between bg-[#FFFFFF] rounded-[12px] shadow-md px-[24px] py-[12px] min-w-[352px]'>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} className='border border-none focus:outline-none focus:ring-0 focus:border-transparent'  />
      <img className='w-[24px] h-[24px] object-contain cursor-pointer' src={SearchIcon} alt="searchIcon" />
    </div>
  )
}

export default SearchWithDebounce