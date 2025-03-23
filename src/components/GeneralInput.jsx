import React from 'react'

const GeneralInput = ({ type, placeholder, value, onChange, error, label, isIcon, isNotification, notificationText, imgSrc }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between items-center'>
                <label htmlFor="">{label}</label>
                {isNotification && <span>{notificationText}</span>}
            </div>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p>{error}</p>}
            {isIcon && <img src={imgSrc} alt={label} />}
        </div>
    )
}

export default GeneralInput