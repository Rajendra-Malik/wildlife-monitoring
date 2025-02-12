import Button from '@mui/material/Button';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineTableView } from "react-icons/md";
import { MdOutlineSettingsPower } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from 'react-collapse';
import { useState } from 'react';
import { useEffect } from "react";
import Content from "../Content/Index.jsx";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify';

const Sidebar = () => {

    const [usersList, setUsersList] = useState([]);
    const [submenuIndex, setSubMenuIndex] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        // userData();
        console.log(usersList);
    }, [usersList]); // Runs whenever usersList updates

    const isOpenSubMenu = (index) => {
        if (submenuIndex === index) {
            setSubMenuIndex(null);
        } else {
            setSubMenuIndex(index);
        }
    }

    // network call 
    async function userHandler() {

        try {
            const result = await axios.get("http://localhost/wildlife_backend/api/user.php");
            if (result.status === 200) {
                if (result.data.status === "1") {
                    setUsersList(result.data.post);
                    // console.log(usersList);
                    toast.success(result.data.successMessage);
                } else if (result.data.status === "0") {
                    toast.error(result.data.errorMessage);
                }
            } else {
                toast.error("Statis not 200");
            }

        } catch (error) {
            toast.error("Error: Please check this API URL");
        }
    }

    return (
        <>
            <div className="sidebar fixed top-0 left-0 bg-[#fff] w-[16%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-2">
                <div className="py-1 px-4 w-full">
                    <h3 className="font-bold text-2xl">Logo</h3>
                </div>
            </div>

            <ul className="mt-4 px-5 flex flex-col gap-y-1">
                <li>
                    <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'>
                        <MdOutlineDashboardCustomize className="text-[16px]" /><span>Dashboard</span>
                    </Button>
                </li>

                <li>
                    <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'
                        onClick={userHandler}>
                        <FaRegCircleUser className="text-[16px]" /><span>User</span>
                    </Button>
                </li>

                <li>
                    <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'>
                        <MdOutlineTableView className="text-[16px]" /><span>Table</span>
                        <span className="ml-auto w-[30px] h-[30px] flex items-center" onClick={() => isOpenSubMenu(1)}> <FaAngleDown /></span>
                    </Button>

                    <Collapse isOpened={submenuIndex === 1 ? true : false}>
                        <ul className='w-full'>
                            <li className='w-full'>
                                <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !pl-8 !text-[13px]
                                !font-[500] flex gap-[5px]'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.4)] !gap-x-2'></span>
                                    Forest
                                </Button>
                            </li>
                        </ul>
                    </Collapse>

                </li>

                <li>
                    <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'>
                        <MdOutlineSettingsPower className="text-[16px]" /><span>Logout</span>
                    </Button>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;