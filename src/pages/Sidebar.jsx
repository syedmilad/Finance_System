import React, { useEffect, useState } from 'react';
import logoWhite from '../assets/logoWhite.svg';
import { sidebaeData } from '../constants/sidebarData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logout, ProfileImg, ThreeDot } from '../assets';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // ✅ Get current path
    const [selected, setSelected] = useState({ title: 'Dashboard', path: '/' })

    useEffect(() => {
        const currentPath = sidebaeData.find((sidebar) => sidebar.path === location.pathname);
        if (currentPath) {
            setSelected(currentPath); // ✅ Set selected state based on current path
        }

    }, [location.pathname]) // ✅ Set selected state based on current path

    return (
        <div className='w-full h-full flex flex-col px-[28px] py-[48px] bg-dark text-white '>
            <div className='flex-1 flex flex-col items-start justify-start '>
                <div className=' flex justify-center items-center w-full mb-[48px]'>
                    <img src={logoWhite} alt="logoWhite" />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    {sidebaeData.map((sidebar, index) => (
                        <Link onClick={() => setSelected(sidebar)} to={sidebar.path} key={index} className={`flex items-center cursor-pointer rounded-[4px] w-full hover:bg-[#262626] ${sidebar.title === selected.title ? "bg-primary hover:bg-primary" : ""} `}>
                            <div className='flex items-center justify-start gap-4 px-[12px] py-[8px]'>
                                <img src={sidebar.icon} className='w-[20px] h-[20px]' />
                                <div className='text-base font-normal text-[#FFFFFFB2]'>{sidebar.title}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex  flex-col'>
                <div onClick={() => {
                    localStorage.setItem('isAuthenticated', false);
                    localStorage.removeItem('userData');
                    navigate('/sign-in', { replace: true })
                }} className='flex justify-start items-center w-full gap-4 px-[16px] py-[12px] bg-[#262626] cursor-pointer rounded-[4px]'>
                    <img src={Logout} alt="logout" />
                    <span >Logout</span>
                </div>
                <div className='w-full border-b h-[3px] mt-6 mb-6 border-b-[#262626]' />
                <div onClick={()=> navigate("/settings")} className='flex justify-center items-center w-full gap-4 px-[12px] py-[8px]'>
                    <img src={ProfileImg} alt="profile" />
                    <div className='flex flex-col'>
                        <p className='text-base text-[#fff] font-semibold'>Milad Developer</p>
                        <p className='cursor-pointer text-sm text-[#fff] font-normal'>View profile</p>
                    </div>
                    <img  className='cursor-pointer' src={ThreeDot} alt="threeDot" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar