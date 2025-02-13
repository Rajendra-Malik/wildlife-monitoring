import axios from "axios"
import { toast } from 'react-toastify';
import Loader from "../Loader.jsx";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TbHttpDelete } from "react-icons/tb";

const Content = () => {

    const [loader, setLoader] = useState(false);
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState(""); // filter changes
    const [filterData, setFilterData] = useState([]); // filter changes

    function deleteRow(id) {
        
    }

    async function fetchUserData() {
        setLoader(true);

        try {
            const result = await axios.get("http://localhost/wildlife_backend/api/user.php");
            if (result.status === 200) {
                if (result.data.status === "1") {
                    setUserData(result.data.post);
                    setFilterData(result.data.post); // filter changes
                    // toast.success(result.data.successMessage);
                } else {
                    toast.error(result.data.errorMessage);
                }
            } else {
                toast.error("Status not 200");
            }
        } catch (error) {
            toast.error("Error: Please check this API URL");
            console.log(error);
        } finally {
            setLoader(false);
        }
    }


    useEffect(() => {
        fetchUserData();
    }, [])

    useEffect(() => {
        // console.log("Updated userData:", userData);
    }, [userData]);

    const column = [
        {
            name: "Sl_No",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email_id
        },
        {
            name: "Password",
            selector: (row) => row.password
        },
        {
            name: "Address",
            selector: (row) => row.address
        },
        {
            name: "PhoneNo",
            selector: (row) => row.phone_no
        },
        {
            name: "Action",
            cell: (row) => (
                <button className=" hover:cursor-pointer bg-[#FF5252] h-[27px] w-[45px] rounded-md
                 flex items-center justify-center" onClick={() => deleteRow(row.id)}>
                    <TbHttpDelete className="h-[20px] w-[20px] text-white"/>
                </button>
            )
        }
    ];

    // filter changes
    useEffect(() => {
        const result = userData.filter((data) => {
            return data.name.match(search);
        })

        setFilterData(result);
    },[search])

    return (
        <div className="mt-6">
            {
                loader ? (<Loader />) : (<DataTable columns={column} data={filterData}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="495px"
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input
                            className=" !bg-[#f1f1f1] pt-1 pb-1 pl-2  !rounded-full text-sm 
                            font-normal text-center"
                            type="text" 
                            value={search}
                            onChange={ (e) => setSearch(e.target.value)}
                        />
                    }

                />)
            }
        </div>
    );
}

export default Content;