import { useEffect, useState } from "react";
import Loader from "../Loader.jsx"
import axios from "axios";
import DataTable from "react-data-table-component";
import { CiEdit } from "react-icons/ci"
import { TbHttpDelete } from "react-icons/tb";



const ForestSpecies = () => {
    const [loader, setLoader] = useState(false);
    const [speciesData, setSpeciesData] = useState([]);

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

    useEffect(() => {
        fetchSpeciesData();
    }, []);

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
            <div className="mt-24 -ml-18">
                {
                    loader ? (<Loader />) : (<DataTable columns={columns} data={speciesData}
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
        </>
    );
}

export default ForestSpecies;