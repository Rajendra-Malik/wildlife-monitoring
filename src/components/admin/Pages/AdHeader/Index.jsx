import React from 'react';
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaRegBell } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaUserCircle } from "react-icons/fa";
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineSettingsPower } from "react-icons/md";
import { TbSettingsCheck } from "react-icons/tb";
import Store from '../../../zustand/Store';
import { useNavigate } from "react-router-dom";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const AdHeader = () => {

    const navigate = useNavigate();
    const { userData } = Store();
    const [anchorMyAcc, setAnchorMyAcc] = React.useState(null);
    const openMyAcc = Boolean(anchorMyAcc);
    const handleClickMyAcc = (event) => {
        setAnchorMyAcc(event.currentTarget);
    };
    const handleCloseMyAcc = () => {
        setAnchorMyAcc(null);
    };

    function logOutHandler() {
        navigate('/');
    }

    return (
        <header className="w-full h-[auto] py-2 pl-64 pr-7 bg-[#fff] border-b shadow-md flex items-center justify-between raleway-font">
            <div className="part1">
                <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]'>
                    <RiMenu2Fill className="text-[18px] text-[rgba(0,0,0,0.8)]" />
                </Button>
            </div>

            <div className="part2 w-[40%] flex items-center justify-end gap-5">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <FaRegBell />
                    </StyledBadge>
                </IconButton>

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
                            <FaRegUser className="text-[16px]"/> <span className='text-[14px]'>Profile</span>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <TbSettingsCheck className="text-[16px]"/> <span className='text-[14px]'>Setting</span>
                        </MenuItem>

                        <Divider />
                        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
                            <MdOutlineSettingsPower className="text-[18px]"/> <span className='text-[14px]' onClick={logOutHandler}>Log Out</span>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default AdHeader;