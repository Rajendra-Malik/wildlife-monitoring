import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Loader from "../Loader.jsx"
import DataTable from "react-data-table-component"
import { CiEdit } from "react-icons/ci"
import { TbHttpDelete } from "react-icons/tb";


const Forest = () => {

    const [speciesMapping, setSpeciesMapping] = useState([]);
    const [loader, setLoader] = useState(false);

    // get api call 
    async function fetchSpeciesData() {
        setLoader(true);
        try {
            const result = await axios.get("http://localhost/wildlife_backend/api/forest-mapping.php");
            if (result.status === 200) {
                if (result.data.status === "1") {
                    setSpeciesMapping(result.data.post);
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

    useEffect(() => {
        fetchSpeciesData();
    }, [])
    // table row
    const columns = [
        {
            name: "Sl No",
            selector: (row) => row.id,
            sortable: true,
            width: "90px"
        },
        {
            name: "Forest Name",
            selector: (row) => row.forest_name,
            width: "180px"
        },
        {
            name: "Common Name",
            selector: (row) => row.common_name,
            width: "220px"
        },
        {
            name: "Scientific Name",
            selector: (row) => row.scientific_name,
            width: "200px"
        },
        {
            name: "Total Species",
            selector: (row) => row.total_no_of_species,
        },
        {
            name: "Latitude",
            selector: (row) => row.latitude,
        },
        {
            name: "Longitude",
            selector: (row) => row.longitude,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex gap-x-2">
                    <button className="hover:cursor-pointer bg-green-500 h-[27px] w-[45px] rounded-md
                                        flex items-center justify-center">
                        <span className="h-[20px] w-[20px] text-white font-semibold">EDIT</span>
                    </button>
                    {/* <button className="hover:cursor-pointer bg-[#FF5252] h-[27px] w-[45px] rounded-md
                                        flex items-center justify-center">
                        <span><TbHttpDelete className="h-[20px] w-[20px] text-white"/></span>
                    </button> */}
                </div>
            ),
            width: "130px"
        }
    ];

    return (
        <div className=" -ml-18 shadow-2xl">
            {
                loader ? (<Loader />) : (<DataTable columns={columns} data={speciesMapping}
                    pagination
                    // fixedHeader
                    // fixedHeaderScrollHeight="570px"
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <button className="bg-green-500 text-white h-[30px] w-[65px] rounded-md raieway-font
                        cursor-pointer"
                        >Add</button>
                    }
                />)
            }
        </div>
    );
}

export default Forest;