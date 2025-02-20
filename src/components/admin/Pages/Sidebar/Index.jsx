import Button from '@mui/material/Button';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineTableView } from "react-icons/md";
// import { MdOutlineSettingsPower } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from 'react-collapse';
import { useState } from 'react';
import Content from "../Content/Index.jsx";
import Forest from "../Forest/Forest.jsx";
import ForestSpecies from "../ForestSpecies/ForestSpecies.jsx";
import SpeciesMapping from "../SpeciesMapping/SpeciesMapping.jsx";



const Sidebar = () => {

    const [showContent, setShowContent] = useState(false);
    const [forestHandler, setForestHandler] = useState(false);
    const [speciesContent, setSpeciesContent] = useState(false);
    const [mappingContent, setMappingContent] = useState(false);
    const [submenuIndex, setSubMenuIndex] = useState(null);
    // const navigate = useNavigate();

    const isOpenSubMenu = (index) => {
        if (submenuIndex === index) {
            setSubMenuIndex(null);
        } else {
            setSubMenuIndex(index);
        }
    }


    return (
        <div className="flex gap-x-92">
            <div>
                <div className="raleway-font fixed top-0 left-0 bg-[#fff] w-[16%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-2">
                    <div className="py-1 px-4 w-full">
                        <h3 className="font-bold text-2xl ml-2">Logo</h3>
                    </div>
                </div>

                <ul className="mt-4 px-5 flex flex-col gap-y-1 raleway-font fixed">
                    <li>
                        <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'>
                            <MdOutlineDashboardCustomize className="text-[16px]" /><span>Dashboard</span>
                        </Button>
                    </li>

                    <li>
                        <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full'
                            onClick={() => setShowContent(true)}>
                            <FaRegCircleUser className="text-[16px]" /><span>User</span>
                        </Button>
                    </li>

                    <li>
                        <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px]
                     !text-[rgba(0,0,0,0.8)] font-[600] items-center hover:!bg-[#f1f1f1] !rounded-full' onClick={() => isOpenSubMenu(1)}>
                            <MdOutlineTableView className="text-[16px]" /><span>Table</span>
                            <span className="ml-20 w-[30px] h-[30px] flex items-center">
                                <FaAngleDown />
                            </span>
                        </Button>

                        <Collapse isOpened={submenuIndex === 1 ? true : false}>
                            <ul className='w-full'>
                                <li className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !pl-8 !text-[13px]
                                     !font-[500] flex gap-[5px]' onClick={()=>setForestHandler(true)}
                                    >
                                        <span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.4)] !gap-x-2'></span>
                                        Forest
                                    </Button>
                                </li>

                                <li className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !pl-8 !text-[13px]
                                !font-[500] flex gap-[5px]' onClick={() => setSpeciesContent(true)}>
                                        <span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.4)] !gap-x-2'></span>
                                        Forest Species
                                    </Button>
                                </li>

                                <li className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !pl-8 !text-[13px]
                                !font-[500] flex gap-[5px]' onClick={() => setMappingContent(true)}>
                                        <span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.4)] !gap-x-2'></span>
                                        Species Mapping
                                    </Button>
                                </li>

                                <li className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !pl-8 !text-[13px]
                                !font-[500] flex gap-[5px]'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.4)] !gap-x-2'></span>
                                        Fire
                                    </Button>
                                </li>

                                <li className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !pl-8 !text-[13px]
                                !font-[500] flex gap-[5px]'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.4)] !gap-x-2'></span>
                                        Fire Mapping
                                    </Button>
                                </li>

                                <li className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !pl-8 !text-[13px]
                                !font-[500] flex gap-[5px]'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.4)] !gap-x-2'></span>
                                        Incedent Report
                                    </Button>
                                </li>

                                <li className='w-full'>
                                    <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !pl-8 !text-[13px]
                                !font-[500] flex gap-[5px]'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.4)] !gap-x-2'></span>
                                        Village
                                    </Button>
                                </li>
                            </ul>
                        </Collapse>

                    </li>

                </ul>
            </div>

            <div className="">
                {showContent && <Content />}
                {forestHandler && <Forest />}
                {speciesContent && <ForestSpecies />}
                {mappingContent && <SpeciesMapping />}
            </div>
        </div>
    );
}

export default Sidebar;