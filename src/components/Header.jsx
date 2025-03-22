import React from "react";
import { FaMapMarkerAlt, FaRegClock, FaFacebook, FaTwitter, FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import elephant from "../assets/icon/icon-10.png";
import { NavLink, Link } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';


function Header() {

    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            controls.start({ top: 0 });
          } else {
            controls.start({ top: '100px' });
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [controls]);

    return (
        <div className="bg-white w-full ">
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
            <motion.div>
                <div className="flex justify-between w-11/12 m-auto headbar">
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
                        <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen hover:cursor-pointer">
                            <button onClick={() => window.scrollTo({ top: 840, left: 0, behavior: "smooth" })}
                                className="hover:cursor-pointer">ABOUT</button>
                        </div>
                        <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen hover:cursor-pointer">
                            <button onClick={() => window.scrollTo({ top: 1950, left: 0, behavior: "smooth" })}
                                className="hover:cursor-pointer">SERVICES</button>
                        </div>
                        <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen hover:cursor-pointer">
                            <button onClick={() => window.scrollTo({ top: 2690, left: 0, behavior: "smooth" })}
                                className="hover:cursor-pointer">INFOTMATION</button>
                        </div>
                        <div className="hover:text-[#2EB872] text-[#292a2bb4] btgreen hover:cursor-pointer">
                            <button onClick={() => window.scrollTo({ top: 4400, left: 0, behavior: "smooth" })}
                                className="hover:cursor-pointer">CONTACT ME</button>
                        </div>
                        <div className="text-white bg-[#2EB872] opacity-100 h-[35px] w-[115px] text-semibold flex  justify-center items-center rounded-sm gap-x-2">
                            <Link className="text-white opacity-100 raieway-font" to="/login">LOGIN </Link>
                            <span><FaArrowRight /></span>
                        </div>
                    </div>
                </div>
            </motion.div>



        </div>
    );
}

export default Header;