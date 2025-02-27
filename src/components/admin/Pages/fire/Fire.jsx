import { useEffect, useState } from "react";
import Loader from "../Loader.jsx"
import axios from "axios";
import DataTable from "react-data-table-component";
// import { CiEdit } from "react-icons/ci"
import { TbHttpDelete } from "react-icons/tb";



const Fire = () => {
    const [loader, setLoader] = useState(false);
    const [fireData, setFireData] = useState([]);

    async function fetchFire() {
        setLoader(true);

        try {
            const result = await axios.get("http://localhost/wildlife_backend/api/fire.php");
            if (result.status === 200) {
                if (result.data.status === "1") {
                    setFireData(result.data.post);
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

    useEffect(() => {
        fetchFire();
    }, []);

    const columns = [
        {
            name: "SL",
            selector: (row) => row.id,
            sortable: true,
            width: "60px"
        },
        {
            name: "Forest Name",
            selector: (row) => row.forest_name,
            width: "100px"
        },
        {
            name: "Year",
            selector: (row) => row.year,
            width: "70px"
        },
        {
            name: "Month",
            selector: (row) => row.month,
            width: "100px"
        },
        {
            name: "Fire Duration",
            selector: (row) => row.fire_duration,
            width: "100px"
        },
        {
            name: "Affected Area",
            selector: (row) => row.affected_area_approx,
            width: "160px"
        },
        {
            name: "Remarks",
            selector: (row) => row.remarks,
            width: "250px"
        },
        {
            name: "Latitude",
            selector: (row) => row.latitude,
            width: "80px"
        },
        {
            name: "Longitude",
            selector: (row) => row.longitude,
            width: "80px"
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
            <div className="mt-12 -ml-18 shadow-2xl">
                {
                    loader ? (<Loader />) : (<DataTable columns={columns} data={fireData}
                        pagination
                        // fixedHeader
                        // fixedHeaderScrollHeight="495px"
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
        </>
    );
}

export default Fire;