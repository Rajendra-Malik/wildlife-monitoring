import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Species = () => {
    const [spinner, setSpinner] = useState(false);
    const [allSpecies, setAllSpecies] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        async function getSpeciesData() {
            setSpinner(true);
            try {
                const result = await axios.get("http://localhost/wildlife_backend/api/user/species.php");
                if (result.status === 200) {
                    if (result.data.status === "1") {
                        setAllSpecies(result.data.post);
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

        getSpeciesData();
    }, []);

    const navigateHandler = (e) => {
        if (e.target.id === "simli") {
            navigate('/simlipal');
        }
        else if (e.target.id === "nandan") {
            navigate('/kanan');
        }
    };


    return (
        <div className="h-full w-full p-5">
            {spinner ? (
                 <div className="flex justify-center items-center h-screen">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            ) : (
                <div>
                    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:text-[#e7e3e3]">All Forest</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:text-[#e7e3e3]"
                            onClick={navigateHandler} id="simli">Similipal</button>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:text-[#e7e3e3]"
                               onClick={navigateHandler} id="nandan">Nandankanan
                            </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:text-[#e7e3e3]">Chandaka</button>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:text-[#e7e3e3]">Bhitarkanika</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16" id="species_one">
                        {allSpecies.map((speciess) => (
                            <div key={speciess.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                                <img
                                    src={`http://localhost:5173/src/assets/upload/species/${speciess.images}`}
                                    alt={speciess.commonName}
                                    className="h-[250px] w-[250px] object-cover rounded-md"
                                />
                                <h1 className="font-bold mt-2">Forest Name: {speciess.forest_name}</h1>
                                <p className="text-gray-700">Common Name: {speciess.common_name}</p>
                                <p className="text-gray-700">Scientific Name: {speciess.scientific_name}</p>
                                <p className="text-gray-700">Category: {speciess.species_type}</p>
                                <p className="text-gray-700">Population Count: {speciess.total_no_of_species}</p>
                                <span className=" text-red-400 hover:text-red-500"><button className="hover:cursor-pointer">Adapted</button></span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Species;
