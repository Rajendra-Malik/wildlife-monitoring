import tiger from "../assets/bg-1.jpg";
import Carousel from "./Carousel"
import { NavLink, Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import lion from "../assets/about.jpg"
import Card from "./Card"
import parking from "../assets/icon/icon-2.png"
import photo from "../assets/icon/icon-3.png"
import guide from "../assets/icon/icon-4.png"
import food from "../assets/icon/icon-5.png"
import zooshoping from "../assets/icon/icon-6.png"
import wifi from "../assets/icon/icon-7.png"
import playground from "../assets/icon/icon-8.png"
import resthouse from "../assets/icon/icon-9.png"
import dear from "../assets/animal-md-1.jpg"
import cat from "../assets/animal-lg-2.jpg"
import elephant from "../assets/animal-md-3.jpg"
import animal from "../assets/animal-lg-1.jpg"
import jebra from "../assets/animal-md-2.jpg"
import jiraf from "../assets/animal-lg-3.jpg"
import { FaMapMarkerAlt, } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { motion } from "framer-motion"
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Home = ({ slider }) => {
    let forestData = [
        {
            id: 1,
            icon: parking,
            title: "Car Parking",
            description: "Ample forest car parking Safe, and close to nature trails. 🚗"
        },
        {
            id: 2,
            icon: photo,
            title: "Animal Photos",
            description: "Photo allowed, but maintain a 50-meter distance from animals for safety. 📸"
        },
        {
            id: 3,
            icon: guide,
            title: "Guide Services",
            description: "Expert forest guides available for trekking, wildlife spotting, and nature walks.🌳🗺️"
        },
        {
            id: 4,
            icon: food,
            title: "Food & Beverages",
            description: " Enjoy delicious food and refreshing beverages amidst nature. 🌲🥤🍴"
        },
        {
            id: 5,
            icon: zooshoping,
            title: "Zoo Shopping",
            description: "Shop at the forest zoo! Souvenirs, and wildlife gifts await. 🛍️"
        },
        {
            id: 6,
            icon: wifi,
            title: "Free Hi Speed Wi-Fi",
            description: "Enjoy free WiFi in the forest! Stay connected while exploring nature. 📶"
        },
        {
            id: 7,
            icon: playground,
            title: "Play Ground",
            description: "Fun forest playground for kids! Safe, adventurous, and surrounded by nature. 🛝"
        },
        {
            id: 8,
            icon: resthouse,
            title: "Rest House",
            description: "Cozy forest rest house! Relax in comfort, surrounded by serene nature. 🏡"
        },

    ]

    return (
        <>
            <div className="flex w-full mt-2">
                <div className="w-[50%] bg-black">
                    <img src={tiger} alt="" className=" w-full h-[720px] object-cover opacity-45" />
                </div>
                <div className="w-[50%]"> { /* relative */}
                    <Carousel slider={slider} />
                </div>
            </div>
            <div className="w-[470px] h-[250px] absolute flex flex-col top-88 left-10 gap-y-10">
                <div className="text-5xl font-serif text-white">
                    <h1>Enjoy Wonderful Day With Your Family</h1>
                </div>
                <div className="flex items-center gap-x-10">
                    <div className="bg-[#2EB872] w-42 opacity-100 h-12 flex items-center justify-center font-bold">
                        <Link className="text-white">Read More</Link>
                    </div>
                    <motion.div className="flex items-center gap-x-4 cursor-pointer"
                    >
                        <div 
    className="h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center"
    style={{
        animation: "pulseEffect 1.5s infinite ease-in-out",
        boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.5)"
    }}
>
    <IoMdArrowDroprightCircle className="h-8 w-8 text-gray-1000" />
    <style>
        {`
            @keyframes pulseEffect {
                0% {
                    box-shadow: 0 0 0 0 rgba(59, 130, 246, 1);
                }
                50% {
                    box-shadow: 0 0 15px 10px rgba(59, 130, 246, 0.6);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(59, 130, 246, 2);
                }
            }
        `}
    </style>
</div>


                        <p className="text-white font-semibold text-sm">Watch Video</p>
                    </motion.div>
                </div>
            </div>

            {/* why you should visit wildlife monitoring */}
            <div className="flex mt-20 w-10/12 justify-around m-auto gap-x-42">
                <motion.div className="flex flex-col gap-y-6 w-[50%]"
                    initial={
                        {
                            opacity: 0
                        }
                    }
                    whileInView={{
                        opacity: 1,
                        scale: 1.0,
                        transition: {
                            duration: 3
                        }
                    }}
                >

                    {/* left part */}
                    <p className="opacity-75"><span className="text-[#2EB872] mr-2 ">#</span>Welcome To Wildlife</p>
                    <h1 className="font-semibold text-5xl">Why You Should Visit Wildlife Monitoring Forest!</h1>
                    <p className="text-lg opacity-75">
                        Immerse yourself in nature, support wildlife conservation, explore biodiversity, and find peace while learning about fragile ecosystems in a serene forest haven." 🌿
                    </p>
                    <ul className="flex flex-col gap-y-4">
                        <li className="flex gap-x-2 items-center">
                            <FaRegCheckCircle className="text-[#2EB872]" />
                            <span className="text-lg font-semibold opacity-75">Free Car Parking</span>
                        </li>
                        <li className="flex gap-x-2 items-center">
                            <FaRegCheckCircle className="text-[#2EB872]" />
                            <span className="text-lg font-semibold opacity-75">Natural Environment</span>
                        </li>
                        <li className="flex gap-x-2 items-center">
                            <FaRegCheckCircle className="text-[#2EB872]" />
                            <span className="text-lg font-semibold opacity-75">Professional Guide & Security</span>
                        </li>
                        <li className="flex gap-x-2 items-center">
                            <FaRegCheckCircle className="text-[#2EB872]" />
                            <span className="text-lg font-semibold opacity-75">World Best Animals</span>
                        </li>
                        <div className="bg-[#ccdcd4] w-36 h-12 flex items-center justify-center font-semibold">
                            <NavLink className="">Read More</NavLink>
                        </div>
                    </ul>
                </motion.div>

                {/* right part */}
                <motion.div className="w-[50%]"
                    initial={
                        {
                            opacity: 0
                        }
                    }
                    whileInView={{
                        opacity: 1,
                        scale: 1.0,
                        transition: {
                            duration: 3
                        }
                    }}
                >
                    <div className="div_color"></div>
                    <div className="ml-16 -mt-[352px]">
                        <img src={lion} alt="" className="w-[500px] h-[450px] absolute" />
                    </div>
                </motion.div>
            </div>

            {/* no 3 part */}
            <motion.div className="w-10/11 m-auto mt-24"
                initial={
                    {
                        opacity: 0
                    }
                }
                whileInView={{
                    opacity: 1,
                    scale: 1.0,
                    transition: {
                        duration: 3
                    }
                }}
                viewport={{
                    amount: 0.8
                }}
            >
                <div >
                    <img src={tiger} alt="" className="number_tg h-[340px] w-full" />
                </div>
                <div className="flex justify-around -mt-28">
                    <div>

                        {/* db data store */}
                        <h1></h1>
                        <p className="text-white font-semibold text-lg">Total Animal</p>
                    </div>
                    <div>

                        <h1></h1>
                        <p className="text-white font-semibold text-lg">Daily Vigitors</p>
                    </div>
                    <div>

                        <h1></h1>
                        <p className="text-white font-semibold text-lg">Total Membership</p>
                    </div>
                    <div className="">

                        <h1></h1>
                        <p className="text-white font-semibold text-lg">Save Wild Life</p>
                    </div>
                </div>
            </motion.div>

            {/* 4th part */}
            <motion.div className="mt-40 w-11/12 m-auto"
                initial={
                    {
                        opacity: 0
                    }
                }
                whileInView={{
                    opacity: 1,
                    scale: 1.0,
                    transition: {
                        duration: 3
                    }
                }}
                viewport={{
                    amount: 0.8
                }}
            >
                <div className="flex justify-between pl-8 pr-8">
                    <div className="w-[475px] flex flex-col gap-y-2">
                        <p className="text-md"><span className="text-[#2EB872] mr-2">#</span>Our Services</p>
                        <h1 className="text-5xl font-semibold">Special Services For <span className="text-[#2EB872]">Forest</span> Visitors</h1>
                    </div>
                    <div className="bg-[#2EB872] w-[650px] h-[155px] flex items-center justify-center">
                        <div><MdPhoneIphone className="text-white h-[70px] w-[70px]" /></div>
                        <div>
                            <p className="text-white font-semibold">Call for more info</p>
                            <h1 className="text-white text-4xl font-semibold">+012 345 6789</h1>
                        </div>
                    </div>
                </div>

            </motion.div>

            <div className="w-full m-auto flex flex-wrap justify-center pl-18 mt-16 gap-y-10 gap-x-8">
                {
                    forestData.map((data) => {
                        return <Card key={data.id} data={data} />
                    })
                }
            </div>

            {/* our animals part */}
            <div className=" w-full flex flex-col mt-20 gap-y-12 ">
                <div className="w-10/11 flex m-auto justify-between pl-4 pr-8">
                    <div className="w-[505px] flex flex-col gap-y-4">
                        <p className="font-semibold opacity-75"><span className="text-[#2EB872] mr-2">#</span>Our Animals</p>
                        <h1 className="text-5xl font-semibold leading-14">
                            Let`s See Our<span className="text-[#2EB872] ml-6">Wildlife</span> Awsome Animals
                        </h1>
                    </div>
                    <div className="bg-[#2EB872] opacity-100 w-72 h-14 hover:cursor-pointer text-white flex items-center justify-center font-semibold mt-20">
                        <Link className="text-white opacity-100">Read More</Link>
                    </div>
                </div>

                {/* animal */}
                <div className="w-full">
                    <div className="flex justify-center gap-x-8">
                        <div className="w-[400px] h-full hover:bg-black">
                            <img src={dear} alt="" className=" hover:opacity-75" />
                        </div>
                        <div className="w-[440px]  hover:bg-black">
                            <img src={cat} alt="" className=" hover:opacity-75" />
                        </div>
                        <div className="w-[400px] h-full hover:bg-black">
                            <img src={elephant} alt="" className=" hover:opacity-75" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-7 -mt-68 ">
                        <div className="hover:bg-black">
                            <img src={animal} alt="" className="w-[402px] h-[507px] hover:opacity-75" />
                        </div>
                        <div className=" mt-72 hover:bg-black">
                            <img src={jebra} alt="" className="h-[220px] w-[445px] hover:opacity-75" />
                        </div>
                        <div className="hover:bg-black">
                            <img src={jiraf} alt="" className="w-[400px] h-[507px] hover:opacity-75" />
                        </div>
                    </div>
                </div>
            </div>


            {/* visiting hours and contact info */}
            <div className="ml-20 mt-24 ">
                <div className="bg flex ">
                    <div className="bg-[#000000] opacity-65 h-full w-[47%] pl-12 pr-12 flex flex-col items-center justify-center gap-y-4">
                        <h2 className="text-white text-5xl font-semibold mb-6 -ml-65">Visiting Hours</h2>
                        <div className="flex justify-between items-center pl-4 pr-4 w-full font-bold  h-[35px] bshadow">
                            <p className="">Monday</p>
                            <p>9:00AM - 6:00PM</p>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-full font-bold  h-[35px] bshadow">
                            <p>Tuesday</p>
                            <p>9:00AM - 6:00PM</p>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-full font-bold  h-[35px] bshadow">
                            <p>Wednesday</p>
                            <p>9:00AM - 6:00PM</p>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-full font-bold  h-[35px] bshadow">
                            <p>Thursday</p>
                            <p>9:00AM - 6:00PM</p>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-full font-bold  h-[35px] bshadow">
                            <p>Friday</p>
                            <p>9:00AM - 6:00PM</p>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-full font-bold  h-[35px] bshadow">
                            <p>Saturday</p>
                            <p>9:00AM - 6:00PM</p>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-full font-bold  h-[35px] bshadow">
                            <p>Sunday</p>
                            <p>Closed</p>
                        </div>
                    </div>
                    <div className="bg-[#000000] opacity-65 border-2 h-full w-[48%] flex flex-col justify-center  gap-y-4">
                        <h1 className="text-white text-5xl font-semibold -mt-16 -ml-1">Contact Infi</h1>
                        <div className="flex justify-between items-center pl-4 pr-4 w-[600px] font-bold  h-[35px] bshadow">
                            <p>Office</p>
                            <p>123 Street, Xavier Square, BBSR</p>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-[600px] font-bold  h-[35px] bshadow">
                            <p>Office</p>
                            <p>123 Street, Xavier Square, BBSR</p>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-[600px] font-bold  h-[65px] bshadow">
                            <p>Ticket</p>
                            <div>
                                <p>+012 345 6789</p>
                                <p>ticket@example.com</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pl-4 pr-4 w-[600px] font-bold  h-[65px] bshadow">
                            <p>Support</p>
                            <div>
                                <p>+012 345 6789</p>
                                <p>support@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* contact info */}
            <div className="w-full mt-20">
                <motion.div className="w-11/12 m-auto flex gap-x-10 ml-30"
                    initial={
                        {
                            opacity: 0
                        }
                    }
                    whileInView={{
                        opacity: 1,
                        scale: 1.0,
                        transition: {
                            duration: 3
                        }
                    }}
                    viewport={{
                        amount: 0.8
                    }}
                >
                    <div className="bg-[#F3F4F5] w-[400px] h-[175px] flex items-center justify-center gap-x-4 pl-4 pr-4">
                        <div className="bg-white h-[39px] w-[40px] rounded-md flex items-center justify-center">
                            <FaMapMarkerAlt className="text-[#2EB872] h-[20px] w-[20px]" />
                        </div>
                        <div className="flex flex-col w-[250px]">
                            <p className="opacity-75 text-md"><span className="text-[#2EB872] pr-1 ">#</span>Address</p>
                            <h1 className="text-xl">123 Street, Xavier Square, BBSR</h1>
                        </div>
                    </div>
                    <div className="bg-[#F3F4F5] w-[400px] h-[175px] flex items-center justify-center gap-x-4 pl-4 pr-4">
                        <div className="bg-white h-[39px] w-[40px] rounded-md flex items-center justify-center">
                            <MdCall className="text-[#2EB872] h-[20px] w-[20px]" />
                        </div>
                        <div className="flex flex-col w-[250px]">
                            <p className="opacity-75 text-md"><span className="text-[#2EB872] pr-1">#</span>Call Now</p>
                            <h1 className="text-xl">+012 345 6789</h1>
                        </div>
                    </div>
                    <div className="bg-[#F3F4F5] w-[400px] h-[175px] flex items-center justify-center gap-x-4 pl-4 pr-4">
                        <div className="bg-white h-[39px] w-[40px] rounded-md flex items-center justify-center">
                            <IoIosMailOpen className="text-[#2EB872] h-[20px] w-[20px]" />
                        </div>
                        <div className="flex flex-col w-[250px]">
                            <p className="opacity-75 text-md"><span className="text-[#2EB872] pr-1">#</span>Mail Now</p>
                            <h1 className="text-xl">info@example.com</h1>
                        </div>
                    </div>
                </motion.div>

                <div className="w-11/12 m-auto mt-14 ml-28 flex gap-x-4">
                    <div className="flex flex-col gap-y-6">
                        <div className="w-[590px] flex flex-col gap-y-6">
                            <p className=""><span className="text-[#2EB872] pr-1">#</span>Contact Us</p>
                            <h1 className="raieway-font text-5xl font-bold leading-15">Have Any Query? Please Contact Us!</h1>
                            <p className="text-md opacity-75 ">The contact form is currently inactive. Get a functional and working
                                contact form with Ajax & PHP in a few minutes.
                                Just copy and paste the files, add a little code and you're done.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <div className="flex gap-x-4">
                                <input className="w-[280px] h-[45px] !rounded-md !border-none text-center"
                                    type="text"
                                    placeholder="Youe Name"
                                />
                                <input className="w-[290px] h-[44px] !rounded-md !border-none text-center"
                                    type="email"
                                    placeholder="Youe Email"
                                />
                            </div>
                            <input type="text" placeholder="Subject" className="h-[45px] !rounded-md !border-none text-center" />
                            <textarea placeholder="Message" className="!rounded-md border-black border-2 text-center" />
                        </div>

                    </div>

                    <div>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6817909415804!2d85.80692917737758!3d20.3077259945068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909f8dfeb3ecb%3A0x1ee91b2b1cab81cb!2sORSAC%20Geoservices!5e0!3m2!1sen!2sin!4v1739881918567!5m2!1sen!2sin"
                        className="w-[600px] h-[450px] border-none " loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                         </iframe> */}
                    </div>
                </div>
            </div>

            {/* missing forest slider  */}

        </>
    )
}


export default Home