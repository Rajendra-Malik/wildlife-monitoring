import React from "react";
import { FaMapMarkerAlt, FaRegClock, FaFacebook, FaTwitter, FaLinkedinIn, FaArrowRight} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import elephant from "../assets/icon/icon-10.png";
import { NavLink, Link} from "react-router-dom";


function Header() {
    return (
        <div className="bg-white">
            {/* headerbar 1 */}
            <div className="bg-[#F3F4F5]">
                <div className=" flex justify-between h-14 items-center w-11/12 m-auto">
                    <div className="flex gap-x-4">
                        <div className="flex items-center gap-x-2">
                            <div>
                                <FaMapMarkerAlt className="text-[#2EB872]" />
                            </div>
                            <small className="text-base">123 Street, Xavier Square, BBSR</small>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div>
                                <FaRegClock className="text-[#2EB872]" />
                            </div>
                            <small className="text-base">Mon - Fri : 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div className="flex items-center gap-x-2">
                            <MdAddIcCall className="text-[#2EB872]" />
                            <small className="text-base">+012 345 6789</small>
                        </div>
                        <div className="flex gap-x-2 ">
                            <div className="bg-[#FFFFFF] h-8 w-8 rounded-md flex items-center justify-center">
                                <FaFacebook className="text-[#2EB872]" />
                            </div>
                            <div className="bg-[#FFFFFF] h-8 w-8 rounded-md flex items-center justify-center">
                                <FaTwitter className="text-[#2EB872]" />
                            </div>
                            <div className="bg-[#FFFFFF] h-8 w-8 rounded-md flex items-center justify-center">
                                <FaLinkedinIn className="text-[#2EB872]" />
                            </div>
                            <div className="bg-[#FFFFFF] h-8 w-8 rounded-md flex items-center justify-center">
                                <IoLogoInstagram className="text-[#2EB872]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* headerbar 2 */}
            <div className="flex justify-between w-11/12 m-auto ">
                <div className="flex items-center gap-x-4">
                    <div>
                        <img src={elephant} alt="" />
                    </div>
                    <h1 className="text-4xl text-[#2EB872]">
                        WILDLIFE MONITORING
                    </h1>
                </div>
                <div className="flex gap-x-6 items-center">
                    <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen">
                        <NavLink to="/">HOME</NavLink>
                    </div>
                    <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen">
                        <NavLink to="/about">ABOUT</NavLink>
                    </div>
                    <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen">
                        <NavLink to="/services">SERVICES</NavLink>
                    </div>
                    <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen">
                        <NavLink to="/info">INFORAMATION</NavLink>
                    </div>
                    <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen">
                        <NavLink to="/contact">CONTACT ME</NavLink>
                    </div>
                    <div className="text-white bg-[#4DC387] h-[35px] w-[115px] text-semibold flex  justify-center items-center rounded-sm gap-x-2">
                        <Link to="/login">LOGIN </Link>
                        <span><FaArrowRight /></span>
                    </div>
                </div>
            </div>


         
        </div>
    );
}

export default Header;