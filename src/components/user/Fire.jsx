import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Fire = () => {

    const [spinner, setSpinner] = useState(false);
    const [fireData, setFireData] = useState([]);

    useEffect(() => {
        async function getFireData() {
            setSpinner(true);
            try {
                const result = await axios.get("http://localhost/wildlife_backend/api/fire.php");
                if (result.status === 200) {
                    if (result.data.status === "1") {
                        setFireData(result.data.post);
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
        <div className="h-full w-full p-5">
        {spinner ? (
             <div className="flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        ) : (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16" id="species_one">
                    {fireData.map((fire) => (
                        <div key={fire.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img
                                src={`http://localhost:5173/src/assets/upload/species/fire/${fire.images}`}
                                alt=""
                                className="h-[250px] w-[250px] object-cover rounded-md"
                            />
                            <h1 className="font-bold mt-2">{fire.forest_name}</h1>
                            <p className="text-gray-700">Year: {fire.year}</p>
                            <p className="text-gray-700">Month: {fire.month}</p>
                            <p className="text-gray-700">Fire Duration: {fire.fire_duration}</p>
                            <p className="text-gray-700">Affected Area: {fire.affected_area_approx}</p>
                            <p className="text-gray-700"> {fire.remarks}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
    );
}

export default Fire;