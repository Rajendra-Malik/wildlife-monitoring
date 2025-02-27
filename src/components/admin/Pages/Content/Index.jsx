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


    async function updatedSingleRow(id,is_active) {
        try {
            // console.log("id :" + id); 
            // console.log("active : " + is_active);
            const updateResult = await axios.put(`http://localhost/wildlife_backend/api/user.php/${id}`, {is_active : is_active});
            if (updateResult.status === 200) {
                if (updateResult.data.status === "1") {
                    toast.success(updateResult.data.successMessage);
                } else {
                    toast.error(updateResult.data.errorMessage);
                }
                const re_call_user_data = await axios.get("http://localhost/wildlife_backend/api/user.php");
                if (re_call_user_data.data.status === "1") {
                    setFilterData(re_call_user_data.data.post);
                }
            }
            else {
                toast.error("Status 404");
            }
        } catch (error) {
            console.log("user delete data error => " + error);
        }
    }


    useEffect(() => {
        fetchUserData();
    }, [])

    useEffect(() => {
        // console.log("Updated userData:", userData);
    }, [userData]);

    // filter changes
    useEffect(() => {
        const result = userData.filter((data) => {
            return data.name.match(search);
        })

        setFilterData(result);
    }, [search])


    const column = [
        {
            name: "Sl_No",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            width: "180px"
        },
        {
            name: "Email",
            selector: (row) => row.email_id,
            width: "240px"
        },
        {
            name: "Address",
            selector: (row) => row.address,
            width: "150px"
        },
        {
            name: "PhoneNo",
            selector: (row) => row.phone_no,
            width: "150px"
        },
        {
            name: "Active",
            selector: (row) => row.is_active,
            // width: "150px"
        },
        {
            name: "Action",
            cell: (row) => (
                <button className=" hover:cursor-pointer 
                 flex items-center justify-center" onClick={() => updatedSingleRow(row.id,row.is_active)}>
                    {
                        row.is_active === "t" ?
                            (<div className="h-[27px] w-[75px] rounded-md !text-white bg-[#FF5252] !text-xs
                                flex items-center justify-center !font-bold raieway-font">DEACTIVE</div>) :
                            (<div className="h-[27px] w-[75px] rounded-md !text-white bg-green-500 !text-xs
                                flex items-center justify-center !font-bold raieway-font">ACTIVE</div>)
                    }
                </button >
                // <TbHttpDelete className="h-[27px] w-[45px] rounded-md text-white bg-[#FF5252]" />
            )
        }
    ];

    return (
        <div className="mt-6 shadow-2xl">
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
                            className=" !bg-white !border-b !border-black pt-1 pb-1 pl-2  w-[250px] text-sm 
                            font-normal text-center"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }

                />)
            }
        </div>
    );
}

export default Content;