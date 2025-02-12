import React, { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";


function Register() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmpassword: "",
        address: "",
        phoneno: "",
        gender: ""
    })

    function changeHandler(event) {
        // console.log(event.target.value);
        const { name, value, checked, type } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    async function submitHandler(event) {
        event.preventDefault();

        try {
            if (formData.password === formData.confirmpassword) {
                const formValue = {
                    fullname: formData.fullname,
                    email: formData.email,
                    password: formData.password,
                    address: formData.address,
                    phoneNo: formData.phoneno,
                    gender: formData.gender
                };

                const result = await axios.post("http://localhost/wildlife_backend/api/register.php", formValue);
                // console.log("result data:");
                // console.log(result);
                if (result.status === 200) {
                    console.log("status: " + result.status);
                    console.log("result data: " + result.data.status);
                    if (result.data.status == 1) {

                        toast.success(result.data.successMessage);
                        setFormData({
                            fullname: "",
                            email: "",
                            password: "",
                            confirmpassword: "",
                            address: "",
                            phoneno: "",
                            gender: ""
                        });
                        
                    }
                    else if(result.data.status == 0){
                        toast.error(result.data.errorMessage);
                        setFormData({
                            fullname: "",
                            email: "",
                            password: "",
                            confirmpassword: "",
                            address: "",
                            phoneno: "",
                            gender: ""
                        });
                    } 
                }

            } else {
                toast.warning("Password and Confirm Password do not match!");
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred. Please try again later.");
        }
    }

    const [regsPassword, setRegsPassword] = useState(false);
    const [conPassword, setConPassword] = useState(false);

    return (
        <div className="register ">
            <div className=" login-title pb-8">
                Register
            </div>
            <form onSubmit={submitHandler} >

                <div className="form_group ">
                    <label className=" float-left font-semibold">Full Name<sup className="text-red-600 pl-1">*</sup> </label>
                    <input className="text-center w-full"
                        required
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form_group ">
                    <label className=" float-left font-semibold">Email Id<sup className="text-red-600 pl-1">*</sup> </label>
                    <input className="text-center w-full"
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form_group">
                    <label className=" float-left font-semibold">Password<sup className="text-red-600 pl-1">*</sup> </label>
                    <input className="text-center w-full"
                        required
                        type={regsPassword ? ("text") : ("password")}
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                    />

                    <span onClick={() => setRegsPassword(prev => !prev)} className="float-right relative -top-12">
                        {
                            regsPassword ?
                                (<MdOutlineVisibilityOff className="text-[#A2A4A4]" />) :
                                (<MdOutlineVisibility className="text-[#A2A4A4]" />)
                        }
                    </span>
                </div>
                <div className="form_group">
                    <label className=" float-left font-semibold">Confirm Password<sup className="text-red-600 pl-1">*</sup> </label>
                    <input className="text-center w-full"
                        required
                        type={conPassword ? ("text") : ("password")}
                        name="confirmpassword"
                        value={formData.confirmpassword}
                        onChange={changeHandler}
                    />
                    <span onClick={() => setConPassword(prev => !prev)} className="float-right relative -top-12">
                        {
                            conPassword ?
                                (<MdOutlineVisibilityOff className="text-[#A2A4A4]" />) :
                                (<MdOutlineVisibility className="text-[#A2A4A4]" />)
                        }
                    </span>
                </div>
                <div className="form_group">
                    <label className=" float-left font-semibold">Address<sup className="text-red-600 pl-1">*</sup> </label>
                    <input className="text-center w-full"
                        required
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form_group">
                    <label className=" float-left font-semibold">Phone No<sup className="text-red-600 pl-1">*</sup> </label>
                    <input className="text-center w-full"
                        required
                        type="number"
                        name="phoneno"
                        value={formData.phoneno}
                        onChange={changeHandler}
                    />
                </div>
                <fieldset className="flex gap-x-3 p-2 ">
                    <input className="text-[#4DC387]"
                        type="radio"
                        name="gender"
                        value={1}
                        id="male"
                        onChange={changeHandler}
                        checked={formData.gender === "1"}
                    />
                    <label htmlFor="male" className="font-semibold">Male<sup className="text-red-600 pl-1">*</sup></label>
                    <br />
                    <input className="text-[#4DC387]" 
                        type="radio"
                        name="gender"
                        value={2}
                        id="female"
                        onChange={changeHandler}
                        checked={formData.gender === "2"}
                    />
                    <label htmlFor="female" className="font-semibold">Female<sup className="text-red-600 pl-1">*</sup></label>
                </fieldset>
                <div className="login-btn p-2 mt-2 -mr-2">
                    <button type="submit" className="btn w-[105px] h-[35px] float-right text-lg font-bold">SignUp</button>
                </div>
            </form>
        </div>
    );
}

export default Register;