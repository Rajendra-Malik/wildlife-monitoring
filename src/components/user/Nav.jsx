import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaUserCircle } from "react-icons/fa";
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineSettingsPower } from "react-icons/md";
import { TbSettingsCheck } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Store from "../zustand/Store"; // import zustand

const Nav = () => {
    const [anchorMyAcc, setAnchorMyAcc] = useState(null);
    const [reportModal, setReportModal] = useState(false); // State for report modal
    const navigate = useNavigate();
    const { userData } = Store(); // zustand variable 

    const openMyAcc = Boolean(anchorMyAcc);
    const handleClickMyAcc = (event) => setAnchorMyAcc(event.currentTarget);
    const handleCloseMyAcc = () => setAnchorMyAcc(null);
    const logOutHandler = () => navigate('/');

    return (
        <div className='w-full h-15 flex items-center justify-between bg-white pl-8 pr-8 rounded-full shadow'>
            <div className='flex gap-x-10 fixed'>
                <div onClick={() => navigate('/user')} className='hover:cursor-pointer'>
                    <img src="../src/assets/wildlife_habitatmonitoring.png" alt="" className='h-[80px] w-[100px]' />
                </div>
                <div className='flex items-center'>
                    <ul className='flex gap-x-12 font-semibold text-md'>
                        <li className='hover:text-[#aca9a9]'>
                            <Link to="/forest">Forest</Link>
                        </li>
                        <li className='hover:text-[#aca9a9]'>
                            <Link to="/species">Species</Link>
                        </li>
                        <li className='hover:text-[#aca9a9]'>
                            <Link to="/fire">Fire</Link>
                        </li>
                        <li
                            className='hover:text-[#aca9a9] relative'
                            onMouseEnter={() => setReportModal(true)}
                            onMouseLeave={() => setReportModal(false)}
                        >
                            <Link>Report</Link>
                            {reportModal && (
                                <div className="absolute top-6 left-0 bg-white shadow-lg p-3 rounded-md w-[200px] z-10">
                                    <p className='text-lg text-gray-700'>24 hours Report.</p>
                                    <div>
                                        
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-x-8 fixed ml-[1300px]'>
                <div>
                    <ul className='flex gap-x-12 font-semibold items-center text-md'>
                        <li className='bg-yellow-300 h-[35px] w-[80px] rounded-full text-center
                        flex items-center justify-center hover:text-[#aca9a9]'>
                            <Link to="/map">Map</Link>
                        </li>
                    </ul>
                </div>

                <div className="relative">
                    <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer flex items-center"
                        onClick={handleClickMyAcc}>
                        <FaUserCircle className="w-[30px] h-[25px] text-[#6A6A6A]" />
                    </div>

                    <Menu
                        anchorEl={anchorMyAcc}
                        id="account-menu"
                        open={openMyAcc}
                        onClose={handleCloseMyAcc}
                        onClick={handleCloseMyAcc}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleCloseMyAcc} className='!bg-white'>
                            <div className="flex items-center gap-3 ">
                                <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                                    <FaUserCircle className="w-[30px] h-[25px] text-[#6A6A6A]" />
                                </div>
                                <div className='info'>
                                    <h3 className='text-[15px] font-[500] leading-5'>{userData.name}</h3>
                                    <p className='text-[12px] font-[400] opacity-70'>{userData.email_id}</p>
                                </div>
                            </div>
                        </MenuItem>
                        <Divider />

                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <FaRegUser className="text-[16px]" /> <span className='text-[14px]'>Profile</span>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <TbSettingsCheck className="text-[16px]" /> <span className='text-[14px]'>Setting</span>
                        </MenuItem>

                        <Divider />
                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <MdOutlineSettingsPower className="text-[18px]" /> <span className='text-[14px]'
                                onClick={logOutHandler}>Log Out</span>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Nav;
