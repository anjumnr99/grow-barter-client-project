import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";
import axios from "axios";
import { Link } from "react-router-dom";


const PopularServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                // console.log(res.data);
                setServices(res.data)
            })
    }, []);

    // console.log(services);

   

    return (
        <div className="mt-10 py-10 ">
            <h1 className="text-center text-2xl lg:text-5xl font-semibold lg:mb-10 mb-4">Our Popular Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-1 ">
                {
                    services?.slice(0, 4).map(service => <PopularServiceCard key={service._id} service={service}></PopularServiceCard>)
                }
            </div>

            <Link to='/all-services' className="flex mt-4 items-center justify-center">
                <button  type="button" className="py-3  px-6 inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-300 font-semibold text-xl text-green-500 hover:text-white hover:bg-green-700 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">
                    Show All
                </button>
              
            </Link>

        </div>
    );
};

export default PopularServices;

