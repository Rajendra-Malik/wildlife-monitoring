import Button from '@mui/material/Button';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineTableView } from "react-icons/md";
import { MdOutlineSettingsPower } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import {Collapse} from 'react-collapse';

const Sidebar = () => {

    const isOpenSubMenu = (index) => {
        
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
                        <MdOutlineDashboardCustomize className="text-[16px]"/><span>Dashboard</span>
                    </Button>
                </li>

                <li>
                    <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'>
                        <FaRegCircleUser  className="text-[16px]"/><span>User</span>
                    </Button>
                </li>

                <li>
                    <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'>
                        <MdOutlineTableView className="text-[16px]" /><span>Table</span>
                       <span className="ml-auto w-[30px] h-[30px] flex items-center" onClick={()=>isOpenSubMenu(1)}> <FaAngleDown /></span>
                    </Button>

                    <ul>
                        <li><Button></Button></li>
                    </ul>
                </li>

                <li>
                    <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'>
                        <MdOutlineSettingsPower className="text-[16px]"/><span>Logout</span>
                    </Button>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;