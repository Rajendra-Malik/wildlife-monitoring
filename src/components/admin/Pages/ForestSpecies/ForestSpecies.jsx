import { useEffect, useState } from "react";
import Loader from "../Loader.jsx"
import axios from "axios";
import DataTable from "react-data-table-component";
import { CiEdit } from "react-icons/ci"
import { TbHttpDelete } from "react-icons/tb";



const ForestSpecies = () => {
    const [loader, setLoader] = useState(false);
    const [speciesData, setSpeciesData] = useState([]);
    const [speciesTypes, setSpeciesType] = useState([]);
    const [formData, setFormData] = useState({
        commonName: "",
        scientificName: "",
        speciesTypeId: ""
    });

    async function fetchSpeciesData() {
        setLoader(true);

        try {
            const result = await axios.get("http://localhost/wildlife_backend/api/forest-species.php");
            if (result.status === 200) {
                if (result.data.status === "1") {
                    setSpeciesData(result.data.post);
                }
                else {
                    toast.error(result.data.errorMeaasge);
                }
            }
            else {
                toast.error("Status 404");
            }
        } catch (e) {

        } finally {
            setLoader(false);
        }
    }

    async function fetchSpeciesType() {
        try {
            const fetchspeciesType = await axios.get("http://localhost/wildlife_backend/api/species_type_dropdown.php");
            if (fetchspeciesType.status == 200) {
                if (fetchspeciesType.data.status === "1") {
                    setSpeciesType(fetchspeciesType.data.post);
                }
                else if (fetchspeciesType.data.status == "0") {
                    toast.error(fetchspeciesType.data.errorMessage);
                }
            }
            else {
                toast.error("status 400");
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchSpeciesData();
    }, []);

    useEffect(() => {
        fetchSpeciesType();
    }, []);

    function toggleModal() {
        document.getElementById('modal').classList.toggle('hidden');
    };

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function submitHandler(event) {
        event.preventDefault();
        try {
            const sendForestData = await axios.post("http://localhost/wildlife_backend/api/forest-species.php");
            if (sendForestData.status == 200) {
                if (sendForestData.data.status === "1") {
                    toast.success(sendForestData.data.successMessage);
                    setFormData({
                        commonName: "",
                        scientificName: "",
                        speciesTypeId: ""
                    });
                    toggleModal();
                }
                else if (sendForestData.data.status == "0") {
                    toast.error(sendForestData.data.errorMessage);
                }
            }
            else {
                toast.error("status 400");
            }
        } catch (e) {
            console.log(e);
        }
       
    }


    const columns = [
        {
            name: "Sl_No",
            selector: (row) => row.id,
            sortable: true
        },
        {
            name: "Common Name",
            selector: (row) => row.common_name,
            width: "200px"
        },
        {
            name: "Scientific Name",
            selector: (row) => row.scientific_name,
            width: "200px"
        },
        {
            name: "Species Type",
            selector: (row) => row.species_type,
            width: "150px"
        },
        {
            name: "Active",
            selector: (row) => row.is_active
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex gap-x-2">
                    <button className="hover:cursor-pointer bg-green-500 h-[27px] w-[45px] rounded-md
                                            flex items-center justify-center">
                        <span className="h-[20px] w-[20px] text-white font-semibold">EDI</span>
                    </button>
                    <button className=" hover:cursor-pointer bg-[#FF5252] h-[27px] w-[45px] rounded-md
                                            flex items-center justify-center">
                        <span><TbHttpDelete className="h-[20px] w-[20px] text-white" /></span>
                    </button>
                </div>
            ),
            width: "130px"
        }
    ];

    return (
        <>
            <div className=" -ml-1 shadow-2xl">
                {
                    loader ? (<Loader />) : (<DataTable columns={columns} data={speciesData}
                        pagination
                        // fixedHeader
                        // fixedHeaderScrollHeight="550px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                        subHeader
                        subHeaderComponent={
                            <button className="bg-green-500 text-white h-[30px] w-[65px] rounded-md raieway-font
                            cursor-pointer" onClick={toggleModal}>
                                Add
                            </button>
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
                                    placeholder="Common Name"
                                    required
                                    type="text"
                                    name="commonName"
                                    value={formData.forestName}
                                    onChange={changeHandler}
                                />
                                <input
                                    className="w-full !bg-white !border-black text-left p-2 mt-2 mb-3"
                                    placeholder="Scientific Name"
                                    required
                                    type="text"
                                    name="scientificName"
                                    value={formData.forestName}
                                    onChange={changeHandler}
                                />

                                <div>
                                    <label htmlFor="ftype" className="font-semibold opacity-65 mr-4">Species Type:</label>
                                    <select name="forestTypeId" id="forestTypeId" className="w-[165px] border"
                                        value={formData.speciesTypeId}
                                    onChange={(e) => setFormData({ ...formData, speciesTypeId: e.target.value })}
                                    >
                                        <option value="-1">Select Species type</option>
                                        {
                                            speciesTypes.map((type) => (
                                                <option
                                                    key={type.id}
                                                    value={type.id}
                                                >
                                                    {type.species_type}
                                                </option>
                                            ))
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
                                    type="submit"
                                    className="py-2 px-4 bg-blue-500 text-white rounded font-medium
                                     hover:bg-blue-700 transition duration-500 cursor-pointer">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForestSpecies;