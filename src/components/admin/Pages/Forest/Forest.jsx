import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Loader from "../Loader.jsx"
import DataTable from "react-data-table-component"
import { CiEdit } from "react-icons/ci"
import { MdOutlineAutoDelete } from "react-icons/md";


const Forest = () => {

    const [forestData, setForestData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [options, setOptions] = useState([]);

    const [formData, setFormData] = useState({
        forestName: "",
        forestTypeId: ""
    });




    // get api call 
    async function fetchForestData() {
        setLoader(true);
        try {
            const result = await axios.get("http://localhost/wildlife_backend/api/forest.php");
            if (result.status === 200) {
                if (result.data.status === "1") {
                    setForestData(result.data.post);
                    // toast.success(result.data.successMessage);
                } else {
                    toast.error(result.data.errorMessage);
                }
            }
            else {
                toast.error("Status 404");
            }

        } catch (e) {
            console.error(e);
        } finally {
            setLoader(false);
        }
    }

    async function fetchForestType() {
        try {
            const output = await axios.get("http://localhost/wildlife_backend/api/forest-type.php");
            if (output.status === 200) {
                if (output.data.status === "1") {
                    var t = output.data.post;
                    // console.log(t);
                    //t.insertAt({ "key": 'select', "value": -1 }, 0);
                    setOptions(output.data.post);
                    // console.log("options" + options);
                    // toast.success(result.data.successMessage);
                } else {
                    toast.error(output.data.errorMessage);
                }
            }
            else {
                toast.error("Status 404");
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    function toggleModal() {
        document.getElementById('modal').classList.toggle('hidden');
    };


    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();  // Prevent default form submission

        if (!formData.forestName.trim()) {
            alert("All fields are required");
            return;
        }

        try {
            const sendData = await axios.post("http://localhost/wildlife_backend/api/forest.php", formData); 
            if (sendData.status === 200) {
                if (sendData.data.status === 1) {
                    toast.success(sendData.data.successMessage);
                    setFormData({
                        forestName: "",
                        forestTypeId: ""
                    });
                    toggleModal();
                    fetchForestData();
                    //window.location.reload();
                }
                else if(sendData.data.status === 0){
                    toast.error(sendData.data.errorMessage);
                    setFormData({
                        forestName: "",
                        forestTypeId: ""
                    });
                }
            }
            else {
                toast.error("Erroe status 404");
            }
        } catch (error) {
            
        }

    };

    useEffect(() => {
        fetchForestData();
    }, []);

    useEffect(() => {
        fetchForestType();
    }, []);

    // table row
    const columns = [
        {
            name: "Forest_Name",
            selector: (row) => row.forest_name,
            width: "250px"
        },
        {
            name: "Forest_Type",
            selector: (row) => row.forest_type,
            width: "250px"
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex gap-x-2">
                    <button className="h-[20px] w-[20px] bg-green-500 rounded-full cursor-pointer">
                        <span><CiEdit className="h-[15px] w-[15px] text-white" /></span>
                    </button>
                    <button className="h-[20px] w-[20px] bg-[#FF5252] rounded-full pl-1 cursor-pointer">
                        <span><MdOutlineAutoDelete className="h-[15px] w-[15px] text-white" /></span>
                    </button>
                </div>
            )
        }
    ];



    return (
        <div>
            <div className="mt-24 ml-24 shadow-2xl">
                {
                    loader ? (<Loader />) : (<DataTable columns={columns} data={forestData}
                        pagination
                        // fixedHeader
                        // fixedHeaderScrollHeight="495px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                        subHeader
                        subHeaderComponent={
                            <button className="bg-green-500 text-white h-[30px] w-[65px] rounded-md raieway-font
                        cursor-pointer" onClick={toggleModal}
                            >Add</button>
                        }
                    />)
                }
            </div>

            <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden 
                    shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    
                        <form onSubmit={submitHandler}>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h1 className="text-center font-bold text-lg">Forest</h1>

                                <input
                                    className="w-full !bg-white !border-black text-left p-2 mt-2 mb-3"
                                    placeholder="Forest Name"
                                    required
                                    type="text"
                                    name="forestName"
                                    value={formData.forestName}
                                    onChange={changeHandler}
                                />

                                <div>
                                    <label htmlFor="ftype" className="font-semibold opacity-65 mr-4">Forest Type:</label>
                                    <select name="forestTypeId" id="forestTypeId" className="w-[165px] border"
                                        value={formData.forestTypeId} 
                                        onChange={(e) => setFormData({ ...formData, forestTypeId: e.target.value })}
                                    >
                                        <option value="-1">Select Forest type</option>
                                        {
                                            options.map((value) => {
                                                return (
                                                    <option 
                                                        key={value.id}
                                                        value={value.id}
                                                    >
                                                        {value.forest_type}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="bg-gray-200 px-4 py-3 text-right">
                                <button
                                    type="button"
                                    className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2 cursor-pointer"
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>

                                <button
                                    // type="submit"
                                    className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 transition duration-500 cursor-pointer"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forest;