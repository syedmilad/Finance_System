import React from 'react'
import { Cross } from '../assets'

const Modal = ({ onClose, onSave, isOpen, children }) => {
    return (
       <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
                <div className="flex justify-end items-start ">
                    {/* <h2 className="text-xl font-semibold">Modal Title</h2> */}
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2">
                        <img src={Cross} alt="Cross-Image" />
                    </button>
                </div>
                <div className="mb-4">
                    {children}
                </div>
                <div className="flex justify-center">
                    <button onClick={onSave} className="bg-[#299D91] text-white px-8 py-2 rounded">Save</button>
                </div>
            </div>
       </div>
    )
}

export default Modal