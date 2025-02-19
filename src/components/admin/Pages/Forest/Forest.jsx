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

    useEffect(() => {
        fetchForestData();
    }, [])
    // table row
    const columns = [
        {
            name: "Forest_Name",
            selector: (row) => row.forest_name,
            width: "220px"
        },
        {
            name: "Forest_Type",
            selector: (row) => row.forest_type
        },
        {
            name: "Geom",
            selector: (row) => row.geom,
            width: "200px"
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex gap-x-2">
                    <button className="h-[20px] w-[20px] bg-green-500 rounded-full cursor-pointer">
                        <span><CiEdit className="h-[15px] w-[15px] text-white"/></span>
                    </button>
                    <button className="h-[20px] w-[20px] bg-[#FF5252] rounded-full pl-1 cursor-pointer">
                        <span><MdOutlineAutoDelete className="h-[15px] w-[15px] text-white" /></span>
                    </button>
                </div>
            )
        }
    ];

    return (
        <div className="mt-24 ml-2">
            {
                loader ? (<Loader />) : (<DataTable columns={columns} data={forestData}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="495px"
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