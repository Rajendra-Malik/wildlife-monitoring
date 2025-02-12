import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footbg mt-32">
            <div className="bg-black h-[100%] w-[100%] opacity-65 flex items-center justify-around pl-10">
                <div className="text-white flex flex-col gap-y-6">
                    <p className="text-white">Address</p>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-2">
                            <p><FaMapMarkerAlt className="text-white" /></p>
                            <p>123 Street, Xavier Square, BBSR</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <p><MdAddIcCall className="text-white" /></p>
                            <p>+012 345 67890</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <p><IoMdMailUnread className="text-white" /></p>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div className="border-2 w-[35px] h-[30px] flex items-center justify-center">
                            <FaTwitter className="text-white"/>
                        </div>
                        <div className="border-2 w-[35px] h-[30px] flex items-center justify-center">
                            <FaFacebook className="text-white"/>
                        </div>
                        <div className="border-2 w-[35px] h-[30px] flex items-center justify-center">
                            <AiFillYoutube className="text-white"/>
                        </div>
                        <div className="border-2 w-[35px] h-[30px] flex items-center justify-center">
                            <FaLinkedinIn className="text-white"/>
                        </div>
                    </div>
                </div>

                {/* quick links  */}
                <div className="flex flex-col gap-y-6">
                    <h1 className="text-white">Quick Links</h1>
                    <ul className="text-white flex flex-col gap-y-2">
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>About Us</p>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>Contact Us</p>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>Our Services</p>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>Term & Condition</p>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>Support</p>
                        </li>
                    </ul>
                </div>

                {/* footer no 3 */}
                <div className="flex flex-col gap-y-6">
                    <h1 className="text-white">Quick Links</h1>
                    <ul className="text-white flex flex-col gap-y-2">
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>About Us</p>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>Contact Us</p>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>Our Services</p>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>Term & Condition</p>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <div><FaAngleRight /></div>
                            <p>Support</p>
                        </li>
                    </ul>
                </div>

                {/* footer no 54 */}
                <div className="flex flex-col gap-y-6">
                    <div className="text-white w-[75%]">
                        <p>Newsletter</p>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    </div>
                    <div className="text-white">
                        <input className="h-[50px] w-[280px] outline-none bg-white text-left text-black pl-4 font-bold text-sm absolute " placeholder="Your Email"/>
                        <button className="bg-[#2EB872] text-sm font-bold h-[40px] w-[85px] float-right mt-1 mr-20 z-10  relative" >SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer