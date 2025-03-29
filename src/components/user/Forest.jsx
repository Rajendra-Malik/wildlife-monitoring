import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Forest = () => {
    const [spinner, setSpinner] = useState(false);
    const [forestData, setForestData] = useState([]);

    useEffect(() => {
        async function getFireData() {
            setSpinner(true);
            try {
                const result = await axios.get("http://localhost/wildlife_backend/api/forest.php");
                if (result.status === 200) {
                    if (result.data.status === "1") {
                        setForestData(result.data.post);
                    } else if (result.data.status === "0") {
                        toast.error(result.data.errorMessage);
                    }
                } else {
                    toast.error("Error: Status 400!");
                }
            } catch (e) {
                console.log("Error fetching species data", e);
            } finally {
                setSpinner(false);
            }
        }

        getFireData();
    }, []);

    return (
        <div className="h-full w-full px-16 py-8">
            {spinner ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="flex flex-col gap-8 mt-16" id="species_one">
                    {forestData.map((data) => (
                        <div key={data.id} className="flex items-center bg-white shadow-md rounded-lg px-16 py-8">
                            <div className="flex-1">
                                <h1 className="text-2xl font-bold">{data.forest_name}</h1>
                                <p className="text-lg text-gray-700 mt-2">Type: {data.forest_type}</p>
                            </div>
                            <img
                                src={`http://localhost:5173/src/assets/upload/species/fire/${data.images}`}
                                alt=""
                                className="h-[230px] w-[250px] object-cover rounded-md ml-6"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Forest;