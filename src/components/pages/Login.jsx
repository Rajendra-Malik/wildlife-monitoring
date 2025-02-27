import React, { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import Dashboard from "./Dashboard"


function Login() {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
        loginemail: "",
        loginpassword: ""
    });

    function loginChangeHandler(event) {
        const { name, value } = event.target;
        setLoginFormData(prevLoginFormData => {
            return {
                    ...prevLoginFormData,
                    [name] : value
                }
            })
    }

    async function loginSubmitHandler(event) {
        event.preventDefault();

            // api login Credential code 
        try {
            const newObjData = {
                loginemail: loginFormData.loginemail,
                loginpassword: loginFormData.loginpassword
            }

            if ((newObjData.loginemail == "") || (newObjData.loginpassword == "")) {
                // console.log("email" + newObjData.loginemail);
                // console.log("password" + newObjData.loginpassword);
                toast.warning("Please fillUp all filds");
                return;
            }

            const loginApi = await axios.post("http://localhost/wildlife_backend/api/login.php", newObjData);
            // console.log("loginData: " + loginApi);

            if (loginApi.status === 200) {
                if (loginApi.data.status == 0) {
                    // console.log("sattus Data: " + loginApi.data.status);
                    toast.error(loginApi.data.errorMessage);
                    setLoginFormData({
                        loginemail: "",
                        loginpassword: ""
                    });
                   
                } else if(loginApi.data.status == 1){
                    // toast.success(loginApi.data.success);
                    // toast.success(loginApi.data.post);
                    // console.log(typeof(loginApi.data.post.roll_id));
                    
                    setLoginFormData({
                        loginemail: "",
                        loginpassword: ""
                    });

                    if (parseInt(loginApi.data.post.roll_id) === 1) {
                        
                        navigate("/admin");
                    } else {
                        navigate("/dashboard");
                    }
                        
                }
            } else {
                toast.warning("Please check the API");
            }

        } catch (error) {
            console.log("frontend login error: ");
            console.log(error);
        }
    }


    return (

        <div className=" login-box" >

            <div className=" ">
                <div className=" login-title pb-8">
                    Login
                </div>

                <div className=" login-form">
                    <form onSubmit={loginSubmitHandler} className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-4">
                            <div className="form_group">
                                <label className="register-label font-semibold float-left">Email Id<sup className="text-red-600 pl-1">*</sup> </label>
                                <input className="text-center w-full text-black"
                                    type="email"
                                    name="loginemail"
                                    value={loginFormData.loginemail}
                                    onChange={loginChangeHandler}
                                />
                            </div>
                            <div className="form_group relative">
                                <label className="register-label font-semibold float-left">Password<sup className="text-red-600 pl-1">*</sup> </label>
                                <input className="text-center text-black w-full "
                                    type={showPassword ? ("text") : ("password")}
                                    name="loginpassword"
                                    value={loginFormData.loginpassword}
                                    onChange={loginChangeHandler}
                                />
                                <span onClick={() => setShowPassword((prev) => !prev)} className="float-right relative -top-12">
                                    {
                                        showPassword ? (<MdOutlineVisibilityOff className="text-[#4DC387]" />) :
                                            (<MdOutlineVisibility className="text-[#4DC387]" />)
                                    }
                                </span>
                            </div>
                        </div>

                        <div className=" loginbttm -mt-5 ">
                            <span className="ml-40 ">Don't have an account?</span>
                            <NavLink to="/register" className="font-semibold text-[#4DC387]">SignUp</NavLink>
                            <div className="login-btn p-2 mt-2">
                                <button type="submit" className="btn w-[105px] h-[35px] float-right ">LOGIN</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default Login;