import React from 'react'

const Button = ({ title, onClick,classess }) => {
    return (
        <button onClick={onClick} className={`px-[3rem] py-[0.8rem] flex justify-center items-center rounded-[50px] bg-primary text-[#fff]  text-[24px] leading-[36px] font-semi text-center md:text-[32px] ${classess} ` }>{title}</button>
    )
}

export default Button